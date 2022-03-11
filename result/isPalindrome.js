 
function isPalindrome(s){ 
    return s === s.split('').reverse().join(''); 
} 
 
 
console.log(isPalindrome('awesome')); // false 
console.log(isPalindrome('foobar')); // false 
console.log(isPalindrome('tacocat')); // true 
console.log(isPalindrome('amanaplanacanalpanama')); // true 
console.log(isPalindrome('amanaplanacanalpandemonium')); // false 
