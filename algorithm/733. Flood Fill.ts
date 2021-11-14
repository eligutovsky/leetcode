function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  const oldColor = image[sr][sc];
  if (newColor !== oldColor) {
    dfs(image, sr, sc, newColor, oldColor);
  }
  return image;
};

const memo: {[key: string]: boolean} = {};

function dfs(image: number[][], sr: number, sc: number, newColor: number, oldColor: number) {
  if (memo[`${sr}${sc}`]) return;
  memo[`${sr}${sc}`] = true;
  if (image[sr][sc] == oldColor) {
    image[sr][sc] = newColor;
    if (0 < sr) {
      dfs(image, sr - 1, sc, newColor, oldColor);
    }
    if (sr < image.length - 1) {
      dfs(image, sr + 1, sc, newColor, oldColor);
    }
    if (0 < sc) {
      dfs(image, sr, sc - 1, newColor, oldColor);
    }
    if (sc < image[sr].length) {
      dfs(image, sr, sc + 1, newColor, oldColor);
    }
  }
}

export {floodFill};