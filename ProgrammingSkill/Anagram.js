/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length === t.length){
        s = s.split('').sort().join('');
        t = t.split('').sort().join('');

        let count = 0;
        for(character of s){
            if(character !== t[count]){
                return false;
            }
            count++;
        }        
    }else{
            return false;
    }
    return true;
};
