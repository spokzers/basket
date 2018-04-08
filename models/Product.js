var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  vendor: { type: mongoose.Schema.Types.Number, ref: 'Vendor' },
  product_category: String
}, { timestamps: true });

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
