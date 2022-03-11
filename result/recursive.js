function power(base, exp) { 
    if (exp === 0) { 
        return 1; 
    } 
    return base * power(base, --exp) 
} 
 
console.log(power(2, 0)); // 1 
console.log(power(2, 2)); // 4 
console.log(power(2, 4)); // 16 
 
 
function factorial(x){ 
   if (x < 0 ) return 0; 
   if (x <= 1 ) return 1; 
   return x * factorial(x-1); 
} 
 
console.log(factorial(3));  // 6 
