/**
 Day 1
 1448. Count Good Nodes in Binary Tree
 Link: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 Level: Medium
 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;
    dfs(root);
  
    //performing pre-order traversal
    function dfs(node,max = -10000){
        if(node == null){
            return;
        }
        if(max != undefined){
            if(node.val >= max){
                max = node.val;
                count++;
            }
        }else{
                max = node.val;
                count++;
        }
        dfs(node.left,max);
        dfs(node.right,max);
    }
    return count;
};
