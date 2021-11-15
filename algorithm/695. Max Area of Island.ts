function maxAreaOfIsland(grid: number[][]): number {
  let maxArea = 0;
  const x = grid.length;
  const y = grid[0].length;
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (grid[i][j] === 1) {
        const area = areaOfIsland(i, j);
        maxArea = maxArea < area ? area : maxArea;
      }
    }
  }
  function areaOfIsland(i: number, j: number): number {
    if (i < 0 || i >= x || j < 0 || j >= y || grid[i][j] === 0) return 0;
    let founded = 1;
    grid[i][j] = 0;
    founded += areaOfIsland(i - 1, j);
    founded += areaOfIsland(i + 1, j);
    founded += areaOfIsland(i, j - 1);
    founded += areaOfIsland(i, j + 1);
    return founded;
  }
  
  return maxArea;
};

export {maxAreaOfIsland};