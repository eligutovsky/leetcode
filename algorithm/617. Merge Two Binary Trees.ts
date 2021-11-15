import TreeNode from "./TreeNode";

/**
 * You are given two binary trees root1 and root2.
 * Imagine that when you put one of them to cover the other, 
 * some nodes of the two trees are overlapped while the others are not. 
 * You need to merge the two trees into a new binary tree. 
 * The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. 
 * Otherwise, the NOT null node will be used as the node of the new tree. 
 * Return the merged tree.
 */

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1 && !root2) return null;
  const root = new TreeNode((root1?.val ?? 0) + (root2?.val ?? 0));
  root.left = mergeTrees(root1?.left, root2?.left);
  root.right = mergeTrees(root1?.right, root2?.right);
  return root;
};

export {mergeTrees};