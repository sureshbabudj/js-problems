// Prime Mover
// Have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number.
// Examples
// Input: 9
// Output: 23
// Input: 100
// Output: 541
// Tags

function PrimeMover(num) { 

    let hashMap = [];
    let i = 2;
    while (hashMap.length <= num) {
        // console.log(i % 2);
        // const isPrime = (Number.isInteger(i / 2));
        // if(!isPrime){
        //     hashMap.push(i);
        // }
        // i++;
        let prime = true;
        for (let j = 2; j<i; j++) {
            if(Math.floor(i/j)===i/j){
                prime = false;
            }
        }
        if(prime) {
            hashMap.push(i);
        }
        i++;
    }  

    
    // code goes here  
    return hashMap[num]; 
  
  }
     
  // keep this function call here 
  console.log(PrimeMover(9));
