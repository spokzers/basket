var papa = require('papaparse');
var fs = require('fs');
var Customer = require('./models/Customer');
var mongoose = require('mongoose');

var csvFile = fs.createReadStream('data/profiles.csv');

const MONGODB_URI="mongodb://localhost:27017/basket";

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI);
mongoose.connection.on('error', function(err) {
  console.error(err);
  process.exit();
});

customers = []

papa.parse(csvFile, {
  dynamicTyping: true,
  complete: function (results) {
    console.log("done", results.data.length);
      console.log(results.data[0])
      let prof = []
      let cuid = 0
      for (var i = 0; i < results.data.length; i++) {
        for (var j = 0; j < results.data[0].length; j++) {
          if (results.data[0][j] != "CustomerID") {
            prof.push({
              category_name: results.data[0][j],
              value: results.data[i][j]
            })
          } else {
            cuid = results.data[i][j]
          }
        }
        console.log(prof, cuid)
        Customer
          .findOneAndUpdate(
            {id: cuid},
            {$push:
              {profile: prof}
            })
          .then((customer) => {
            console.log(customer)
          })
        prof = []
      }
    }
})