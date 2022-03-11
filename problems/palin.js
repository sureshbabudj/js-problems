function integer_to_string(n, base1)
{
    let str="";
    while (n > 0)
    {
        let digit = n % base1;
        n = parseInt(n / base1, 10);
        str += String.fromCharCode(digit +
                                   '0'.charCodeAt());
    }
    return str;
}
 
// Function to check for palindrome
function isPalindrome(i, k)
{
    let temp = i;
 
    // m stores reverse of a number
    let m = 0;
    while (temp > 0)
    {
        m = temp % 10 + m * 10;
        temp = parseInt(temp / 10, 10);
    }
 
    // If reverse is equal to number
    if (m == i)
    {
         
        // Converting to base k
        let str = integer_to_string(m, k);
        let ch = str.split('');
        ch.reverse();
        let str1 = ch.join("");
         
        if (str == str1)
        {
            return i;
        }
    }
    return 0;
}
 
// Function to find sum of palindromes
function sumPalindrome(n, k)
{
    let sum = 0;
    for(let i = 1; i < n; i++)
    {
        sum += isPalindrome(i, k);
    }
    console.log("Total sum is " + sum);
}
 
// Driver code
let n = 5;
let k = 2;
 
sumPalindrome(n, k);