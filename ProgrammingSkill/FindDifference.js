/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let letter = "";
    let hash = [];
    for(let i = 0; i < s.length; i++){
        let index = hash.findIndex(data => data.value == s[i]);
        if(index > -1){
            hash[index].count = hash[index].count + 1;            
        }else{
            hash.push({value : s[i],count:1})
        }
    }
    for(let i=0; i<t.length; i++){
        let index = hash.findIndex(data => data.value == t[i]);
        if(index > -1 && hash[index].count !== 0){
            hash[index].count = hash[index].count - 1;
        }else{
            letter = t[i];
            break;
        }
    }
    return letter;
};
