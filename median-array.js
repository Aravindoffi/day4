// //using anonyms function
const findMedian = function(a, b) {
    const c = a.concat(b);
    c.sort();
    const n = c.length;
    
    if (n % 2 === 0) {
        const mid1 = n / 2 - 1;
        const mid2 = n / 2;
        const median = (c[mid1] + c[mid2]) / 2;
        console.log("Median:", median);
    } else {
        const mid = Math.floor(n / 2);
        const median = c[mid];
        console.log("Median:", median);
    }
};
// Example usage:
const a = [1, 3, 5];
const b = [2, 4, 6];
findMedian(a, b);



//using IIFE
(function(a, b) {
    const c = a.concat(b);
    c.sort();
    const n = c.length;

    if (n % 2 === 0) {
        const mid1 = n / 2 - 1;
        const mid2 = n / 2;
        const median = (c[mid1] + c[mid2]) / 2;
        console.log("Median:", median);
    } else {
        const mid = Math.floor(n / 2);
        const median = c[mid];
        console.log("Median:", median);
    }
})([1, 3, 5], [2, 4, 6]);