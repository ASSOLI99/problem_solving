//problem link: https://leetcode.com/problems/palindrome-linked-list/submissions/
/**
 * ---------------------------------
 * Given the head of a singly linked list, return true if it is a palindrome.
Example 1:
Input: head = [1,2,2,1]
Output: true
Input: head = [1,2,2,33,2,1]
Output: false
-----------------------------------
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
  @param {ListNode} head
  @return {boolean}
 */
 var isPalindrome = function(head) {
     let wrong=false
    if(head[0]==head[head.length-1]){
        if(head.length%2==1){
        if(head[Math.floor(head.length/2)]==head[Math.floor(head.length/2)-1]+1){
        for(i=0;i<head.length/2;i++){
            if(head[i]==head[head.length-1-i]){
                wrong=true
            }else{
                wrong=false;
                break;
            }
        }
    }
}else if(head.length%2==0){
    for(i=0;i<head.length/2;i++){
        if(head[i]==head[head.length-1-i]){
            wrong=true
        }else{
            wrong=false;
            break;
        }
    }

}
    }
    return wrong;
};
console.log(isPalindrome([1,2]))//false
console.log(isPalindrome([1,2,3,2,1]))//true