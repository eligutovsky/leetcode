import ListNode from "../datastructures/ListNode";

export function middleNode(head: ListNode | null): ListNode | null {
  let tortoise, rabbit;
  tortoise = rabbit = head;
  while (rabbit && rabbit.next) {
    tortoise = tortoise.next;
    rabbit = rabbit.next?.next;
  }
  return tortoise;
}
