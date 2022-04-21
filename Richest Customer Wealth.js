//question link: https://leetcode.com/problems/richest-customer-wealth/submissions/
/*
  @param {number[][]} accounts
  @return {number}
 */
 var maximumWealth = function(accounts) {
        let max=0;
    for(i=0;i<accounts.length;i++){
        let temp=0;
        for(j=0;j<accounts[i].length;j++){
            temp+=accounts[i][j];
        }
        if(temp>max){
            max=temp;
        }
    }
    return max;
};
console.log(maximumWealth([[1,2,3],[3,2,1],[2,2,2,2,2]]));