// Consecutive
// Have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements.

function Consecutive(arr) {
    // const sorted = arr.sort((a, b) => {
    //     return b - a;
    // });
    // let counter = 0,tmp;
    // const firstEl = sorted[0];
    // const lastEl = sorted[sorted.length - 1];
    // tmp = lastEl;
    // while (firstEl !== tmp) {
    //     if(!sorted.includes(tmp)) {
    //         counter += 1;
    //     }
    //     tmp += 1;
    // }
    // return counter;

    console.log((Math.max(...arr) - Math.min(...arr)) - arr.length + 1);
}

// keep this function call here 
console.log(Consecutive([5, 10, 15]));