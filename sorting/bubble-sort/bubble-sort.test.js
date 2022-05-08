import { bubbleSort } from "./bubble-sort";

test("should return sorted array", () => {
  const nums = [13, 32, 11, 9, 1];
  expect(bubbleSort(nums)).toEqual([1, 9, 11, 13, 32]);
});
