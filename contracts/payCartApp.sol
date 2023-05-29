// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

interface IERC20MintableBurnable is IERC20 {
    function mint(address, uint256) external;

    function burnFrom(address, uint256) external;
}

contract PaycartApp is Ownable {
   
      IERC20MintableBurnable public paymentToken;
     
      AggregatorV3Interface internal priceFeed;
   

    mapping(address => string) public email;

    constructor (
     
        address _paymentToken
    ) {
     
        paymentToken = IERC20MintableBurnable(_paymentToken);
        priceFeed = AggregatorV3Interface(
            0xa767f745331D267c7751297D982b050c93985627
        //    0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
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
    function transfer (address _to, uint256 _amount) public {
        uint amount =  _amount;
        address to = _to;
        require(paymentToken.balanceOf(msg.sender) > amount, "You dont have enough balance");
        paymentToken.transferFrom(msg.sender, to, amount);
    }

    function purchaseTokens() public payable {
       
    }

      function issue() payable public {
            uint amountInCents = (msg.value * uint(getLatestPrice())) / 1 ether;
            paymentToken.mint(msg.sender, amountInCents);
    }

    function swapTokens(uint256 amount) public {
        paymentToken.burnFrom(msg.sender, amount);
        // payable(msg.sender).transfer(amount / purchaseRatio);
    }

    function withdraw(uint256 _amount) public onlyOwner {
        (bool success, ) = msg.sender.call{value: _amount}("");
        require(success, "Failed to withdraw Matic");
    }
}