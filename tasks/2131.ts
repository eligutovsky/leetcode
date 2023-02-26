import { expect } from "../utils/expect";

const swapStr = (s: string): string => {
  const arr = s.split("");
  let count = arr.length;
  var popped = arr.pop();
  while (count > 1) {
    arr.unshift(popped);
    count--;
  }
  return arr.join("");
};

function longestPalindrome(words: string[]): number {
  const wordLength = 2;
  let count = 0;
  const map = new Map<string, number>();
  const set = new Set<string>();
  words.forEach((word) => {
    const target = swapStr(word);
    const seenT = map.get(target) ?? 0;
    const seenW = map.get(word) ?? 0;
    const isWordPalindrome = target == word;
    if (seenT > 0) {
      map.set(target, seenT - 1);
      count += wordLength * 2;
      if (isWordPalindrome) {
        set.delete(word);
      }
    } else {
      map.set(word, seenW + 1);
      if (isWordPalindrome) {
        set.add(word);
      }
    }
  });
  return set.size > 0 ? count + wordLength : count;
}

expect(longestPalindrome(["lc", "cl", "gg"]), 6);
expect(longestPalindrome(["bb", "bb"]), 4);
expect(longestPalindrome(["lc", "cl", "gg", "gg", "gg"]), 10);
expect(longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"]), 8);
expect(longestPalindrome(["aa"]), 2);
expect(longestPalindrome(["bd"]), 0);
expect(
  longestPalindrome([
    "aa", // 1 p1+
    "aa", // 1 p1-
    "aa", // p1+
    "bb", // 2 p2+
    "bb", // 2 p2-
    "bb", // p2+
    "dd", // 3
    "dd", // 3
    "dd", // 4
    "dd", // 4
    "dd", // 5 p3+
    "cc", // 6
    "cc", // 6
    "cc", // 7 p4+
  ]),
  22
);

expect(
  longestPalindrome([
    "fo", // 1
    "fo", // 2
    "fq", // 3
    "ff", // p1+
    "of", // 1
    "of", // 2
    "of",
    "of",
    "of",
    "oo", // p2+
    "qq", // p3+
    "qf", // 3
    "qf",
    "qf",
    "qf",
    "qo",
  ]),
  14
);
