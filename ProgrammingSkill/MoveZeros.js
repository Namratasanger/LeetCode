/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0, zeroCounter = 0;
    while(count != nums.length - 1 - zeroCounter){
        if(nums[count] == 0){
            for(let i = count; i < nums.length - 1; i++){
                nums[i] = nums[i+1];
            }
            nums[nums.length - 1 - zeroCounter] = 0;
            zeroCounter++;
        }else{
            count++;            
        }
    }
    return nums;
};
