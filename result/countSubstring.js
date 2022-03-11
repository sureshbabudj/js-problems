 
// naive string search 
function countSubString(str, sub) { 
   let subLength = sub.length; 
   let count = 0; 
   for (let i = 0; i < str.length - subLength + 1; i++) { 
      let temp = str[i]; 
      for (let j = i+1; j < subLength+i+1; j++) { 
           temp += str[j]; 
           if (temp.length === subLength) { 
                console.log(temp); 
                count = temp === sub ? count+1 : count; 
           } 
      } 
   } 
   return count; 
} 
 
 
console.log(countSubString('lori loled', 'lol')); // 2