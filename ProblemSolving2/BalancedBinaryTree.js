/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function height(node){
    if(node == null){
        return [true,0];
    }
    // console.log("Left called for : ", node.val);
    let left = height(node.left);
    // console.log("Right called for : ", node.val);
    let right = height(node.right);
    balanced = left[0] && right[0] && (Math.abs(left[1] - right[1]) <= 1);
    // console.log(left[1], right[1], left[2],right[2],node.val);
    return [balanced, 1 + Math.max(left[1],right[1]),node.val];
}
var isBalanced = function(root) {
    return height(root)[0];
    
};
