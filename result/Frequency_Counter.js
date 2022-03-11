// write a 'same' funtion to compare 2 arrays when  each number in the second array is the squared value of the number in the first array.  
// Order of number placement in between the both arrays does not matter as long as the all numbers in first array has got squared value in teh 2nd array 
 
// frequency counter is the pattern to map each array item as key value pair in a obj  
// and compare the key and value with other object/array to reduce O(n^2) timrcomplexity  
 
function same(a1, a2) { 
    // check length of both arrays and if not equal return false 
    if (a1.length !== a2.length) { 
        return false; 
    } 
 
    // convert 2nd array into object 
    const obj1 = {}; 
    for (let i of a2) { 
        obj1[i] = false; 
    } 
 
    // iterate thru 1st array and check the aquared value of each number is exist in the obj1 
    for (let j of a1) { 
        if (obj1.hasOwnProperty(j ** 2)) { 
            obj1[j ** 2] = true; 
        } 
    } 
 
    // return false if any one or more number does not have value 
    return !Object.values(obj1).includes(false); 
} 
  
// tests 
console.log(same([1, 2, 3, 2], [5, 4, 9, 1])); // === false 
console.log(same([1, 2, 3], [4, 1])); // === false 
console.log(same([1, 2, 3], [4, 9, 2])); // === false 
console.log(same([1, 2, 3], [4, 9, 1])); // === true 
 
 
function sameFrequency(int1, int2){ 
  // good luck. Add any arguments you deem necessary. 
  let a = int1.toString(); 
  let lookup =  {}; 
  for (let  i = 0; i < a.length; i++) { 
      lookup[a[i]] = ++lookup[a[i]] || 1; 
  } 
  for (let j of int2.toString()) { 
      if (lookup[j] && lookup[j] > 0) { 
          lookup[j] = lookup[j] - 1; 
      } else { 
          return false; 
      } 
  } 
  return true; 
} 
console.log('---------------------') 
console.log(sameFrequency(182, 281)) // true 
console.log(sameFrequency(34, 14)) // false 
console.log(sameFrequency(3589578, 5879385)) // true 
console.log(sameFrequency(22, 222)) // false