// write a function to compare 2 strings are of anagram or not 
// Anagram cinema and iceman are anagram words 
 
// easy solution with in-built JS methods .- O(n * log(n)) time complexity 
function anagram(str1, str2) { 
    return str1.split('').sort().join('') === str2.split('').sort().join(''); 
} 
 
// own solution with frenquecy counter pattern - O(n) time complexity 
function anagram(str1, str2) { 
     
    // if strings length are not same, then output false 
    if (str1.length !== str2.length) { 
        return false; 
    } 
 
    // convert string into array 
    const arr1 = str1.split(''); 
    const arr2 = str2.split(''); 
 
    // modify string array into objects 
    // add char to obj with value 1 if char not exists in the onb or increment value by 1 
    const strObj1 = {}, strObj2 = {}; 
    for (let i of arr1) { 
        strObj1[i] = ++strObj1[i] || 1;  
    } 
    for (let j of arr2) { 
        strObj2[j] = ++strObj2[j] || 1;  
    } 
 
    // compare both obj keys with its value and its existence 
    for (let k of Object.keys(strObj1)) { 
        if (!strObj2[k] || strObj2[k] !== strObj1[k]) { 
            return false; 
        } 
    } 
 
    // if everything goes well, output true 
    return true; 
} 
 
// more errificent solution with frenquecy counter pattern - O(n) time complexity 
function anagram(str1, str2) { 
     
    // if strings length are not same, then output false 
    if (str1.length !== str2.length) { 
        return false; 
    } 
 
    // modify first string into object 
    const lookup = {}; 
    for (let i of str1) { 
        lookup[i] = ++lookup[i] || 1;  
    } 
     
    // iterate 2nd string char and check if exists in obj and if exists decrement by 1 
    // if no key exists in obj for a char or key value is 0 then output false 
    for (let j of str2) { 
        if (!lookup[j] || lookup[j] <= 0) { 
            return false; 
        } else { 
            lookup[j] = lookup[j] - 1; 
        } 
    } 
 
    // if everything goes well, output true 
    return true; 
} 
 
console.log(anagram('cinema', 'iceman')); // true 
console.log(anagram('cinema', ''));  // false 
console.log(anagram('xxx', 'xx'));  // false 
console.log(anagram('abc', 'cba'));  // true