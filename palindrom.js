// //using anonyms function
const result = ["madam", "radar", "ram", "hello", "world", "level", "deified"];
const palindromes = [];

const isPalindrome = function(word) {
  return word === word.split('').reverse().join('');
};

result.forEach(function(word) {
  if (isPalindrome(word)) {
    palindromes.push(word);
  }
});
console.log(palindromes);




// //using IIFE
let pal = (function () {
  const result = ["madam", "radar", "ram", "hello", "world", "level", "deified"];
  const palindromes = [];

  const isPalindrome = function(word) {
    return word === word.split('').reverse().join('');
  };

  result.forEach(function(word) {
    if (isPalindrome(word)) {
      palindromes.push(word);
    }
  });

  console.log(palindromes);
})();





//using arrow function
let result = ["madam", "radar", "ram", "hello", "world", "deified"]
const pali = result.filter(val => val === val.split('').reverse().join('') )
console.log(pali)