var arraySign = function(nums) {
    let sign = 1;
    for(let index = 0; index < nums.length; index++ ){
        if(nums[index] == 0 ){
            sign = 0;
        }else if(nums[index] < 0){
            sign = -sign;
        }
    }
    return sign;
}
