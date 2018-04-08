var mongoose = require('mongoose');

var vendorSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  profile: Number,
  product_category: String
}, { timestamps: true });

var Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
