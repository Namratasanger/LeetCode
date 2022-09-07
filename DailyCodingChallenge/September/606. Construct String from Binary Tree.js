/*
Day 7
606. Construct String from Binary Tree
Link : https://leetcode.com/problems/construct-string-from-binary-tree/submissions/
Level: Easy
*/

var tree2str = function(node) {
    let str = "";
    
    if(node == null){
        return "";
    }
    if(node.left == null && node.right == null){
        return node.val += "";
    }
    if(node.right == null){
        return node.val + "(" + tree2str(node.left) + ")";
    }
    return node.val +  "(" + tree2str(node.left) + ")" + "(" + tree2str(node.right) + ")";
    
};
