var papa = require('papaparse');
var fs = require('fs');
var Customer = require('./models/Customer');
var mongoose = require('mongoose');

var csvFile = fs.createReadStream('data/customers.csv');

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
      new Customer({
      id: parseInt(Object.values(c)[0]),
      name: c.name,
      occupation: c.occupation,
      mobile: c.phone_no,
      email: c.email,
      age: c.age,
      gender: c.gender,
      address: {
        home: c.Home_address,
        office: c.Office_address
      },
      income: c.income
    }).save(function(err) {
      if (err) {
        console.log("error: " + err)
      }
    })
    }
  }
})