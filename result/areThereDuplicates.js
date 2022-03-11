// Implement a function called, areThereDuplicates  
// which accepts a variable number of arguments,  
// and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern. 
 
// frequency counter pattern O(n) time complexity 
function areThereDuplicates() { 
    let a = [...arguments]; 
    let lookup = {}; 
    for (let i = 0; i < a.length; i++) { 
        lookup[a[i]] = ++lookup[a[i]] || 1; 
        if (lookup[a[i]] > 1) { 
            return true; 
        } 
    } 
    return false; 
} 
 
// multiple pointers pattern O(log(n)) time complexity 
function areThereDuplicates() { 
    let a = [...arguments].sort();  // o(n* log(n)) 
    let left = 0; 
    for (let i = 1; i < a.length; i++) { 
        if (a[i] === a[left]) { 
            return true; 
        } else { 
            left++; 
        } 
    } 
 
    return false; 
} 
 
console.log(areThereDuplicates(1, 2, 3)); // false 
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('b', 'a', 'c', 'a')); // true 
 
// a b c a 
// 