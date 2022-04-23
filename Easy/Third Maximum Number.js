//question link: https://leetcode.com/problems/third-maximum-number/
/*
  @param {number[]} nums
  @return {number}
 */
 var thirdMax = function(nums) {
    if(nums.length>=3){
        nums.sort((a,b)=>b-a);
        for(i=0;i<nums.length;i++){
            if(nums[i]==nums[i+1]){
              nums.splice(i,1);
              i--;
            }
        }
        if(nums.length>=3){

        
        return nums[2];
    }else{
        return nums[0];
    }
    }else{
        nums.sort((a,b)=>b-a);
        return nums[0];
    }
};
console.log(thirdMax([1,1,1]))