/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0, product = 1;
    let power = n.toString().length - 1;
    while(power >= 0){
        sum += Math.floor(n / Math.pow(10,power));
        product *= Math.floor(n / Math.pow(10,power));
        n = n % Math.pow(10,power);   
        power--;
    }
    return product - sum;
};

