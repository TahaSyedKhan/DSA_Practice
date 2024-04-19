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
 var reverseLinkedList = function(head) {
    let temp = head;
    let prev = null;

    while(temp) {
        let front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
 }
 var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
var pairSum = function(head) {
    if(head == null) return;
    let mid = middleNode(head);
    let l1 = head;
    let l2 = mid;

    let left = l1;
    let right = reverseLinkedList(l2);

    let i = left;
    let j = right;
    let max = Number.MIN_SAFE_INTEGER;

    while(i != null && j != null) {
        let twinSum = i.val + j.val;
        if(twinSum > max) {
            max = twinSum;
        }
        i = i.next;
        j = j.next;
    }
    return max;
};