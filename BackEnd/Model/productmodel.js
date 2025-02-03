var mongoose = require("mongoose");

var productDetailsSchema = mongoose.Schema({
  product_name: { type: String },
  product_price: { type: String },
  product_description: { type: String },
  category: { type: String },
  product_img: { type: Array },
  product_address: { type: String },
  time_slots: [{
    slot: { type: String },
    available: { type: Boolean, default: true }
  }],
  Product_stock: { type: String },
  Product_dis_rate: { type: String },
  Product_rating: { type: String },
});

module.exports = mongoose.model("Product_details", productDetailsSchema);
