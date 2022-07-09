/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergeString = "";
    if(word1.length == word2.length){
        for(let character in word1){
            mergeString += word1[character] + word2[character];
        }
    }else if(word1.length > word2.length){
        let i = 0;
        for(i = 0; i < word2.length; i++){
            mergeString += word1[i] + word2[i];
        }
        mergeString += word1.slice(i,word1.length);
    }else{
        let i = 0;
        for(i = 0; i < word1.length; i++){
            mergeString += word1[i] + word2[i];
        }
        mergeString += word2.slice(i,word2.length);
    }
    return mergeString;
};
