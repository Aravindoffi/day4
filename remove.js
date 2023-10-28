// //using anonyms
let re = function(val){
    val = [...new Set(val)]
    console.log(val)
}

let a = [1,2,3,4,4,5,6,6]
re(a)


// //using IIFE
let re =(function(val){
    val = [...new Set(val)]
    console.log(val)
})([1,2,3,4,4,5,6,6])