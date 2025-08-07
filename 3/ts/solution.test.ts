import { lengthOfLongestSubstring } from "./solution";

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
