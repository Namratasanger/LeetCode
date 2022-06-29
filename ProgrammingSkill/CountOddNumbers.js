/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let totalNumbers = high - low + 1;
    // if low or high is odd
    if(low % 2 != 0 ^ high % 2 != 0){
        return totalNumbers/2 + 1;
    }else{
        return (totalNumbers/2); 
    }
};
