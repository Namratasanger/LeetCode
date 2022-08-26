/*
Day 10 
274. H-Index
Link: https://leetcode.com/problems/h-index/
*/

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let flag = false;
    citations = citations.sort((a,b)=>a-b);
    let loop_counter = citations[citations.length-1];
    while(!flag){
        let condition = citations.filter(d => d >= loop_counter).length >= loop_counter;
        if(!condition){
            loop_counter--;
        }
        flag = condition;
    }
    return loop_counter;
};

// using binary search - O(logN)
var hIndex = function(citations) {
    citations = citations.sort((a,b)=>a-b);
    let low = 0;
    let high = citations.length - 1;
    while(low <= high){
        let mid = Math.floor(low+((high - low)/2));
        if(citations[mid] == (citations.length - mid)){
           return citations[mid];
        }
        else if(citations[mid] > (citations.length - mid)){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return citations.length - low;
}
