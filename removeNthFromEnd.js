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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeNthFromEnd = function(head, n) {
  var dummy = new ListNode(0);
  dummy.next = head;

  var first = dummy;
  var second = dummy;

  for (let i = 0; i < n + 1; i++) {
    first = first.next;
  }

  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return dummy.next;
};

var input = new ListNode(1);
input.next = new ListNode(2);
input.next.next = new ListNode(3);

removeNthFromEnd(input, 1);
