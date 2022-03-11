// wirte a function which gives the longest substring which contains unique characters in the given string 
// in string 'hellothere' longest unique char substring is 'lother' 
 
// using 2 pointer pattern 
function longestUniqueCharString(str) { 
    if (!str || !str.length) { 
        return ''; 
    } 
    let prevStringMap = { 
        [str[0]]: 1 
    }; 
    let prevString = ''; 
    let substring = str[0]; 
    let initial = 0; 
    for (let i = 1; i <= str.length; i++) { 
        prevStringMap[str[i]] = ++prevStringMap[str[i]] || 1; 
        if (prevStringMap[str[i]] > 1) { 
            initial = initial + 1; 
            if (prevString.length < substring.length) { 
                prevString = substring 
                prevStringMap = {}; 
            } 
            substring = str[i]; 
        } else { 
            initial = initial + 1; 
            substring = str[i] ? substring + str[i] : substring; 
        } 
    } 
    return prevString.length > substring.length ? prevString : substring 
 
} 
 
console.log(longestUniqueCharString('hellothere')); 
// 'lother' 
console.log(longestUniqueCharString('apple')); 
// 'ple' 
console.log(longestUniqueCharString('')); 
// '' 
console.log(longestUniqueCharString('sliding_window_pattern')); 
// ndow_pat 
