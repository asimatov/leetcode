import { missingNumber } from "./solution";

test("Example 1", () => {
  expect(missingNumber([3,0,1])).toStrictEqual(2);
});

test("Example 2", () => {
  expect(missingNumber([0,1])).toStrictEqual(2);
});

test("Example 3", () => {
  expect(missingNumber([9,6,4,2,3,5,7,0,1])).toStrictEqual(8);
});
