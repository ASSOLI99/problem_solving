//question link: https://leetcode.com/problems/ransom-note/
/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/
//-----------------answer:
/*
 @param {string} ransomNote
 @param {string} magazine
 @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    for (const letter of ransomNote) {
        if (!magazine.includes(letter)) return false
        magazine = magazine.replace(letter, '')
    }
    return true
};