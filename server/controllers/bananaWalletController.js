const catchAsync = require('../utils/catchAsync');
const { spawn ,spawnSync} = require("child_process");
const { ethers ,BigNumber} = require("ethers");
const admin = require("firebase-admin");

const { Banana } =require*('@rize-labs/banana-wallet-sdk/dist/BananaProvider')
const { Chains } =require('@rize-labs/banana-wallet-sdk/dist/Constants') ;



const jsonRpcChiadoGnosisUrl = 'https://rpc.chiado.gnosis.gateway.fm/'
const bananaInstance = new Banana(Chains.chiadoTestnet, jsonRpcChiadoGnosisUrl);

exports.createBananaWallet= async (req, res, next) => {
    const {walletName} = req.body;
    try{

        console.log( bananaInstance,"instance")
        const wallet = await bananaInstance.createWallet(walletName)

        console.log(wallet,"wallet")
        const address = await wallet.getAddress();
        const signer = wallet.getSigner();
        res.status(200).json({
            status: 'success',
            message:{
              userWalletAdress: address,
              signer:signer
            }
          });
    
  
    }catch(e){
        console.log(e)
        res.status(500).json({
            status: 'success',
            message:{
              error:e.message
            }
          });
    }

}


exports.connectBananaWallet= async (req, res, next) => {
    const {walletName} = req.body;
    try{
        
      
        const wallet = await bananaInstance.connectWallet(walletName)
        console.log(wallet,"wallet")
        const address = await wallet.getAddress();
        const signer = wallet.getSigner();

        res.status(500).json({
            status: 'success',
            message:{
                 userWalletAdress: address,
                  signer:signer
            }
          });

    }catch(e){
        console.log(e)
        res.status(500).json({
            status: 'success',
            message:{
              error:e.message
            }
          });
    }

}
