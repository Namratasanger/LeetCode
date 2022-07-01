/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let perimeter = 0;
    //1st approach - brute - force approach with O(N^3)
    for(let i = 0; i < nums.length - 2;i++){
        for(let j = i+1; j < nums.length - 1; j++){
            for(let k = j+1; k < nums.length; k++){
                if(nums[i] +nums[j] >nums[k] && nums[j] +nums[k] >nums[i] && nums[k] +nums[i] >nums[j]){
                    let newPerimeter = nums[i] +nums[j] +nums[k];
                    if(newPerimeter > perimeter){
                        perimeter = newPerimeter;
                    }
                }
            }
        }
    }   
    
    //2nd approach
    nums.sort((a,b)=>a-b);
    for(let index = nums.length - 1; index > 1 ; index--){
        if(perimeter <= 0){
            let first = nums[index] +nums[index-1];
            let second = nums[index-1] +nums[index-2];
            let third = nums[index-2] +nums[index];
            if( first > nums[index-2] &&  second > nums[index] && third > nums[index-1]){
                let newPerimeter = nums[index] + nums[index-1] + nums[index-2];
                if(newPerimeter > perimeter){
                    perimeter = newPerimeter
                }
            } 
        }else{
            break;
        }
        
    }
    
    //3rd approach
    let index = nums.length - 1;
    do{
        let first = nums[index] +nums[index-1];
        let second = nums[index-1] +nums[index-2];
        let third = nums[index-2] +nums[index];
        if( first > nums[index-2] &&  second > nums[index] && third > nums[index-1]){
            let newPerimeter = nums[index] + nums[index-1] + nums[index-2];
            if(newPerimeter > perimeter){
                perimeter = newPerimeter
            }
        } 
        index--;
    }while(perimeter <= 0 && index > 1);
   return perimeter;
};

/*
1st approach : 
1. Create 3 loops to loop over the 3 sides of triangle
2. Form all possible pairs
3. Find the perimeter to check the non-zero area
4. If the new perimeter is greater than previous one update the previous perimeter
5. At last, return the perimeter
*/

/*
2nd approach :
1. First sort the array in ascending order
2. Js sorts the data in lexographical manner so we need to make sure that the array gets sorted properly
3. Start finding the perimeter of the largest sides, before that check whether they are forming non-zero area/ are forming a triangle
    a. If the sides are forming a triangle then update the perimeter and we found the maximum perimeter since the sum of maximum numbers will be maximum
        i. Exit the loop since we found the maximum perimeter
    b. If the triangle is not formed then decrease the index and check the calclulation with the possible maximum sides forming non-zero triangle
        i. Continue this process until we find the maximum perimeter or until we traverse to all possible sides
4. Return the updated perimeter
*/

/*
3rd approach:
It is same as the 2nd approach but instead of using for loop I have used while loop.
*/
