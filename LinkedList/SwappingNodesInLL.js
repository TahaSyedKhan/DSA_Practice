/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let fast = head;
    let i = 1;

    while(i < k && fast != null) {
        i++
        fast = fast.next;
    }
    let node1 = fast;

    let slow = head;
    while(fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
    let node2 = slow;

    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;

    return head;
};