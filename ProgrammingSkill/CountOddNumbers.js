var countOdds = function(low, high) {
    // if low or high is odd
    if (low % 2 != 0 || high % 2 != 0){
        return Math.floor((high - low)/2) + 1;        
    }
    else{
        return Math.floor((high - low)/2);        
    }
};
