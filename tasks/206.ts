import ListNode from "../typings/ListNode";
import { expect } from "../utils/expect";

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  let current = head;
  let next = head.next;
  let prev = null;
  while (current) {
    current.next = prev;
    prev = current;
    current = next;
    next = next?.next;
  }
  return prev;
}

// [1,2,3,4,5]

expect(
  reverseList(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
  )?.print(),
  [5, 4, 3, 2, 1]
);

expect(reverseList(new ListNode(1))?.print(), [1]);
expect(reverseList(null)?.print(), undefined);
