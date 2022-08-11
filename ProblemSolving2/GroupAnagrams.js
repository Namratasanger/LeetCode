/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let count = 0;
    let hashmap = {};
    
    while(strs.length !=0){
        key = strs[count].split("").sort().join("");
        if(!hashmap[key]?.length){
            hashmap[key] = [];
        }
        hashmap[key].push(strs[count]);
        strs = [...strs.slice(1,strs.length)];
    }
    
    return Object.values(hashmap);
};
