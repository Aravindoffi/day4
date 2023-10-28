//using anonyms

const pri = function(n){
    
    if(n<2)
    return `${n} is not a prime`

    for(let i=2; i<n; i++){
        if(n % i === 0){
            return `${n} is not a prime`
        }
    }
    return `${n} is a prime`
}

let numbers = [12,34,13,5]
let results = numbers.map(pri);
console.log(results);




//using IIFE

const num = [12, 13, 24, 5];
(function(arr) {
    const isPrime = function(n) {
        if (n < 2) {
            return `${n} is not a prime`;
        }

        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return `${n} is not a prime`;
            }
        }

        return `${n} is a prime`;
    };

    const primeNumbers = arr.filter(num => {
        return isPrime(num).includes("is a prime");
    });

    console.log(primeNumbers);
})(num);



//using arrow function
let ar = [12, 34, 13, 5];

let pr = ar.filter((val) => {
  if (val <= 1) return false;
  if (val <= 3) return true;

  if (val % 2 === 0 || val % 3 === 0) return false;

  for (let i = 5; i * i <= val; i += 6) {
    if (val % i === 0 || val % (i + 2) === 0) return false;
  }

  return true;
});

console.log(pr);