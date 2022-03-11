// Palindromic Substring
// Have the function PalindromicSubstring(str) take the str parameter being passed and find the longest palindromic substring, which means the longest substring which is read the same forwards as it is backwards. For example: if str is "abracecars" then your program should return the string racecar because it is the longest palindrome within the input string.

// The input will only contain lowercase alphabetic characters. The longest palindromic substring will always be unique, but if there is none that is longer than 2 characters, return the string none.

//https://www.youtube.com/watch?v=lo8n0ivbhog


function PalindromicSubstring(str) { 

    let longest = '';
    for (let i = 0; i < str.length; i++) {
        let evenPalindeome = checkPlaindrome(str, i, i);
        let oddPalindeome = checkPlaindrome(str, i-1, i);
        if(oddPalindeome.length > longest.length ){
            longest = oddPalindeome;
        }
        if(evenPalindeome.length > longest.length ){
            longest = evenPalindeome;
        }
    }
    
    // code goes here  
    return longest; 
  
  }

  function checkPlaindrome(str, a, b){
    let x = 0;
    
    while (str[a - x] && str[a - x] === str[b + x]) {
        console.log(str[a - x], str[b + x]);    
        x++;
    }
    x--;

    return str.slice(a - x, b + x + 1);
  }
     
  // keep this function call here 
  console.log(PalindromicSubstring('hellosannasmith'));