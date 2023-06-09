const catchAsync = require('../utils/catchAsync');
const { spawn ,spawnSync} = require("child_process");
const fs = require('fs')
const Web3 = require('web3')
const HDWalletProvider = require('@truffle/hdwallet-provider')
const paycartcontractAbi =require("../contractAbi/paycartApp.json")
const yeildLendingcontractAbi =require("../contractAbi/yeildLending.json")
const paycartTokencontractAbi =require("../contractAbi/paycartToken.json")
const { EthereumPrivateKeySignatureProvider } =require('@requestnetwork/epk-signature');
const  { hasSufficientFunds, payRequest, approveErc20, hasErc20Approval, } =require('@requestnetwork/payment-processor');
const RequestNetwork = require('@requestnetwork/request-client.js');
const { ethers ,BigNumber} = require("ethers");
const IERC20ABI =require("../contractAbi/IERC20.json")



const VERSE_TOKEN_ADDRESS_MAINNET="0x249cA82617eC3DfB2589c4c17ab7EC9765350a18"
const LCART_APP_ADRRESS_GOERLI="0xeF5e2CA27d7c396396e82cCD01DB25bFb663157A"
const LCART_TOKEN_ADRRESS_GOERLI="0xd0BCDa62E1DC2A25e83d087CBDd75484d720b8d0"
const YEILD_LENDING_ADRRESS_GOERLI="0x3d50934C8e0eb198Cf91d817e4E97ecE96d59808"
exports.sendToken= async (req, res, next) => {
  try{
    const {sender,receiver,amount,assest} = req.body;
  
    if(assest==="verse"){
      const provider = new HDWalletProvider(sender?.mnemonic,"wss://eth-mainnet.g.alchemy.com/v2/-dsGUE0osTIPnOyCSZjHdOK_HWdxb85U")
      const web3 = new Web3(provider)
        const contract = new web3.eth.Contract(IERC20ABI,VERSE_TOKEN_ADDRESS_MAINNET);
        const _amount=web3.utils.toWei(amount.toString(),'ether')
      
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
  
    }else{
      const provider = new HDWalletProvider(sender?.mnemonic,"wss://eth-goerli.g.alchemy.com/v2/sgcBjikzerJibFP56D_ohhvTV54WChaZ")
      const web3 = new Web3(provider)
      const contract = new web3.eth.Contract(paycartcontractAbi,LCART_APP_ADRRESS_GOERLI);
        const _amount=web3.utils.toWei(amount.toString(),'ether')
      
        const tx=await contract.methods.transfer(receiver,_amount).send({
          from:sender.address,
        })
        
        res.status(200).json({
          status: 'success',
          message:{
            transactionHash:tx.transactionHash,
            amount:amount,
          }
        });
  
    }
  
  

  }catch(e){
    console.log(e)
    res.status(500).json({
      status: 'failed',
       Error:e?.message
    });
  }
 


}

