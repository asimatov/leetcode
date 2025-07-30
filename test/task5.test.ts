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
 

import { longestPalindrome } from "../src/task5";

test("Example 1", () => {
  expect(longestPalindrome("abcabcbb")).toBe("bcb");
});

test("Example 2", () => {
  expect(longestPalindrome("bbbbb")).toBe("bbbbb");
});

test("Example 3", () => {
  expect(longestPalindrome("babad") == "bab" || longestPalindrome("babad") == "aba");
});

test("Example 4", () => {
  expect(longestPalindrome("cbbd")).toBe("bb");
});

test("Example 5", () => {
  expect(longestPalindrome("bbbbbb")).toBe("bbbbbb");
});

test("Example 6", () => {
  expect(longestPalindrome("abcbba")).toBe("bcb");
});

test("Example 7", () => {
  expect(longestPalindrome("abcbbba")).toBe("bbb");
});

test("Example 8", () => {
  expect(longestPalindrome("a")).toBe("a");
});