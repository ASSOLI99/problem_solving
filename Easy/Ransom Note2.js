//check if magazine contain ransomNote check it in both ways.
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length<magazine.length){
        for(i=0;i<magazine.length;i++){
           if( magazine.slice(i,i+ransomNote.length)==ransomNote){
            return true;
           }else if(magazine.slice(i,i+ransomNote.length).split("").reverse().join("")==ransomNote){
            return true;
           }else if(i==magazine.length){
                   return false;
           }}
        return false;
    }else if(ransomNote==magazine){
        return true;
    }else if(ransomNote.split("").reverse().join("")==magazine){
        return true;
    }else{
        return false;
    }};