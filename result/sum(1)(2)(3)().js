function sum(a) { 
    sum.result = sum.result || 0; 
    if (a) { 
        sum.result = sum.result + a; 
        return sum; 
    } else { 
        result = sum.result; 
        sum.result = null; 
        return result; 
    } 
} 
 
// rescursive 
function sum(a) { 
    let result = a; 
    let helper = (a) => { 
        if (a) { 
            result += a 
            return helper; 
        } else { 
            return result; 
        } 
    }; 
    return helper; 
} 
 
 
// the below problem should pass 
console.log(sum(1)(2)(3)() === 6); 
console.log(sum(1)(2)(3)(4)() === 10); 
