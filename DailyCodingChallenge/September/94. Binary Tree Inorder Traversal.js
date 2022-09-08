/*
Day 8
94. Binary Tree Inorder Traversal
Link: https://leetcode.com/problems/binary-tree-inorder-traversal/
Level : Easy
*/

var inorderTraversal = function(root) {
   
    let data = [];
    var inOrder = function(node){
        if(node==null){
            return;
        }
        inOrder(node.left);
        data.push(node.val);
        inOrder(node.right);
    }
    
    inOrder(root);
    return data;
};
