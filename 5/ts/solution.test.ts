import { longestPalindrome } from "./solution";

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