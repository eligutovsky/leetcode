
function maxDistance(colors: number[]): number {
  var maxDist = 0;
  var startIndex = 0;
  var colorA = colors[startIndex]
  for (let i = 1; i < colors.length; i++ ) {
      const colorB = colors[i]
      if (colorA != colorB) {
          maxDist = Math.max(maxDist, i - startIndex);   
      }
  }
  startIndex = colors.length - 1;
  colorA = colors[startIndex];
  for (let i = colors.length; i >= 0; i-- ) {
    const colorB = colors[i]
    if (colorA != colorB) {
        maxDist = Math.max(maxDist, startIndex - i);   
    }
  }
  return maxDist;
};

export default maxDistance;