// // *********************************************************************************
// // CALL BIND AND APPLIY
// // *********************************************************************************
// // Bind is a bit different. It returns a new function. Call and Apply execute the current function immediately.
// // Call and apply are pretty interchangeable. Just decide whether it’s easier to send in an array or a comma separated list of arguments.
var a = {
     name : 'jack',
     hello: function () { console.log(this.name);}
 };
 //call & apply 
 a.hello.call({name:'vivky'});
 //bind
 var manoj = a.hello.bind({name:'manoj'});
manoj();



// // *********************************************************************************
// //Remove duplicated in a array
// // *********************************************************************************
var array = [1, 2, 2, 3, 3, 4, 5, 6, 2, 3, 7, 8, 5, 22, 1, 2, 511, 12, 50, 22];
var a = [...new Set(array)];
console.log(a);



// // *********************************************************************************
// // Count no of duplcate in a array
// // *********************************************************************************
var array = [1, 2, 2, 3, 3, 4, 5, 6, 2, 3, 7, 8, 5, 22, 1, 2, 511, 12, 50, 22];
const counts = {};
var a = array.forEach(element => {
  counts[element] = (counts[element] || 0) + 1;
});
console.log(counts);



// // *********************************************************************************
// // Palindrome without split or reverse
// // *********************************************************************************

// // // with array
var a = 'malayalam';
//console.log(a === a.split('').reverse().join(''));

//with out split
const middle = a.length/2;
function isPalindrome() {
  for (let index = 0; index < middle; index++) {
    if(a[index] !==  a[a.length-1-index]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome());



// // *********************************************************************************
// // reverse a no
// // *********************************************************************************


var lives = 5;

let cat = {
    lives: 9,
    jumps: () => {
      return this.lives--;
    }
};

function test() {
    this.lives = 5;
    let a = cat.jumps();
    console.log(a);
}

test();

// // *********************************************************************************
// // custom sort
// // *********************************************************************************

// input = [1,0,5,3,0,2];

// output = [1,5,3,2,0,0];

var arr = [1,0,5,3,0,2];
function format(arr) {
    arr.sort((item1,item2)=>{
        if(item2 === 0){
            return -1;
        }
        return 0;
    });
}