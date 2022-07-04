/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let number = n.toString();
    let product = 0;
    const map = [];
    while(product !== 1){
        product = 0;
        while(number !== 0){
            product += (number % 10) * (number % 10); 
            number = Math.floor(number / 10);
        }
        let found = map.find(number=>product == number);
        map.push(product);
        if(found){
            return false;
        }
        map.push(product);
        number = product;
    }
    return true;
};
