/*
  @param {number} n
  @return {number[]}
 */
 var countBits = function(n) {
     let myLArr=[];
     
    for(i=n;i>=0;i--){
        let counter=0
     let myArr=[];
        let temp=i;
       while(temp > 0){
            temp=temp/2;
            if(Number.isInteger(temp)){
                myArr.push(0);
            }else{
                myArr.push(1);
                temp=Math.floor(temp);
                counter++
            }
       }
      myLArr.push(counter);
      
    }
    return myLArr.reverse();
}
console.log(countBits(5));