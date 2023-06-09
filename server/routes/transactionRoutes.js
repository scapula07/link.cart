const express = require('express');


const {geTokenBalance,
      sendToken,
     purchaseToken,
     stake,
     withdraw,
     loan,
     earnedReward

} = require('./../controllers/transactions');


const router = express.Router();


router.route('/get-balance').post(geTokenBalance);
router.route('/send-token').post(sendToken);
router.route('/earn-reward').post( earnedReward);
router.route('/purchase-token').post(purchaseToken);

module.exports = router;