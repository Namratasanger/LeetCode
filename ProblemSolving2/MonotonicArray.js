/**
 * @param {number[]} nums
 * @return {boolean}
 */

function increasing(nums){
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] > nums[i+1]) return false;
    }
    return true
}

function decreasing(nums){
     for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] < nums[i+1]) return false;
    }
    return true
}

var isMonotonic = function(nums) {
    return increasing(nums) || decreasing(nums);
};
