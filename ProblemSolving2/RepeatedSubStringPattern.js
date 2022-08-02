/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let count = 0;
    let string = "";
    for(let i=0; i<=s.length; i++){
        string += s[i];
        let tempString="";
        if(string.length < s.length){
            for(let i=0; i<Math.ceil(s.length/string.length);i++){
                tempString+=string;
            }
        }
        if(tempString == s){
            return true;
        }  
    }
    return false;
};
