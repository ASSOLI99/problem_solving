// question link: https://leetcode.com/problems/add-two-numbers/
/*
  Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 */
/*
  @param {ListNode} l1
  @param {ListNode} l2
  @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {

    let one=new Array(l1);
    let two=new Array(l2);
    let sub1=0;
    let sub2=0;
for(i=0;i<one[0].length;i++){
sub1=sub1*10+one[0][i];
}
for(i=0;i<two[0].length;i++){
    sub2=sub2*10+two[0][i];
}
let final= sub1+sub2;

let myFunc = num => Number(num);
  
var intArr = Array.from(String(final), myFunc);
intArr.reverse();

return intArr.join("");
};
console.log(addTwoNumbers([2,2,3],[9,9,9]));