// implement a fn which returns the count of unique values in a sorted array 
 
 
// frequency pattern 
function uniqueValueInArray(arr) { 
    // create a map for valie with no of occurences 
    const lookup = {}; 
    for (let i of arr) { 
        lookup[i] = ++lookup[i] || 1; 
    } 
    return Object.keys(lookup).length; 
} 
 
// 2 pointer pattern 
function uniqueValueInArray(arr) { 
 
    // null check 
    if (!arr.length) return 0; 
 
    // create a initial pointer for starting value 
    let i = 0; 
 
    // iterate the array to compare the pointer value with each value in the array 
    for (let j = 0; j < arr.length; j++) { 
 
        // when initial value does not match with value in the array 
        // increment pointer value by 1 and update the arr value with unmatched value consequetly 
        if (arr[i] !== arr[j]) { 
            i = i + 1; 
            arr[i] = arr[j]; 
        } 
    } 
 
    // pointer + 1 will be the count of unique values 
    return i + 1; 
} 
 
 
console.log(uniqueValueInArray([1, 1, 1, 1, 2, 2, 3, 4, 4, 5])); // 5 
console.log(uniqueValueInArray([])); // 0