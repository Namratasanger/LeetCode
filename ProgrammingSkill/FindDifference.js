/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
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
            return t[i];
            break;
        }
    }
};

// another approach using sorting the strings
var findTheDifference = function(s, t) {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    for(let i = 0; i < t.length; i++ ){
        if(s[i] !== t[i]){
            return t[i];
            break;
        }
    }
}

// using ascii values to find the difference character
var findTheDifference = function(s, t) {
    let sSum = 0, tSum = 0;
    for(let i = 0 ; i < s.length; i++){
        sSum += s.charCodeAt(i);
        tSum += t.charCodeAt(i);
    }
    tSum += t.charCodeAt(t.length-1);
    return String.fromCharCode(tSum - sSum);
}
