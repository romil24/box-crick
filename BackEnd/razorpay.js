const Razorpay = require("razorpay");

const razorpayInstance = new Razorpay({
    key_id: 'rzp_test_cX0VB9927mioP6',
    key_secret: '7Oh9gRs0E4NyRPptXpFE7g03',
});

module.exports = razorpayInstance;