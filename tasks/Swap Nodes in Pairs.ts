import ListNode from "./ListNode";

export function swapPairs(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head;
  const f = head;
  const s = head.next;
  f.next = swapPairs(s.next);
  s.next = f;
  return s;
};