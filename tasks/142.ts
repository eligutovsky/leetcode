import ListNode from "../typings/ListNode";
import { expect } from "../utils/expect";

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next?.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
}

//  head = [3,2,0,-4], pos = 1
(() => {
  const n1 = new ListNode(3);
  const n2 = new ListNode(2);
  const n3 = new ListNode(0);
  const n4 = new ListNode(-4);
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;
  n4.next = n2;
  expect(detectCycle(n1)?.val, 2);
})();

// head = [1,2], pos = 0
(() => {
  const n1 = new ListNode(1);
  const n2 = new ListNode(2);
  n1.next = n2;
  n2.next = n1;
  expect(detectCycle(n1)?.val, 1);
})();

// head = [1,2], pos = -1
(() => {
  const n1 = new ListNode(1);
  const n2 = new ListNode(2);
  n1.next = n2;
  expect(detectCycle(n1)?.val, undefined);
})();

expect(detectCycle(new ListNode(1))?.val, undefined);
