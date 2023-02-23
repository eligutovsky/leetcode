import ListNode from "../typings/ListNode";

export function middleNode(head: ListNode | null): ListNode | null {
  let tortoise, rabbit;
  tortoise = rabbit = head;
  while (rabbit && rabbit.next) {
    tortoise = tortoise.next;
    rabbit = rabbit.next?.next;
  }
  return tortoise;
}
