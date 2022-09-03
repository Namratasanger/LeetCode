/*
Day 2:
637. Average of Levels in Binary Tree
Link: https://leetcode.com/problems/average-of-levels-in-binary-tree/
Level: Easy
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function dfs(node,avg, level){
    if(node == null){
        return;
    }else{
        if(avg[level]){
            avg[level].push(node.val);        
        }else{
            avg[level] = [node.val];
        }
    }
    level++;
    dfs(node.left,avg,level);
    dfs(node.right,avg,level);
}

var averageOfLevels = function(root) {
    let avg = [];
    let level = 0;
    dfs(root,avg,level);
    for(let i=0 ;i<avg.length;i++){
        let average = 0;
        for(let j=0; j<avg[i].length;j++){
            average+=avg[i][j];
        }
        avg[i] = average/(avg[i].length || 1);
    }
    return avg;
};
