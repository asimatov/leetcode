import { countSubstrings } from "./solution";

test("Example 1", () => {
  expect(countSubstrings("abc")).toStrictEqual(3);
});

test("Example 2", () => {
  expect(countSubstrings("aaa")).toStrictEqual(6);
});

test("Example 3", () => {
  expect(countSubstrings("aba")).toStrictEqual(4);
});

test("Example 4", () => {
  expect(countSubstrings("bbccaacacdbdbcbcbbbcbadcbdddbabaddbcadb")).toStrictEqual(64);
});