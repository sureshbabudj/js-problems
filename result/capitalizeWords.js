function capitalizedWords(arr) { 
    let result = []; 
    let helper = (inner) => { 
        if (inner.length) { 
            result.push(inner.shift().toUpperCase()); 
            helper(inner); 
        } 
    } 
    helper(arr); 
    return result; 
} 
 
let words = ['i', 'am', 'learning', 'recursion']; 
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION'] 
