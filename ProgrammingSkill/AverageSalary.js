/** 

You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

**/


/**
 * @param {number[]} salary
 * @return {number}
 */
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
