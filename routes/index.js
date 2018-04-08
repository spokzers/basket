var express = require('express');
var router = express.Router();
var Customer = require('../models/Customer');
var recombee = require('recombee-api-client');
var rqs = recombee.requests;
var client = new recombee.ApiClient('thorasarehgaya', 'dBbgM2AAXtLo5ctOnTOesSstik89ppom2tfyHvprgh5zAE8lnVVBGj7FEvpzx0Iz')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

router.get('/customers', function (req, res) {
  Customer
    .find({})
    .then(function (result) {
      res.render('customers/index', { title: 'Customers', customers: result })
    })

})

router.get('/customers/:id', function(req, res) {
    client.send(new rqs.RecommendItemsToUser("user"+req.params.id, 5), (err, response) => {
      if (err) { console.log(err) }
      // let response = {}
      console.log(response)
      Customer
        .findOne({ id: req.params.id })
        .then((result) => {
          res.render('customers/view', { title: 'Customers', customer: result, recomms: response.recomms });
        })

    });
})

router.get('/marketbasket', (req, res) => {
  res.render('marketbasket', {title: "Market Basket Analysis"})
})

module.exports = router;
