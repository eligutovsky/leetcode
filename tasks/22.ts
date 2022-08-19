function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  const dfs = (current: string[], left: number, right: number) => {
    if (current.length === n * 2) {
      result.push(current.join(""));
      return;
    }
    if (left < n) {
      current.push("(");
      dfs(current, left + 1, right);
      current.pop();
    }
    if (right < left) {
      current.push(")");
      dfs(current, left, right + 1);
      current.pop();
    }
  };
  dfs([], 0, 0);
  return result;
}

console.log(generateParenthesis(3));
