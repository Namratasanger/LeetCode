/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = Math.floor((high - low)/2);
    // if low or high is odd
    if (low % 2 != 0 || high % 2 != 0)
        count += 1;
 
    return count;
};
