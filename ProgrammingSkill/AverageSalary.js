/** 

You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

**/


/**
 * @param {number[]} salary
 * @return {number}
 */

// 1st approach
var average = function(salary) {
    let max = 0, min = Math.pow(10,6),total=0;
    for(let i=0;i<salary.length;i++){
        if(max < salary[i]){
            max = salary[i];
        }
        if(min > salary[i]){
            min = salary[i];
        }
        total += salary[i];
    }
    return (total - min - max) / (salary.length - 2);
};

// 2nd approach
var average = function(salary) {
    let total=0;
    let max = Math.max(...salary);
    let min = Math.min(...salary);
    for(let i=0;i<salary.length;i++){
        if(salary[i] !== max && salary[i] !== min){
            total +=salary[i];
        }
    }
    return total / (salary.length - 2);
};

/*
1st approach - 92ms
1. Find the maximum and minimum of the array
2. At the same time calculate the total salary
3. Return the average salary by deducting the maximum and minimum value from the total salary and divide it by the total records minus 2
*/
  
    
/*
2nd approach - 62ms
1. Find the maximum and minimum of the array
2. Calculate the total value excluding the maximum and minumum by checking that the current value should not be maximum or minimum
3. Return the average salary by deducting the maximum and minimum value from the total salary and divide it by the total records minus 2
*/
