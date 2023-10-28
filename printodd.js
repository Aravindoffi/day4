//using anonyms
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = numbers.filter(function(val) {
  return val % 2 !== 0;
});

console.log(odd);





//using IIFE
let odd = (function (arr) {
  let result = arr.filter(function (val) {
    return val % 2 !== 0;
  });
  return result;
})([1, 2, 3, 4, 5, 6, 7]);

console.log(odd);





//without any methods

const odd = function(arr) {
  const oddNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNumbers.push(arr[i]);
    }
  }
  return oddNumbers;
}

let numbers = odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(numbers);





//using arrow function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = numbers.filter(val =>  val % 2 !== 0)

console.log(odd);