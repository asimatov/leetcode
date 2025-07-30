"use strict";
// https://leetcode.com/problems/longest-palindromic-substring/description/?envType=problem-list-v2&envId=54nuzvcj
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestPalindrome = longestPalindrome;
// Given a string s, return the longest palindromic substring in s.
// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:
// Input: s = "cbbd"
// Output: "bb"
// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.
function longestPalindrome(s) {
    let longestPalindrome = "";
    const stringLength = s.length;
    for (let i = 0; i < stringLength; i++) {
        let odd = getPalindrome(s, i);
        let even = getPalindrome(s, i, i + 1);
        if (longestPalindrome.length <= odd.length)
            longestPalindrome = odd;
        if (longestPalindrome.length <= even.length)
            longestPalindrome = even;
    }
    return longestPalindrome;
}
;
function getPalindrome(s, indexLeft, indexRight = indexLeft) {
    const stringLength = s.length;
    let [begin, end] = [0, 0];
    let shift = 0;
    while (indexLeft - shift >= 0 && indexRight + shift <= stringLength - 1 && s.charAt(indexLeft - shift) == s.charAt(indexRight + shift)) {
        [begin, end] = [indexLeft - shift, indexRight + shift];
        shift++;
    }
    return s.substring(begin, end + 1);
}
