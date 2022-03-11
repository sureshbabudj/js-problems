// write a function to find out the maximum sum of given number of consequtive values in the array 
// array: [1,2,5,2,8,1,5] and the consequtive number for summing up values is 2 then answer is 10 (2 + 8) 
 
// O(n^2) time complexity nested loops 
function maxSubArraySum(arr, number) { 
    if (arr.length < number) { 
        return null; 
    } 
    let maxSum = 0; 
    for (let j = 0; j < arr.length; j++) { 
        let tempSum = 0; 
        for (let i = 0; i < number; i++) { 
            tempSum = j + i < arr.length ? tempSum + arr[j + i] : tempSum; 
            if (i === number - 1) { 
                maxSum = Math.max(maxSum, tempSum); 
            } 
        } 
    } 
    return maxSum; 
} 
 
// sliding window pattern => O(n) time complexity 
function maxSubArraySum(arr, number) { 
    // check given number is greater than array length. if yes, return null 
    if (arr.length < number) { 
        return null; 
    } 
 
    let tempSum = 0; 
 
    // sum first 'number' of values in array 
    for (let j = 0; j < number; j++) { 
        tempSum = tempSum + arr[j]; 
    } 
 
    // maxSum will be first sum from previous loop 
    let maxSum = tempSum; 
 
    // loop remaining numbers and compare maxSum and tempSum 
    for (let i = number; i < arr.length; i++) { 
        // difference of adding the next value and minusing the previous value  
        // will be the sum of given number of values in array at any point of time 
        tempSum = tempSum + arr[i] - arr[i - number]; 
        maxSum = Math.max(tempSum, maxSum); 
    } 
    return maxSum; 
} 
 
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); 
// 10 
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); 
// 17 
console.log(maxSubArraySum([4, 2, 1, 6], 1)); 
// 6 
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); 
// 13 
console.log(maxSubArraySum([], 4)); 
// null 
