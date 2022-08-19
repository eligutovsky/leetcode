/**
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
 */


function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const dfs = (index: number, current: number[], total: number): void => {
    if (total === target) {
      result.push(current.slice());
      return;
    }
    if (index >= candidates.length || total > target) {
      return;
    }
    current.push(candidates[index]);
    dfs(index, current, total + candidates[index]);
    current.pop();
    dfs(index + 1, current, total);
  }
  dfs(0, [], 0);
  return result;
};

console.log(combinationSum([2,3,6,7], 7));