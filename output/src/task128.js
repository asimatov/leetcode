"use strict";
// https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=problem-list-v2&envId=54nuzvcj
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestConsecutive = longestConsecutive;
// 128. Longest Consecutive Sequence
// Medium
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:
// Input: nums = [1,0,1,2]
// Output: 3
// Constraints:
// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
function longestConsecutive(nums) {
    const numSet = new Set(nums);
    const skipSet = new Set();
    let maxLength = 0;
    for (let num of nums) {
        if (skipSet.has(num))
            continue;
        if (!numSet.has(num - 1)) { // new sequence
            let curNum = num;
            let length = 1;
            skipSet.add(curNum);
            while (numSet.has(curNum + 1)) {
                skipSet.add(curNum);
                length++;
                curNum++;
            }
            maxLength = Math.max(maxLength, length);
        }
    }
    return maxLength;
}
