import { hasCycle, ListNode, buildList } from "./solution";

test("Example 1", () => {
  const values = [3,2,0,-4];
  const head = buildList(values, 1);
  expect(hasCycle(head)).toStrictEqual(true);
});

test("Example 2", () => {
  const values = [1,2];
  const head = buildList(values, 0);
  expect(hasCycle(head)).toStrictEqual(true);
});

test("Example 3", () => {
  const values = [1,2];
  const head = buildList(values);
  expect(hasCycle(head)).toStrictEqual(false);
});

test("Example 4", () => {
  const values = [1,2];
  const head = buildList(values);
  expect(hasCycle(head)).toStrictEqual(false);
});

test("Example 5", () => {
  const values = [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5];
  const head = buildList(values);
  expect(hasCycle(head)).toStrictEqual(false);
});

test("Example 6", () => {
  const values = [-1,-7,7,-4,19,6,-9,-5,-2,-5];
  const head = buildList(values, 6);
  expect(hasCycle(head)).toStrictEqual(true);
});
