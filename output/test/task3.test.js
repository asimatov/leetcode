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
const task3_1 = require("../src/task3");
test("Example 1", () => {
    expect((0, task3_1.lengthOfLongestSubstring)("abcabcbb")).toStrictEqual(3);
});
test("Example 2", () => {
    expect((0, task3_1.lengthOfLongestSubstring)("bbbbb")).toStrictEqual(1);
});
test("Example 3", () => {
    expect((0, task3_1.lengthOfLongestSubstring)("pwwkew")).toStrictEqual(3);
});
test("Example 4", () => {
    expect((0, task3_1.lengthOfLongestSubstring)("aab")).toStrictEqual(2);
});
test("Example 5", () => {
    expect((0, task3_1.lengthOfLongestSubstring)("ohvhjdml")).toStrictEqual(6);
});
