$(function() {
    var nodes = null;
    var edges = null;
    var network = null;

      // create people.
      // value corresponds with the age of the person
      nodes = [
        {id: 1,  value: 2,  label: 'Shirts' },
        {id: 2,  value: 31, label: 'Fast Food'},
        {id: 3,  value: 20, label: 'Clothing'},
        {id: 4,  value: 18, label: 'Sports' },
        {id: 5,  value: 19, label: 'Travel' },
        {id: 6,  value: 13, label: 'Accessories'},
        {id: 7,  value: 8,  label: 'Cinema'},
        {id: 8,  value: 25,  label: 'Fine Dining'},
        {id: 9,  value: 30, label: 'Electronics'},
        {id: 10, value: 16, label: 'Competition'},
        {id: 11, value: 18, label: 'Gadgets'},
        {id: 12, value: 12, label: 'Apparel'},
      ];
      // create connections between people
      // value corresponds with the amount of contact between two people
      edges = [
        {from: 1, to: 3, value: 8},
        {from: 1, to: 7, value: 1},
        {from: 2, to: 8, value: 5},
        {from: 2, to: 11, value: 4},
        {from: 2, to: 5, value: 6},
        {from: 3, to: 12, value: 5},
        {from: 3, to: 6, value: 3},
        {from: 4, to: 11, value: 2},
        {from: 4, to: 5, value: 5},
        {from: 5, to: 7, value: 2},
        {from: 4, to: 5, value: 1},
        {from: 9, to: 10, value: 2},
        {from: 2, to: 3, value: 6},
        {from: 3, to: 9, value: 4},
        {from: 5, to: 3, value: 1},
        {from: 2, to: 7, value: 4},
        {from: 12, to: 10, value: 1}
      ];
      // Instantiate our network object.
      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {
        nodes: {
          shape: 'dot',
          scaling:{
            label: {
              min:8,
              max:20
            }
          }
        }
      };
      network = new vis.Network(container, data, options);

});