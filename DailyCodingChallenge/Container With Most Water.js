/*
11. Container With Most Water
Link: https://leetcode.com/problems/container-with-most-water/submissions/
Level: Medium
*/

/**
 * @param {number[]} height
 * @return {number}
 */

// O(n^2) - time complexity
var maxArea = function(height) {
    let max_height = new Array(height.length).fill(0);
    let max = 0;
    for(let i=0; i<height.length; i++){
        for(let j=i+1; j<height.length;j++){
            max = Math.min(height[i],height[j]) * (j-i);
            if(max >= max_height[j]){
                max_height[j] = max;
            }
        }
    }
    return max_height.sort((a,b)=>a-b)[max_height.length-1];
};


// O(n) - time complexity
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    let new_max = 0;
    while(left<right){
        new_max = Math.min(height[left],height[right]) * (right - left);
        if(new_max > max){
            max = new_max;
        }
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return max;
};
