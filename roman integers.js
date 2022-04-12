//question link :  https://leetcode.com/problems/roman-to-integer/
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/
var romanToInt = function(s) {
    //input I=1;
    //input v=5;
    //input x=10;
    //input L=50;
    //input c=100;
    //input D=500;
    //input M=1000;
    let c=0;
    let p=1;
    let x= s.toUpperCase().split("")
    for(i=0;i<x.length;i++){
        if(x[i]=="I"){
            x[i]=1;
        }else if(x[i]=="V"){
            x[i]=5;
        }else if(x[i]=="X"){
            x[i]=10;
        }else if(x[i]=="L"){
            x[i]=50;
        }else if(x[i]=="C"){
            x[i]=100;
        }else if(x[i]=="D"){
            x[i]=500;
        }else if(x[i]=="M"){
            x[i]=1000;
        }
    }
for(i=x.length-1;i>=0;i--){
    if(i==x.length-1){
        c=x[i]
    }else{
        c=c;
    }
    if(x[i]>x[i-1]){
        c-=x[i-1]
    }else if(x[i]<=x[i-1]){
        c+=x[i-1]
    }
}
return c; 
};
console.log(romanToInt("iii"))