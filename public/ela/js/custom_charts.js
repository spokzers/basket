// Bar chart
$(function() {
  var data = {
    labels: ["Accessories","Apparel","Breakfast","Cinema","Clothing","Competition","Electronics","Fast Food","Fine Dining","Fragrance","Gadgets","Hair","Lavishness","Make-Up","Shirts","SpendingVolume","Sports","Travel","Women Clothing"],
    series: [
    [10.0,1,2,4,1.58,1.36,8.08,07,8.5,6.5,5.60,4.79,0,6.04,8.76,0,2.78,0.29]
    ]
  };

  var options = {
    seriesBarDistance: 10
  };

  var responsiveOptions = [
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,

      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];

  new Chartist.Bar('.ct-bar-chartss', data, options, responsiveOptions);
});