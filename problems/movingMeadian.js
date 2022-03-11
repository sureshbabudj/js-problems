function MovingMedian(arr) {
    let buildArr = [];
    let winLength = arr.shift();
    let len = arr.length;
    
    for (let i = 0; i < len; i++) {
      let firstIndex = Math.max(0, i - winLength + 1);
      let med = getMedian(arr.slice(firstIndex, i + 1));
      buildArr.push(med);
    }
        return buildArr.join(',');
    }
    
    let getMedian = (arr) => {
      arr.sort((val1, val2) => {return val1 - val2;});
      let len = arr.length;
      if (len % 2) {
        return arr[Math.floor(len/2)];
      } else {
        return (arr[len/2 - 1] + arr[len/2]) / 2;
      }
    };

    // keep this function call here 
console.log(MovingMedian( [3, 1, 3, 5, 10, 6, 4, 3, 1]));


/*

[   3,  1,  3,  5,  10, 6,  4,  3,  1]
^    
1,2,3,5,6,6,4,3

1,3,5 = 3 = 1
3,5,10 = 5 = 2
5,10,6 = 6(sorted) = 3
10,6,4 = 6 (sorted)
6,4,3 = 4 
4,3,1 = 2




*/