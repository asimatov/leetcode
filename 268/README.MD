# [268. Missing Number](https://leetcode.com/problems/missing-number/description/?envType=problem-list-v2&envId=54nuzvcj)

Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return the only number in the range that is missing from the array.

**Example 1:** 

<div class="example-block">
Input: nums = [3,0,1]

Output: 2

Explanation:

<code>n = 3</code> since there are 3 numbers, so all numbers are in the range <code>[0,3]</code>. 2 is the missing number in the range since it does not appear in <code>nums</code>.

**Example 2:** 

<div class="example-block">
Input: nums = [0,1]

Output: 2

Explanation:

<code>n = 2</code> since there are 2 numbers, so all numbers are in the range <code>[0,2]</code>. 2 is the missing number in the range since it does not appear in <code>nums</code>.

**Example 3:** 

<div class="example-block">
Input: nums = [9,6,4,2,3,5,7,0,1]

Output: 8

Explanation:

<code>n = 9</code> since there are 9 numbers, so all numbers are in the range <code>[0,9]</code>. 8 is the missing number in the range since it does not appear in <code>nums</code>.

<div class="simple-translate-system-theme" id="simple-translate">

<div class="simple-translate-button isShow" style="background-image: url(&quot;moz-extension://8a9ffb6b-7e69-4e93-aae1-436a1448eff6/icons/512.png&quot;); height: 22px; width: 22px; top: 318px; left: 36px;">

<div class="simple-translate-panel" style="width: 300px; height: 200px; top: 0px; left: 0px; font-size: 13px;">
<div class="simple-translate-result-wrapper" style="overflow: hidden;">
<div class="simple-translate-move" draggable="true">

<div class="simple-translate-result-contents">
<p class="simple-translate-result" dir="auto">

<p class="simple-translate-candidate" dir="auto">

**Constraints:** 

- <code>n == nums.length</code>
- <code>1 <= n <= 10^4</code>
- <code>0 <= nums[i] <= n</code>
- All the numbers of <code>nums</code> are **unique** .

**Follow up:**  Could you implement a solution using only <code>O(1)</code> extra space complexity and <code>O(n)</code> runtime complexity?