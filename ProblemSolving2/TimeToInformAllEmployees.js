/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */



var numOfMinutes = function(n, headID, manager, informTime) {
    let employees = {};
    let max = 0, currTime = 0;
   
    function dfs(manager){
        
        max = Math.max(currTime,max);
        
        if(employees[manager]){
            for(let data of employees[manager]){
                currTime += informTime[manager];
                dfs(data);
                currTime -= informTime[manager];
            }
        }
    }
    
    // making unordered map
    for(let i=0; i<n; i++){
        if(manager[i] != -1){
            employees[manager[i]]?.length ? employees[manager[i]].push(i) :  employees[manager[i]] = [i];      
        }
    }
//     console.log(employees);
    
    dfs(headID);
    
    return max;
};
