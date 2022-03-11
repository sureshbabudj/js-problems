// Arith Geo
// Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.
// Examples
// Input: [5,10,15]
// Output: Arithmetic
function ArithGeo(arr) {
    const isArithmetic = (arr) => {
        const diff = (arr[1] - arr[0]);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1]) {
                if (arr[i + 1] - arr[i] !== diff) {
                    return false;
                }
            }
        }
        return true;
    };

    const isGeometric = (arr) => {
        const diff = (arr[1] / arr[0]);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1]) {
                if (arr[i + 1] / arr[i] !== diff) {
                    return false;
                }
            }
        }
        return true;
    };
    if (isArithmetic(arr)) {
        return 'Arithmetic';
    } else if (isGeometric(arr)) {
        return 'Geometric';
    } else {
        return '-1';
    }
}

// keep this function call here 
console.log(ArithGeo(readline()));