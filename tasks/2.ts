import ListNode from "../datastructures/ListNode";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const head = new ListNode();
  let p1 = 0;
  let p2 = 0;
  let carry = 0;
  let current = head;
  while (l1 || l2) {
    if (l1) {
      p1 = l1.val;
      l1 = l1.next;
    } else {
      p1 = 0;
    }
    if (l2) {
      p2 = l2.val;
      l2 = l2.next;
    } else {
      p2 = 0;
    }
    const sum = p1 + p2 + carry;
    carry = sum > 9 ? 1 : 0;
    current.next = new ListNode(sum % 10);
    current = current.next;
  }
  if (carry) {
    current.next = new ListNode(carry);
  }
  return head.next;
}
