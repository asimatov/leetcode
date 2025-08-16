import { threeSum } from "./solution";

test("Example 1", () => {
  expect(threeSum([-1,0,1,2,-1,-4])).toStrictEqual([[-1,-1,2],[-1,0,1]]);
});

test("Example 2", () => {
  expect(threeSum([0,1,1])).toStrictEqual([]);
});

test("Example 3", () => {
  expect(threeSum([0,0,0])).toStrictEqual([[0,0,0]]);
});
