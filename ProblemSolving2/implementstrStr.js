/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let index = -1;
    for(let i = 0; i< haystack.length; i++){
        if(haystack[i] === needle[0]){
            for(let j = 0; j<needle.length;j++){
                if(haystack[j+i] === needle[j]){
                    if(index == -1){
                        index = i;
                    }
                }else{
                    index = -1;
                    break;
                }    
            }
        }
        if(index > -1){
            break;
        }
    }
    return index;
};
