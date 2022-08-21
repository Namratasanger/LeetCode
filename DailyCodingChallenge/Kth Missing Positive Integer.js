/*
Day 4
1539. Kth Missing Positive Number
Link: https://leetcode.com/problems/kth-missing-positive-number/
*/


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let count = 0;
    let number = 1;
    let digit;
    while(count != k){
        if(!arr.includes(number)){
            digit = number;
            count++;
        }
        number++;
    }
    return digit;
};
