//using anonymous function
const array = ["all", "is", "well"];
const resultArray = array.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
})
console.log(resultArray)


//using IIFE function
let val = (function(){
    const array = ["all", "is", "well"];


    const resultArray = array.map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    console.log(resultArray)
    
})()



//using Arrow function
let ar = ["all", "is", "well"]
const re = ar.map(val => val.charAt(0).toUpperCase() + val.slice(1))
console.log(re)
