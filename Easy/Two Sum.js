/*
  @param {number[]} nums
  @param {number} target
  @return {number[]}
 */
 var twoSum = function(nums, target) {
    let temp=1;
   for(i=0;i<nums.length;){
       if(nums[i]+nums[temp]==target){
           return [i,temp];
       }
       if(temp==nums.length-1){
           i++;
           temp=i+1;
       }else{
           temp++;
       }
   }
}
console.log(twoSum([3,2,3],6))