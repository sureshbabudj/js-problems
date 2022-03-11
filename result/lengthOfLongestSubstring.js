// Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// refer https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s, memo = {}) {
    if (s in memo) memo[s];
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    let temp = s[0];
    let count;
    for (let i = 1; i < s.length; i++) {
        count = lengthOfLongestSubstring(s.slice(i), memo);
        if (temp.indexOf(s[i]) === -1) {
            temp = temp + s[i];
        } else {
           break;
        }
    }
    memo[s] = Math.max(temp.length, count);
    return memo[s];
};

// console.log(lengthOfLongestSubstring('pwwkew') === 3);
// console.log(lengthOfLongestSubstring('aab') === 2);
console.log(lengthOfLongestSubstring('dvdf') === 3);
console.log(lengthOfLongestSubstring("abcabcbb") ); // 3


//                              ''
//                d        v          d            f
//                v        d          f   
//                d        f   