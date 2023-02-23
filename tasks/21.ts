import ListNode from "../typings/ListNode";
import { expect } from "../utils/expect";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && list2) {
    return list2;
  }
  if (!list2 && list1) {
    return list1;
  }
  if (!list1 && !list2) {
    return null;
  }
  let current1 = list1;
  let current2 = list2;
  let head = null;
  let current = null;
  while (current1 && current2) {
    if (current1.val < current2.val) {
      if (!head) {
        head = current1;
        current = head;
      } else {
        current.next = current1;
        current = current.next;
      }
      current1 = current1.next;
    } else {
      if (!head) {
        head = current2;
        current = head;
      } else {
        current.next = current2;
        current = current.next;
      }
      current2 = current2.next;
    }
  }

  if (current1) {
    current.next = current1;
  }
  if (current2) {
    current.next = current2;
  }
  return head;
}

expect(
  mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4)))
  )?.print(),
  [1, 1, 2, 3, 4, 4]
);
