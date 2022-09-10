function computeSumOfAllElements(array) {
  let total = 0;
  for (const i in array) {
    total += array[i];
  }
  return total;
}








// Current Values

var result1 = computeSumOfAllElements([1, 2, 3]);
console.log('should log 6:', result1);

var result2 = computeSumOfAllElements([]);
console.log('should log 0:', result2);


