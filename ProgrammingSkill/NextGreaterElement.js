/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let data = [];
    for(let i=0; i<nums1.length; i++){
        let index = 0;
        while(nums2[index] != nums1[i]){
            index++;
        }
        index++;
       while(nums1[i] > nums2[index] && nums1[i] != nums2[index] && index < nums2.length){
            index++;
        }
        index <= nums2.length - 1 ? data.push(nums2[index]) : data.push(-1);
    }
    return data;
};
