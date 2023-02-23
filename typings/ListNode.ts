export default class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  print() {
    const result = [];
    let current: ListNode = this;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
}
