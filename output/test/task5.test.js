"use strict";
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
Object.defineProperty(exports, "__esModule", { value: true });
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
const task5_1 = require("../src/task5");
test("Example 1", () => {
    expect((0, task5_1.longestPalindrome)("abcabcbb")).toBe("bcb");
});
test("Example 2", () => {
    expect((0, task5_1.longestPalindrome)("bbbbb")).toBe("bbbbb");
});
test("Example 3", () => {
    expect((0, task5_1.longestPalindrome)("babad") == "bab" || (0, task5_1.longestPalindrome)("babad") == "aba");
});
test("Example 4", () => {
    expect((0, task5_1.longestPalindrome)("cbbd")).toBe("bb");
});
test("Example 5", () => {
    expect((0, task5_1.longestPalindrome)("bbbbbb")).toBe("bbbbbb");
});
test("Example 6", () => {
    expect((0, task5_1.longestPalindrome)("abcbba")).toBe("bcb");
});
test("Example 7", () => {
    expect((0, task5_1.longestPalindrome)("abcbbba")).toBe("bbb");
});
test("Example 8", () => {
    expect((0, task5_1.longestPalindrome)("a")).toBe("a");
});
