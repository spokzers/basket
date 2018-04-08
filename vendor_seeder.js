var papa = require('papaparse');
var fs = require('fs');
var Vendor = require('./models/Vendor');
var mongoose = require('mongoose');

var csvFile = fs.createReadStream('data/vendors.csv');

const MONGODB_URI="mongodb://localhost:27017/basket";

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI);
mongoose.connection.on('error', function(err) {
  console.error(err);
  process.exit();
});

customers = []

papa.parse(csvFile, {
  header: true,
  dynamicTyping: true,
  complete: function (results) {
    console.log("done", results.data.length);
    for(let c of results.data) {
      console.log(c.ID)
      new Vendor({
      _id: parseInt(Object.values(c)[0]),
      name: c.VendorName,
      profile: parseInt(c.VendorProfile),
      product_category: c.ProductCategory
    }).save(function(err) {
      if (err) {
        console.log("error: " + err)
      }
    })
    }
  }
})