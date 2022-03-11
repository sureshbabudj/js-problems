// write a function to return the index of the given value in an array if found. else return -1 
// print the iterations count to find the index 
 
let iterations = 0; 
// normal linear search solution O(n) time complexity 
function indexOf(arr, value) { 
    for (let i = 0; i < arr.length; i++) { 
        iterations++; 
        if (value === arr[i]) { 
            return i; 
        } 
    } 
    return -1; 
} 
 
// 1, 7, 9, 10, 18 
// min 0 => 1  
// max 4 => 18 
// mid 4 /2 => 2 => 9 
// arr[mid] (9) === 18 => false 
// arr[mid] (9) > 18 => true 
// subarray  
// min => 3 => 10 
// mid => 3 => 10 
 
// else secnario in case the number is below the mid point 7 
// max => 1 => 7 
// mid => 0 
 
function binarySearch(arr, val) { 
    let min = 0; 
    let max = arr.length - 1; 
    let mid = Math.floor((min + max) / 2); 
    while (arr[mid] !== val && min < max) { 
        if (val < arr[mid]) { 
            max = mid - 1; 
        } else { 
            min = mid + 1; 
        } 
        mid = Math.floor((min + max) / 2); 
    } 
    return arr[mid] === val ? mid : -1; 
}  
 
 
console.log(binarySearch([1,2,3,4,5],2)); // 1 
console.log(binarySearch([1,2,3,4,5],3)); // 2 
console.log(binarySearch([1,2,3,4,5],5)); // 4 
console.log(binarySearch([1,2,3,4,5],6)); // -1 
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)); // 2 
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); // 16 
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 64)); // 12