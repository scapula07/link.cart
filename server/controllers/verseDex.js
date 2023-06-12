const catchAsync = require('../utils/catchAsync');
const { spawn ,spawnSync} = require("child_process");
const fs = require('fs')
const Web3 = require('web3')
const HDWalletProvider = require('@truffle/hdwallet-provider')
const paycartcontractAbi =require("../contractAbi/paycartApp.json")
const yeildLendingcontractAbi =require("../contractAbi/yeildLending.json")
const paycartTokencontractAbi =require("../contractAbi/paycartToken.json")
const { ethers ,BigNumber} = require("ethers");
const IERC20ABI =require("../contractAbi/IERC20.json")




exports.sendToken= async (req, res, next) => {
    
}