import ListNode from "./ListNode";

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let hare = head;
  let tortoise: ListNode | null;
  let stepback = 1;
  while (hare && hare.next) {
    if (stepback == n) {
      tortoise = head;
    } else if (stepback > n) {
      tortoise = tortoise?.next;
    }
    hare = hare.next;
    stepback++;
  }
  if (tortoise) {
    tortoise.next = tortoise?.next?.next;
    return head;
  }
  return head.next;
};