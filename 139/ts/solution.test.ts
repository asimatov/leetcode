import { wordBreak } from "./solution";

test("Example 1", () => {
  expect(wordBreak("leetcode", ["leet","code"])).toStrictEqual(true);
});

test("Example 2", () => {
  expect(wordBreak("applepenapple", ["apple","pen"])).toStrictEqual(true);
});

test("Example 3", () => {
  expect(wordBreak("catsandog", ["cats","dog","sand","and","cat"])).toStrictEqual(false);
});

test("Example 4", () => {
  expect(wordBreak("catsandogcat", ["cats","dog","sand","and","cat","an"])).toStrictEqual(true);
});

test("Example 5", () => {
  expect(wordBreak("a", ["b"])).toStrictEqual(false);
});

test("Example 6", () => {
  expect(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"])).toStrictEqual(false);
});