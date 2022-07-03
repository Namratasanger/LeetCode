/**
 * @param {number[]} arr
 * @return {boolean}
 */

var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b);
    let diff = arr[1] - arr[0];
    let flag = true;
    for(let i = 2; i < arr.length ; i++){
        let difference = arr[i] - arr[i-1];
        if(difference != diff){
            flag = false;
            break;
        }
    }
    return flag;
};
