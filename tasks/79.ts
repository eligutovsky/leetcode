/**
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
*/

const directions = [
  [0, 1],
  [-1, 0],
  [1, 0],
  [0, -1],
];

function exist(board: string[][], word: string): boolean {
  const backtrack = (index: number, row: number, column: number): boolean => {
    if (index === word.length) {
      return true;
    }
    if (
      row < 0 ||
      row >= board.length ||
      column < 0 ||
      column >= board[row].length ||
      board[row][column] !== word[index]
    ) {
      return false;
    }
    board[row][column] = "#";
    const hasSolution = directions
      .map(([rowOffset, columnOffset]) =>
        backtrack(index + 1, row + rowOffset, column + columnOffset)
      )
      .some((value) => value === true);
    board[row][column] = word[index];
    return hasSolution;
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (backtrack(0, i, j)) {
        return true;
      }
    }
  }
  return false;
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
);
// console.log(
//   exist(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "ABCCED"
//   )
// );
