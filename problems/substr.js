function check(arr, k) {
    for(let val of arr) {
        if(val != 0 && val != k) return false;
    }
    return true;
}

function perfectSubstring(s, k) {
    let res = 0;
    for(let i = 0; i < s.length; i++) {
        var arr = [];
        for(let j = i; j < s.length; j++) {
            if(j > i + (10*k)) break;
            let ch = s.charAt(j);
            arr.push(ch);
            if(check(arr, k)) res++;
        }
    }
    return res;
}

console.log(perfectSubstring('aabbcc', 2));