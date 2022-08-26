/*
383. Ransom Note
Link: https://leetcode.com/problems/ransom-note/
Level : Easy
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hashmap = {}
    for(let i = 0; i< ransomNote.length; i++){
        hashmap[ransomNote[i]] = (hashmap[ransomNote[i]]+1) || 1;
    }
    for(let i = 0; i< magazine.length; i++){
        if(hashmap[magazine[i]]){
            hashmap[magazine[i]]--;
        }
    }
    return !(Object.values(hashmap).filter(d => d > 0).length > 0);
};
