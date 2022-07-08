/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

/* Recursive method */
function display(root,traversalList = []){
    if(root == null){
        return;
    }
    traversalList.push(root.val);
    for(let i=0; i< root.children.length; i++){
        display(root.children[i],traversalList)
    }        
}

var preorder = function(root) {
    let traversalList = [];
    display(root,traversalList);
    return traversalList;
}
