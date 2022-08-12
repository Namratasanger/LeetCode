/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let shash = new Array(26).fill(0);
    let phash = new Array(26).fill(0);
    let anagram = [];
    let base_ascii = 97;
    
    //check whether s is greater than or equal to p 
    if(s.length >= p.length){
        //forming phash
        for(i=0;i<p.length;i++){
            let index = p.charCodeAt(i) - base_ascii;
            phash[index]++;
        }

        //now forming shash
        for(i=0;i<p.length;i++){
            let index = s.charCodeAt(i) - base_ascii;
            shash[index]++;
        }
        if(JSON.stringify(shash) == JSON.stringify(phash)){
            anagram.push(0);
        }   
        --shash[s.charCodeAt(0) - base_ascii];
        
        //sliding window
        for(i=p.length;i<s.length;i++){
            let index = s.charCodeAt(i) - base_ascii; //finding index of next character;
            shash[index]++; //incrementing it's occurence
            if(JSON.stringify(shash) == JSON.stringify(phash)){
                anagram.push(i-p.length+1); 
            }
             --shash[s.charCodeAt(i-p.length+1) - base_ascii]
        }   
    }
    return anagram;
};
