var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
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
  }
}, { timestamps: true });

var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
