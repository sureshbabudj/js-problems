// write a function called sumZero which accepts a sorted array of intergers, 
// the fn should find the 1st pair where the sum is 0. 
 
// multiple pointer pattern works only for sorted array in this situation 
function sumZero(arr) { 
     
    // create 2 pointers 1 for first  anf 1 for last 
    let left = 0; 
    let right = arr.length - 1; 
 
    // iterate the array and compare as long as left is less than riget 
    while (left < right) { 
        const sum = arr[left] + arr[right]; 
 
        // if sum is 0 then return the pair 
        if (sum === 0) { 
            return [arr[left], arr[right]]; 
        } 
 
        // if sum is less than 0 increment index value in left pointer else decrease index value in right pointer 
        if (sum < 0) { 
            left = left + 1; 
        } else { 
            right = right - 1; 
        } 
    } 
 
    // if none sums up 0 then return empty array 
    return []; 
}  
 
console.log(sumZero([-2,-1,0,1,2])); // [-2, 2] 
console.log(sumZero([-10, -9, -3, -2,-1,0,1,3, 99, 100, 199])); // [-3, 3] 
console.log(sumZero([0,1,3, 99, 100, 199])); // []