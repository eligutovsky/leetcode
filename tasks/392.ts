import { expect } from "../utils/expect";

function isSubsequence(s: string, t: string): boolean {
  const sLength = s.length;
  const tLength = t.length;
  if (sLength > tLength) return false;
  let sIndex = 0;
  let tIndex = 0;
  while (sIndex < sLength && tIndex < tLength) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    tIndex++;
  }
  return sLength === sIndex;
}

expect(isSubsequence("abc", "ahbgdc"), true);
expect(isSubsequence("axc", "ahbgdc"), false);
