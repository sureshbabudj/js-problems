// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
// You may assume that each input would have exactly one solution, and you may not use the same element twice. 
// You can return the answer in any order. 
 
// brute force 
function twoSum(nums, target) { 
   let res; 
   for (let i = 0; i < nums.length; i++) { 
        for (let j = 0; j < nums.length; j++) { 
            if (i !== j && nums[i] + nums[j] === target) { 
                res = [j, i]; 
                break; 
            } 
        } 
    } 
    return res; 
}; 
 
// freq counter 
function twoSum(nums, target) { 
    let lookup = {}; 
    for (let i = 0; i < nums.length; i++) { 
       lookup[nums[i]] = i;  
    } 
    nums = nums.sort((x, y) => x - y); 
    let min = 0, max = nums.length -1; 
    while (min < max) { 
        let sum = nums[min] + nums[max]; 
        if (sum === target) { 
            return [lookup[nums[min]], lookup[nums[max]]]; 
        } else if (sum > target) { 
            max--; 
        } else { 
            min++ 
        } 
    } 
} 

console.log(twoSum([2,7,11,15],9)) // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2] 
console.log(twoSum([2,7,11,15], 9)); // [0,1] 
console.log(twoSum([3,4,11,2], 6)); // [1, 3] 
console.log(twoSum([3,3], 6)); // [3, 3] 
console.log(twoSum([3,4], 6)); // null 
//console.log(twoSum([1,2,3,6,7,8,9, 10, 11, 12, 300, 100, 100], 500)); // null 

