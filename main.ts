import { mergeTrees } from "./algorithm/617. Merge Two Binary Trees";
import TreeNode from "./algorithm/TreeNode";

const r1 = new TreeNode(
  1,
  new TreeNode(
    3,
    new TreeNode(
      5
    ),
  ),
  new TreeNode(
    2
  )
);

const r2 = new TreeNode(
  2,
  new TreeNode(
    1,
    null,
    new TreeNode(
      4
    )
  ),
  new TreeNode(
    3,
    null,
    new TreeNode(
      7
    )
  )
)

console.log(
  JSON.stringify(mergeTrees(r1,r2))
);
