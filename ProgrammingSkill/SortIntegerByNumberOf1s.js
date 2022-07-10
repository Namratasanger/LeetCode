/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let newArray = [];
    let count = 0;
    arr.sort((a,b)=>a-b);
    while(newArray.length !== arr.length){
        newArray = [...newArray, ...arr.filter((number)=>number.toString(2).split("1").length == count + 1)];
        count = count + 1;
    }
    return newArray;
};