exports.geTokenBalance= async (req, res, next) => {
  try{
        const {sender} = req.body;
        const goerliProvider = new HDWalletProvider(sender?.mnemonic,"wss://eth-goerli.g.alchemy.com/v2/sgcBjikzerJibFP56D_ohhvTV54WChaZ")
        const mainentProvider = new HDWalletProvider(sender?.mnemonic,"wss://eth-mainnet.g.alchemy.com/v2/-dsGUE0osTIPnOyCSZjHdOK_HWdxb85U")
        const goerliWeb3 = new Web3(goerliProvider)
        const mainnetWeb3 = new Web3(mainentProvider)
      
        const verseContract = new mainnetWeb3.eth.Contract(IERC20ABI,VERSE_TOKEN_ADDRESS_MAINNET);
        const lCartContract = new goerliWeb3.eth.Contract(paycartTokencontractAbi,LCART_TOKEN_ADRRESS_GOERLI);
      
        const balanceVerse = await verseContract.methods.balanceOf(sender?.address).call()
        const balanceLCart = await lCartContract.methods.balanceOf(sender?.address).call()
        console.log(balanceVerse ,"balalalalla")
       
        res.status(200).json({
          status: 'success',
          message:{
            balanceVerse: Number(goerliWeb3.utils.fromWei(balanceVerse, "ether")),
            balanceLCart: Number(goerliWeb3.utils.fromWei(balanceLCart, "ether"))
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


exports.loan= async (req, res, next) => {
  try{
    const {sender,receiver,amount,collateral} = req.body
    const provider = new HDWalletProvider(sender?.mnemonic,"wss://eth-goerli.g.alchemy.com/v2/sgcBjikzerJibFP56D_ohhvTV54WChaZ")
    const web3 = new Web3(provider)
    const _amount=web3.utils.toWei(amount.toString(),'ether')
    const contract = new web3.eth.Contract(yeildLendingcontractAbi,YEILD_LENDING_ADRRESS_GOERLI);
    const tx=await contract.methods.deposit(_amount).send({
      from:sender.address,
      value:_amount
    })
    
    res.status(200).json({
      status: 'success',
      message:{
        transactionHash:tx.transactionHash,
        amount:amount,
      }
    });
  
    }catch(e){
      console.log(e)
      res.status(500).json({
        status: 'failed',
        Error:e.message
      });
    }


}

exports.withdraw= async (req, res, next) => {
  try{
    const {sender,amount} = req.body
    const provider = new HDWalletProvider(sender?.mnemonic,"wss://eth-goerli.g.alchemy.com/v2/sgcBjikzerJibFP56D_ohhvTV54WChaZ")
    const web3 = new Web3(provider)
    const _amount=web3.utils.toWei(amount.toString(),'ether')
    const contract = new web3.eth.Contract(yeildLendingcontractAbi,YEILD_LENDING_ADRRESS_GOERLI);
    const tx=await contract.methods.withdraw(_amount).send({
      from:sender.address,
    })
    
    res.status(200).json({
      status: 'success',
      message:{
        transactionHash:tx.transactionHash,
        amount:amount,
      }
    });
  
    }catch(e){
      console.log(e)
      res.status(500).json({
        status: 'failed',
        Error:e.message
      });
    }


}

exports.stake= async (req, res, next) => {
  try{
    const {sender,amount} = req.body
    const provider = new HDWalletProvider(sender?.mnemonic,"wss://eth-goerli.g.alchemy.com/v2/sgcBjikzerJibFP56D_ohhvTV54WChaZ")
    const web3 = new Web3(provider)
    const _amount=web3.utils.toWei(amount.toString(),'ether')
    const contract = new web3.eth.Contract(yeildLendingcontractAbi,YEILD_LENDING_ADRRESS_GOERLI);
    const tx=await contract.methods.stakeToken(_amount).send({
      from:sender.address,
    })
    
    res.status(200).json({
      status: 'success',
      message:{
        transactionHash:tx.transactionHash,
        amount:amount,
      }
    });
  
    }catch(e){
      console.log(e)
      res.status(500).json({
        status: 'failed',
        Error:e.message
      });
    }


}


exports.earnedReward= async (req, res, next) => {
  try{
    const {sender} = req.body
    const provider = new HDWalletProvider(sender?.mnemonic,"wss://eth-goerli.g.alchemy.com/v2/sgcBjikzerJibFP56D_ohhvTV54WChaZ")
    const web3 = new Web3(provider)
    const contract = new web3.eth.Contract(yeildLendingcontractAbi,YEILD_LENDING_ADRRESS_GOERLI);
    const earned=await contract.methods.reward().call({})
    
    res.status(200).json({
      status: 'success',
      message:{
        amount:earned,
      }
    });
  
    }catch(e){
      console.log(e)
      res.status(500).json({
        status: 'failed',
        Error:e.message
      });
    }


}


exports.purchaseToken= async (req, res, next) => {
  try{
      
  }catch(e){
    console.log(e)
  }


}