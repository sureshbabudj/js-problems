// Have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false.

// Use the Parameter Testing feature in the box below to test your code with different arguments.
function PowersofTwo(n) { 

    // code goes here  
    return parseInt( (Math.ceil((Math.log(n) / Math.log(2))))) == parseInt( (Math.floor(((Math.log(n) / Math.log(2))))))
  
  }
     
  // keep this function call here 
  console.log(PowersofTwo(4));