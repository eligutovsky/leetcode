import { expect } from "../utils/expect";

function spiralOrder(matrix: number[][]): number[] {
  const result = [];
  const rows = matrix.length;
  const columns = matrix[0].length;
  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = columns - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i < right + 1; i++) {
      result.push(matrix[top][i]);
    }
    top += 1;
    for (let i = top; i < bottom + 1; i++) {
      result.push(matrix[i][right]);
    }
    right -= 1;
    if (top <= bottom) {
      for (let i = right; i > left - 1; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom -= 1;
    }
    if (left <= right) {
      for (let i = bottom; i > top - 1; i--) {
        result.push(matrix[i][left]);
      }
      left += 1;
    }
  }

  return result;
}

expect(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [1, 2, 3, 6, 9, 8, 7, 4, 5]
);
expect(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
  [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
);
