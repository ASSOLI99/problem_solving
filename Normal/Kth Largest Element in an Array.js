//question link: https://leetcode.com/problems/kth-largest-element-in-an-array/
/*
  @param {number[]} nums
  @param {number} k
  @return {number}
 */
 var findKthLargest = function(nums, k) {
    nums.sort((a,b)=>b-a)
    console.log(nums[k-1]);
    console.log(nums);
};
findKthLargest([9,7,4,3,8,10,12,2,1],6)