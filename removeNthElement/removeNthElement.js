/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node1 = head;
    let node2 = head;
    let counter = 0;
    while (node1) {
        node1 = node1.next;
        counter++ >= n + 1 ? node2 = node2.next : null;
    }
    if (node2.next) {
            if (counter == n) {
                return head.next
            } else {
              node2.next = node2.next.next;
              return head;  
            }
    }
    else {
        return null;
    }
};