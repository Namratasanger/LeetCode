/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealthiest = 0;
    for(let i = 0; i< accounts.length; i++){
        let currSum = 0;
        for(let j = 0; j < accounts[i].length; j++){
            currSum += accounts[i][j];
        }
        if(currSum > wealthiest){
            wealthiest = currSum;
        }
    }
    return wealthiest;
};
