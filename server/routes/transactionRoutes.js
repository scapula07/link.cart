const express = require('express');


const {geTokenBalance,sendToken,purchaseToken} = require('./../controllers/transactions');


const router = express.Router();


router.route('/get-balance').post(geTokenBalance);
router.route('/send-token').post(sendToken);
router.route('/purchase-token').post(purchaseToken);

module.exports = router;