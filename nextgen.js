// Person1 -> 3
// Person2 -> 2
// Person3 -> 4
// Person4 -> 2 
// Person5 -> 1 
// Person6 -> 2

function getTime(data, person) {

    let time = 1;
    let que = [];
    que.push(data[0]-1);

    while(que.length > 0) {

        for (let i = 0; i < que.length; i++) {
            if(que[i] !== 0) {
                const curr = que.shift();
                que.push(curr);
            }
        }
        time +=1; 
    }

    return time;
}


//console.log(getTime([3,2,4,2,1,2], 3));