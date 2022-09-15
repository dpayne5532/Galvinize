var array1 = [1, 2, 3];
var array2 = ['a', 'b', 'c'];
var array3 = ['do', 're', 'mi'];

var resultOfConcat1 = array1.concat(array2);
console.log('concatting array1 and array2 together:', resultOfConcat1);
console.log('-------------------------\n');
console.log('array1 is unaffected:', array1);
console.log('array2 is unaffected:', array2);

console.log('-------------------------\n');

var resultOfConcat2 = resultOfConcat1.concat(array3);
console.log('concatting array3 into our previous result:', resultOfConcat2);
console.log('-------------------------\n');
console.log('array1 is unaffected:', array1);
console.log('array2 is unaffected:', array2);
console.log('array3 is unaffected:', array3);
console.log('resultOfConcat1 is unaffected:', resultOfConcat1);

console.log('-------------------------\n');

var resultOfConcat3 = array1.concat(array2, array3);
console.log('concatting multiple arrays:', resultOfConcat3);