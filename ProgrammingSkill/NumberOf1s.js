/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    do{
        if(n%2 == 1){
            ++count;
        }
    }while((n = Math.floor(n/2)) != 0 );
    return count;
};

/*

1st approach - 81ms
1. Find the binary representation of the number
2. While calculating the binary if the remainder is 1 then increase the counter of 1's
3. Divide the number by 2 until the quotient will be 0
4. Return the count of 1's stored in counter
*/
