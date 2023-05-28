const catchAsync = require('../utils/catchAsync');
const { spawn ,spawnSync} = require("child_process");
const fs = require('fs')
const Web3 = require('web3')
const HDWalletProvider = require('@truffle/hdwallet-provider')
const paycartcontractAbi =require("../contractAbi/paycartApp.json")
const paycartTokencontractAbi =require("../contractAbi/paycartToken.json")
const { EthereumPrivateKeySignatureProvider } =require('@requestnetwork/epk-signature');
const  { hasSufficientFunds, payRequest, approveErc20, hasErc20Approval, } =require('@requestnetwork/payment-processor');
const RequestNetwork = require('@requestnetwork/request-client.js');
const { ethers ,BigNumber} = require("ethers");
const admin = require("firebase-admin");

exports.createRequest= async (req, res, next) => {


    const {uid,payeeWallet} = req.body;
    console.log(payeeWallet,"wallet")
    const db=admin.firestore();
    const user= (await db.collection("users").doc(uid).get()).data()
    console.log(user,"user")
    const userWallet=user.accounts[0]
     const payeeIdentity = {
        type: RequestNetwork.Types.Identity.TYPE.ETHEREUM_ADDRESS,
        value: payeeWallet?.address,
    };
     
      const payerIdentity = {
        type: RequestNetwork.Types.Identity.TYPE.ETHEREUM_ADDRESS,
        value:userWallet?.address,
      };

      const payeeSignatureInfo = {
        method: RequestNetwork.Types.Signature.METHOD.ECDSA,
        privateKey: payeeWallet?.privateKey,
      };
      const signatureProvider = new EthereumPrivateKeySignatureProvider(payeeSignatureInfo);

      const requestNetwork = new RequestNetwork.RequestNetwork({
        signatureProvider,
        nodeConnectionConfig: { baseURL: "https://goerli.gateway.request.network/" }
      });

      const requestInfo = {
        currency: 'ETH-goerli',
        expectedAmount: '1', // 1 REQ
        payee: payeeIdentity,
        payer: payerIdentity,
      };
     
  
   
    const paymentNetwork = {
        id: RequestNetwork.Types.Extension.PAYMENT_NETWORK_ID.ETH_INPUT_DATA,
        parameters: {
          paymentAddress: '0x92FC764853A9A0287b7587E59aDa47165b3B2675',
        },
      };
      const proxyContractCreateParams = {
        paymentNetwork,
        requestInfo,
        signer: payeeIdentity,
      };
      // Finally create the request and print its id
      
        const request = await requestNetwork.createRequest(proxyContractCreateParams);
        console.log(`Request created with erc20 proxy contract payment network: ${request.requestId}`);
  

      res.status(200).json({
        status: 'success',
        message:{
          requestId:request.requestId
        }
      });

}


exports.payRequest= async (req, res, next) => {
  const {uid,payeeWallet,amount} = req.body;
    try{
      const db=admin.firestore();
      const user= (await db.collection("users").doc(uid).get()).data()
      const userWallet=user.accounts[0]

        const requestNetwork = new  RequestNetwork.RequestNetwork( {nodeConnectionConfig: { baseURL:  "https://goerli.gateway.request.network/"   }});
        const account = userWallet?.address;
        
        const request = await requestNetwork.fromRequestId('01c1227c2f343eb5a1a8ea5cac836c62008143e8fea6d3814494f2a5dd9c798df2');
        const requestData = request.getData();
        console.log(requestData,"data")

    console.log(await hasSufficientFunds(requestData, account),"suff")
    if (!(await hasSufficientFunds(requestData, account))) {
       
      res.status(200).json({
        status: 'success',
        message:{
          requestId:'You do not have enough funds to pay this request'
        }
      });

      throw new Error('You do not have enough funds to pay this request');
    }  
        const provider = new ethers.providers.JsonRpcProvider('https://rpc.goerli.eth.gateway.fm');
        console.log(provider)
        const signer = new ethers.Wallet(userWallet?.privateKey, provider);

       const amountBN=BigNumber.from("1")
        const tx = await payRequest(requestData,signer,amountBN);
    await tx.wait(1);
      console.log(tx,"txxxxx")
    }catch(e){
        console.log(e)
    }

}




exports.sendToken= async (req, res, next) => {
  const {uid,receiver,amount} = req.body;
  const db=admin.firestore();
  const user= (await db.collection("users").doc(uid).get()).data()
  console.log(user,"user")
  const userWallet=user.accounts[0]
  const provider = new HDWalletProvider( userWallet?.privateKey,"https://rpc.goerli.eth.gateway.fm")
  const web3 = new Web3(provider)
  const contract = new web3.eth.Contract(paycartcontractAbi,"");
  const _amount=web3.utils.toWei(amount,'ether')

  const tx=await contract.methods.transfer(receiver,_amount).send({
    from:user.address,
   })
  
  res.status(200).json({
    status: 'success',
    message:{
      transactionHash:tx.transactionHash,
      amount:amount,
    }
  });



}

exports.geTokenBalance= async (req, res, next) => {
  try{
        const {uid} = req.body;
        console.log(uid,"id")
        const db=admin.firestore();
        const user= (await db.collection("users").doc(uid).get()).data()
        console.log(user,"user")
        const userWallet=user.accounts[0]
        console.log(userWallet.privateKey,"pk")
        const provider = new HDWalletProvider( userWallet.mnemonic,"https://rpc.goerli.eth.gateway.fm")
        const web3 = new Web3(provider)
      
        const contract = new web3.eth.Contract(paycartTokencontractAbi,"0xd0BCDa62E1DC2A25e83d087CBDd75484d720b8d0");
      
        const balance = await contract.methods.balanceOf(userWallet.address).call()
        console.log(balance,"balalalalla")
        Number(web3.utils.fromWei(balance, "ether"))
        res.status(200).json({
          status: 'success',
          message:{
            balance: Number(web3.utils.fromWei(balance, "ether"))
          }
        });
  
    }catch(e){
      console.log(e)
      res.status(500).json({
        status: 'success',
        message:{
          error: e.message
        }
      });

    }


}



exports.purchaseToken= async (req, res, next) => {
  try{
      
  }catch(e){
    console.log(e)
  }


}