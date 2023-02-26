import { expect } from "../utils/expect";

function longestPalindrome(s: string): number {
  const sorted = s.split("").sort(); // abccccdd
  const set = new Set<string>();
  let count = 0;
  for (let i = 0; i < sorted.length; i++) {
    const char = sorted[i];
    if (set.has(char)) {
      set.delete(char);
      count += 2;
    } else {
      set.add(char);
    }
  }
  return set.size > 0 ? ++count : count;
}

expect(longestPalindrome("abccccdd"), 7);
expect(longestPalindrome("abcccccdd"), 7);
expect(longestPalindrome("aa"), 2);
