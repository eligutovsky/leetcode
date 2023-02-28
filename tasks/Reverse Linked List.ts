import ListNode from "../datastructures/ListNode";

export function reverseList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head;
  const newHead = head.next;
  head.next = reverseList(newHead.next);
  newHead.next = head;
  return newHead;
}
