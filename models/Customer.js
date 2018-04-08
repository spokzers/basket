var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  occupation: String,
  income: Number,
  age: Number,
  mobile: String,
  email: String,
  gender: String,
  address: {
    home: String,
    office: String
  },
  profile: [{
    category_name: String,
    value: { type: Number, default: 0.0 }
  }]
}, { timestamps: true });

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
