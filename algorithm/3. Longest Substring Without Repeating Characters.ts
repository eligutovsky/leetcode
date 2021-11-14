export function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  const map = new Map<string, number>();
  let low = 0;
  let high = 0;
  while (high < s.length) {
    const value = s[high];
    let prev = map[value];
    if (prev != undefined) {
      low = Math.max(prev + 1, low);
    }
    map[value] = high;
    high++;
    max = Math.max(max, high - low); 
  }
  return max;
};