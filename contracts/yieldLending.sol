//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

interface IERC20MintableBurnable is IERC20 {
    function mint(address, uint256) external;

    function burnFrom(address, uint256) external;
}

interface IVault {

    struct Vault {
        uint256 collateralAmount; 
        uint256 debtAmount;
    }
    event Deposit(uint256 collateralDeposited, uint256 amountMinted);
    event Withdraw(uint256 collateralWithdrawn, uint256 amountBurned);

   function deposit(uint256 amountToDeposit) payable external;
   function withdraw(uint256 repaymentAmount) external;

   function getVault(address userAddress) external view returns(Vault memory vault);

   function estimateCollateralAmount(uint256 repaymentAmount) external view returns(uint256 collateralAmount);

   function estimateTokenAmount(uint256 depositAmount) external view returns(uint256 tokenAmount);
   }

   contract YieldLending is IVault, Ownable {

      mapping (address => Vault) vaults;
        uint public totalInvested;
        uint public endTimer;
        uint public startTimer;
        address public admin;
        uint internal _totalSupply; 

      AggregatorV3Interface internal priceFeed;

        mapping(address => uint) public balances;

        address[] stakers;
          event NewInvestor (address investor);

      
        IERC20MintableBurnable public token;
        constructor(address _token){
                token = IERC20MintableBurnable(_token);
                priceFeed = AggregatorV3Interface(
                    0xa767f745331D267c7751297D982b050c93985627
                
                );
            }
           function getLatestPrice() public view returns (int) {
            (
                /* uint80 roundID */,
                int price,
                /* uint startedAt */,
                /* uint timeStamp */,
                /* uint80 answeredInRound */
              ) = priceFeed.latestRoundData();
              return price;
        }
        function deposit(uint256 amountToDeposit) override payable external {
            require(amountToDeposit == msg.value, "incorrect ETH amount");
            uint256 amountToMint = amountToDeposit * uint(getLatestPrice());
            token.mint(msg.sender, amountToMint);
            vaults[msg.sender].collateralAmount += amountToDeposit;
            vaults[msg.sender].debtAmount += amountToMint;
            emit Deposit(amountToDeposit, amountToMint);
        }
    
  
    function withdraw(uint256 repaymentAmount) override external {
        require(repaymentAmount <= vaults[msg.sender].debtAmount, "withdraw limit exceeded"); 
        require(token.balanceOf(msg.sender) >= repaymentAmount, "not enough tokens in balance");
        uint256 amountToWithdraw = repaymentAmount / uint(getLatestPrice());
        token.burnFrom(msg.sender, repaymentAmount);
        vaults[msg.sender].collateralAmount -= amountToWithdraw;
        vaults[msg.sender].debtAmount -= repaymentAmount;
        payable(msg.sender).transfer(amountToWithdraw);
        emit Withdraw(amountToWithdraw, repaymentAmount);
     }

   function getVault(address userAddress) external view override returns(Vault memory vault) {
        return vaults[userAddress];
    }
    
  
    function estimateCollateralAmount(uint256 repaymentAmount) external view override  returns(uint256 collateralAmount) {
        return repaymentAmount /  uint(getLatestPrice());
    }

    function estimateTokenAmount(uint256 depositAmount) external view override returns(uint256 tokenAmount) {
        return depositAmount *  uint(getLatestPrice());
    }
  
    function stakeToken(uint _amountToken) external payable {
        
        if(balances[msg.sender] == 0) {
            emit NewInvestor(msg.sender);   
        }
       token.transferFrom(msg.sender, address(this), _amountToken);
       stakers.push(msg.sender);
       }

        function totalInvestment()  external returns(uint){

       totalInvested = address(this).balance;

      return totalInvested;
  }

   function totalEarnedReward() view external returns(uint){
    
       uint earned = 0;
       earned += totalInvested * (block.timestamp -  startTimer) / 1 minutes;
        
        return earned;
    }

   function startingTimer(uint _value) external returns (uint256) {
       uint time = _value + 1 minutes;
      endTimer = block.timestamp + time;
      startTimer=block.timestamp;

      return  endTimer ;
   }
  

   }