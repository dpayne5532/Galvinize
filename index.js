var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];



function generateLaceDetails(inventory) {
  var laceDetails = [];

  for (var i = 0; i < inventory.length; i++) {
    var designerObject = inventory[i];
    var shoes = designerObject.shoes;

    for (var j = 0; j < shoes.length; j++) {

      if (shoeContainsLace(shoes[j])) {
        laceDetails.name += shoes[j].name;
        
        console.log(shoes[j].price)
      }
      
    }
    
  }

  console.log(laceDetails)
  return laceDetails;
}

function shoeContainsLace(shoe) {
  var nameOfShoe = shoe.name;
  if (nameOfShoe.indexOf('lace') !== -1) {
    
    return true;
  } else {
    
    return false;

  }
}


generateLaceDetails(currentInventory)

var expectedResult = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];



