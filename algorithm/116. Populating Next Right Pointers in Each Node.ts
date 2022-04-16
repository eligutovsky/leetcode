class MergedNode {
    val: number
    left: MergedNode | null
    right: MergedNode | null
    next: MergedNode | null
    constructor(val?: number, left?: MergedNode, right?: MergedNode, next?: MergedNode) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}

 function connect(root: MergedNode | null): MergedNode | null {
  // if (root == null) {
  //   return root;
  // }
  // let current: MergedNode = root
  // while (current.left != null) {
  //   let nextLevel: MergedNode = current.left;
  //   while (current != null) {
  //     current.left.next = current.right;
  //     if 
  //   }

    


  // }
  return root;
};

export {
  MergedNode,
  connect
};