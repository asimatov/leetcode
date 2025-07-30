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
 

import { lengthOfLongestSubstring } from "../src/task3";

test("Example 1", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toStrictEqual(3);
});

test("Example 2", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toStrictEqual(1);
});

test("Example 3", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toStrictEqual(3);
});

test("Example 4", () => {
  expect(lengthOfLongestSubstring("aab")).toStrictEqual(2);
});

test("Example 5", () => {
  expect(lengthOfLongestSubstring("ohvhjdml")).toStrictEqual(6);
});
