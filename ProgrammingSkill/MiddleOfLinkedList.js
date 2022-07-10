/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let arrayLinkedList = [];
    let node = head;
    while(node){
        arrayLinkedList.push(node.val);
        node = node.next;
    }
    let count =  Math.floor(arrayLinkedList.length / 2);
    while(count != 0){
        head = head.next;  
        count--;
    }
    return head;
};
