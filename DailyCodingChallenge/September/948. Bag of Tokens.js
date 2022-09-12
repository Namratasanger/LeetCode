/*
Day 12
948. Bag of Tokens
Link: https://leetcode.com/problems/bag-of-tokens/
Level: Medium
*/

/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens = tokens.sort((a,b)=>a - b);
    let score = 0, maxScore = 0;
    let left = 0;
    let right = tokens.length - 1;
    while(left <= right){
        if(power >= tokens[left]){
            // play up
            power -= tokens[left];
            score += 1;
            left++;
            maxScore = Math.max(score,maxScore);
        }
        else if (score > 0){
            power += tokens[right];
            score -= 1;
            right--;
                maxScore = Math.max(score,maxScore);
        }else{
            break;
        }
    }
    return maxScore;
};
