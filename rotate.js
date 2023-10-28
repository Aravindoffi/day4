//using anonymous fn
let a = function rotateArray(arr, k) {
    // Handle negative rotation values
    if (k < 0) {
      k = k + arr.length;
    }
  
    for (let i = 0; i < k; i++) {
      const element = arr.pop(); // Remove the last element
      arr.unshift(element); // Add it to the beginning of the array
    }
  
    return arr;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const k = 2;
  const rotated = a(originalArray, k);
  
  console.log(rotated);

  
  
  
  
  //using IIFE
  let b = (function(){
     function rotateArray(arr, k) {
        // Handle negative rotation values
        if (k < 0) {
          k = k + arr.length;
        }
      
        for (let i = 0; i < k; i++) {
          const element = arr.pop(); // Remove the last element
          arr.unshift(element); // Add it to the beginning of the array
        }
      
        return arr;
      }
      const originalArray = [1, 2, 3, 4, 5];
  const k = 2;
  const rotated = rotateArray(originalArray, k);
  
  return(rotated);
  })()
  console.log(b)






 