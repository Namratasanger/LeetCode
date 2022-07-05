/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let swapCounter = 0;
    let swapper = [];
    if(s1.length !== s2.length){
        return false;
    }else if (s1 == s2){
        return true;
    }else{
        let flag = false;
        while(swapCounter != s1.length){
            if(s1[swapCounter] !== s2[swapCounter]){
                swapper.push(swapCounter);
            }else if(swapCounter.length > 2 ){
                    break;
            }
            swapCounter++;
        }
        if(swapper.length == 2){
            let newString = s2.slice(0,swapper[0]) + s2[swapper[1]] + s1.slice(swapper[0] + 1,swapper[1]) + s2[swapper[0]] + s1.slice(swapper[1]+1,s1.length);
            if(s1 == newString){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    
};
