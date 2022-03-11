function collectStrings(input) { 
    let result = []; 
    for (let key in input) { 
        if (typeof input[key] === 'object' && !Array.isArray(input[key])) { 
            result = [...result, ...collectStrings(input[key])] 
        } else if (typeof input[key] === 'string') { 
            result.push(input[key]); 
        } 
    } 
    return result; 
} 
 
const obj = { 
    stuff: 'foo', 
    data: { 
        val: { 
            thing: { 
                info: 'bar', 
                moreInfo: { 
                    evenMoreInfo: { 
                        weMadeIt: 'baz' 
                    } 
                } 
            } 
        } 
    } 
} 
collectStrings(obj) // ['foo', 'bar', 'baz'])