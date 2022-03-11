function flatten(arr) { 
    let res = []; 
    for (let i of arr) { 
        if (Array.isArray(i)) { 
            res = [...res, ...flatten(i)]; 
        } else { 
           res.push(i);  
        } 
    } 
    return res; 
} 
 
console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5] 
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5] 
console.log(flatten([[1],[2],[3]])); // [1,2,3] 
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3] 
           