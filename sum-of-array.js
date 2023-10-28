//using anonyms
const summ = function(arr){
    let sum = 0
    for(let i=0; i<arr.length; i++){
        
        sum = sum + arr[i]
        }
        return sum
}
let num = [1,2,3,4]
let tot = summ(num)
console.log(tot)



//using IIFE

const summ = (function(arr){
    let sum = 0
    for(let i=0; i<arr.length; i++){
        
        sum = sum + arr[i]
        }
        return sum
})([1,2,3,4])

console.log(summ)




//using Arrow function

let a = [1,2,3,4]
let sum = a.reduce((val1, val2) =>val1+val2 )
console.log(sum)