
var cardData = [
  {
    'issuer/network': 'Visa',  // card issuer (network)
    prefixes: ['4'],	       // beginning digits
    lengths: [13, 16, 19]      // lengths of card numbers
  },
  {
    'issuer/network': 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },
  {
    'issuer/network': 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },
  {
    'issuer/network': 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  }
];

function detectNetwork(cardNumber, cardData) {
  // your solution here
  if (cardNumber[0] === 4) {
    return `Visa`  
  }
  for (var i = 0; i < cardData.length; i++) {
    var prefix = cardData[i][`prefixes`];
    
  }
}

// example
var network = detectNetwork('343456789012345', cardData);
// console.log(network); // --> 'American Express'

var cardNumber = '343456789012345'

console.log(cardNumber[0])


console.log(cardData[0][`prefixes`][0])





// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

// Examples :
// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd







// function flipEveryNChars(inputString, n) {
//   var flipped = "";

//   var characters = inputString.split("");
//   for (var i = 0; i < characters.length; i+=n) {
//     var currentSlice = characters.slice(i, (i + n));
//     var reversedSlice = currentSlice.reverse();

//     var joinedSlice = reversedSlice.join("");

//     flipped += joinedSlice;
//   }

//   return flipped;
// }





// // Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// // Note that this is intentionally very similar to the previous problem.

// // Please focus on getting a working solution with the tools you know well.

// // Practice the interactive/collaborative interview style that's described in the documentation.

// // Example:
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma


// var splitInput = input.split("");
// var firstSlice = splitInput.slice(0, 5);
// var secondSlice = splitInput.slice(5, 10)
// console.log(firstSlice);
// console.log(secondSlice);


// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'










// function flipPairs(input) {
//   let flippedInput = "";

//   for (var i = 0; i < input.length; i+=2) {

//     if (input[i + 1] === undefined) {
//       flippedInput += input[i];
//       break;   
//     }

//     flippedInput += input[i + 1];

//     flippedInput += input[i];
    
//   }
  
  
//   return flippedInput
// }


// // Example:
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!



















// var cardData = [
//   {
//     'issuer/network': 'Visa',  // card issuer (network)
//     prefixes: ['4'],	       // beginning digits
//     lengths: [13, 16, 19]      // lengths of card numbers
//   },
//   {
//     'issuer/network': 'Mastercard',
//     prefixes: ['51', '52', '53', '54', '55'],
//     lengths: [16]
//   },
//   {
//     'issuer/network': 'American Express',
//     prefixes: ['34', '37'],
//     lengths: [15]
//   },
//   {
//     'issuer/network': 'Diner\'s Club',
//     prefixes: ['38', '39'],
//     lengths: [14]
//   }
// ];

// function detectNetwork(cardNumber, cardData) {
  
//   let testLength = cardNumber.length
//   for (var i = 0; i < cardData.length; i++) {
//     var prefix = cardData[i].lengths
//     var issuer = (cardData[i][`issuer/network`])

//     for (var j = 0; j < prefix.length; j++) {
      
//     if (prefix[j] === testLength) {
//       return issuer;
//     }
//     }
    
//   }
// }

// // console.log(cardData[0].prefixes)


// // example
//  var network = detectNetwork('343456789012345', cardData);
// console.log(network); // --> 'American Express'





// function findPairForSum(integers, target) {
//   let result = [];
//   for (var i = 0; i < integers.length; i++) {
//     for (var j = 0; j < integers.length; j++) {
//       if (integers[i] + integers[j] === target) {
//         result.push(integers[i], integers[j])
//         return result;
//       }
//     }
//   }
  
// }

// // example
// var pair = findPairForSum([3, 6, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]










// function listAllBlackShoes(inventory) {
//   var flatList = "";

//   for (var i = 0; i < inventory.length; i++) {
//   var designerObject = inventory[i]; 
//   var shoes = designerObject.shoes;

//   for (var j = 0; j < shoes.length; j++) {
//     var currentShoe = shoes[j];

//     if (shoeIsBlack(currentShoe)) {
//       flatList += designerObject.name + ', ' + currentShoe.name + ', ' + currentShoe.price + '\n'
//     }
//   }

//   }
//   return flatList;
// }

// //Create helper functions if needed
// function shoeIsBlack(shoeObject) {
//   if (shoeObject.name.indexOf('black') !== -1) {
//     return true;
//   } else {
//     return false;
//   }
  
// }



// function assertEquals(actual, expected, testName) {
//   if (actual === expected) {
//     console.log(`passed`);
//   } else {
//     return `FAILED [${testName}] Expected "${expected}" but got "${actual}"`;
//   }
// }


// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];

// var expectedFlatList = `Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n`;


// var actualFlatList = listAllBlackShoes(currentInventory);

// assertEquals(actualFlatList, expectedFlatList, "Should return some shit with black in name")