/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let number = 0, count = 0, node = head;
    while(node.next){
        count++;
        node = node.next;
    }
    while(head){
        if(head.val == 1){
            number += Math.pow(2,count);
        }
        count--;
        head=head.next;
    }
    return number;
};
