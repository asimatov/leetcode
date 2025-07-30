"use strict";
// https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=54nuzvcj
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = twoSum;
// 1. Two Sum
// Easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
// Constraints:
// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// Only one valid answer exists.
// Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?
function twoSum(nums, target) {
    const numsMap = new Map(); //key is value from original nums[], value - index from nums[]
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - nums[i];
        if (numsMap.has(num2)) {
            let num2Index = numsMap.get(num2);
            return [num2Index, i];
        }
        numsMap.set(num1, i);
    }
    throw new Error("No valid pair found.");
}
