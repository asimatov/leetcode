// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=problem-list-v2&envId=54nuzvcj

// 3. Longest Substring Without Repeating Characters
// Medium
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces.

export function lengthOfLongestSubstring(s: string): number {
    let maxSubstr = "";
    let tmpSubstr = "";

    for(let i=0; i<s.length; i++) {
        let currentChar = s.charAt(i);

        let tmpCharPos = tmpSubstr.indexOf(currentChar);
        
        if(i==s.length-1 && tmpCharPos==-1) {
            tmpSubstr += currentChar;
        }

        if(tmpCharPos>-1 || i==s.length-1) {
            if(maxSubstr.length <= tmpSubstr.length)
                maxSubstr = tmpSubstr;
            tmpSubstr = tmpSubstr.substring(tmpCharPos+1);
        }

        tmpSubstr += currentChar;
    }

    return maxSubstr.length;
};