/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let nextNumber = [];
    for(let i=0; i<nums.length;i++){
        let value, count=i+1;
        while(count != i){
            // console.log(count,i,nums[count] > nums[i]);
            if(count == nums.length){
                count=0;
            }else if(nums[count] > nums[i]){
                value = nums[count];
                break;
            }else{
                count++;
            }
        }
        nextNumber.push(value!=undefined ? value : -1);
    } 
    return nextNumber;
};
