
const dotenv = require('dotenv');

dotenv.config({ path: 'config.env' });
const app = require('./app');

const PORT = process.env.PORT || 5002;

const fcl = require("@onflow/fcl");
const Web3 = require('web3');
const BridgeBaseAbi = require('./contractAbi/bridgeBase.json');
const HDWalletProvider = require('@truffle/hdwallet-provider')

const BridgeEth_Address="0x50fc120746e15628f09FeAE34439d26f8Db27f9E"
const provider = new HDWalletProvider("999f9d45ebdeab596b59de9e27f54ce895098cceed18846821fff37f705a3c54","wss://eth-goerli.g.alchemy.com/v2/sgcBjikzerJibFP56D_ohhvTV54WChaZ")
const web3 = new Web3(provider)
const bridgeEth = new web3.eth.Contract(BridgeBaseAbi ,BridgeEth_Address);

bridgeEth.events.Transfer(
    {fromBlock: 0, step: 0}
  )
  .on('data', async event => {
    const { from, to, amount, date, nonce } = event.returnValues;
  
    const tx = bridgeBsc.methods.mint(to, amount, nonce);
    const [gasPrice, gasCost] = await Promise.all([
      web3Bsc.eth.getGasPrice(),
      tx.estimateGas({from: admin}),
    ]);
    const data = tx.encodeABI();
    const txData = {
      from: admin,
      to: bridgeBsc.options.address,
      data,
      gas: gasCost,
      gasPrice
    };
    const receipt = await web3Bsc.eth.sendTransaction(txData);
    console.log(`Transaction hash: ${receipt.transactionHash}`);
    console.log(`
      Processed transfer:
      - from ${from} 
      - to ${to} 
      - amount ${amount} tokens
      - date ${date}
    `);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


