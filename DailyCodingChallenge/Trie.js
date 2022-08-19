/* 

Day 3
208. Implement a Trie
Link : https://leetcode.com/problems/implement-trie-prefix-tree/

*/


var Trie = function() {
    this.alphabets = {};
    this.flag = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this;  
    for(let i=0; i<word.length; i++){
        if(!curr.alphabets[word[i]]){
            curr.alphabets[word[i]] = new Trie();      
        }
        curr  = curr.alphabets[word[i]];
    }
    curr.flag = true;
    // console.log(this);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this;
    for(let i=0; i<word.length; i++){
        if(!curr.alphabets[word[i]]){
            return false;
        }
        curr  = curr.alphabets[word[i]];
    }
    return curr.flag;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this;
    for(let i=0; i<prefix.length; i++){
        if(!curr.alphabets[prefix[i]]){
            return false;
        }
        curr  = curr.alphabets[prefix[i]];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
