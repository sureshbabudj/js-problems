// Multiple Pointers - isSubsequence 
// Write a function called isSubsequence which takes in two strings  
// and checks whether the characters in the first string  
// form a subsequence of the characters in the second string.  
// In other words, the function should check whether the characters  
// in the first string appear somewhere in the second string, 
// without their order changing. 
// solution MUST have AT LEAST the following complexities: 
// Time Complexity - O(N + M) 
// Space Complexity - O(1) 
 
 
// brute force  
function isSubsequence(s1, s2) { 
    let result = ''; 
 
    let big = '', small = ''; 
    if (s1.length > s2.length) { 
        big = s1.toLowerCase().trim(); 
        small = s2.toLowerCase().trim(); 
    } else { 
        big = s2.toLowerCase().trim(); 
        small = s1.toLowerCase().trim(); 
    } 
    let lookup = {}; 
    for (let a of small) { 
        lookup[a] = ++lookup[a] || 1;  
    } 
    for (let i = 0; i < big.length; i++) { 
        for (let j = 0; j < small.length; j++) { 
            if (small[j] === big[i] && lookup[small[j]] !== 0) { 
                result = result + small[j]; 
                lookup[small[j]]--; 
                continue; 
            } 
        } 
    } 
    console.log(result); 
    return result === small; 
} 
 
//  - Iterative 
function isSubsequence(str1, str2) { 
  var i = 0; 
  var j = 0; 
  if (!str1) return true; 
  while (j < str2.length) { 
    if (str2[j] === str1[i]) i++; 
    if (i === str1.length) return true; 
    j++; 
  } 
  return false; 
} 

// recursive
function isSubsequence(str1, str2) { 

} 
 
 
// Examples: 
console.log(isSubsequence('sing', 'stingg')); // true 
console.log(isSubsequence('hello', 'hello world')); // true 
console.log(isSubsequence('abc', 'abracadabra')); // true 
console.log(isSubsequence('abc', 'acb')); // false (order matters) 
console.log(isSubsequence('yo', 'yo')) // true 
console.log(isSubsequence('aaa Madam,', 'I\'m Adam')) // false 
console.log(isSubsequence('Thqckbrwnfxjmpdvrthlzydg', 'The quick brown fox jumped over the lazy dog')) // true 
 
 
 
 
