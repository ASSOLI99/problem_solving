//question link: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
/*
  @param {number[][]} mat
  @param {number} k
  @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
     let myArr=[];
     for(i=0;i<mat.length;i++){
         let counter=0;
        for(j=0;j<mat[i].length;j++){
            if(mat[i][j]==1){
                counter++;
            }
            
        }
        myArr[i]=counter
     }
     let tempArr=[...myArr];
     tempArr.sort(function(a, b) {
        return a - b;
      });
let finalArr=[];
for(i=0;i<myArr.length;i++){
    for(j=0;j<myArr.length;j++){
        if(myArr[j]==tempArr[i]){
            finalArr.push(j);
            myArr[j]=-1;
            break;
        }
    }
}
return finalArr.slice(0,k);

};
console.log(kWeakestRows([[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],1))