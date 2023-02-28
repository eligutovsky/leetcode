import { expect } from "../utils/expect";

function largestPalindromic(num: string): string {
  let result = [];
  const set = new Set<string>();
  const map = [...num].reduce((acc, value) => {
    const n = value;
    if (set.has(n)) {
      set.delete(n);
    } else {
      set.add(n);
    }
    acc[n] = (acc[n] ?? 0) + 1;
    return acc;
  }, {});

  if (set.size > 0) {
    result.push([...set].sort((a, b) => b.localeCompare(a))[0]);
  }
  const keys = Object.keys(map);
  for (const key of keys) {
    let odd = false;
    if (set.has(key)) odd = true;
    let repeat = (odd ? map[key] - (map[key] % 2) : map[key]) / 2;
    while (repeat > 0) {
      result.push(key);
      result.unshift(key);
      repeat--;
    }
  }
  while (result.length > 1 && +result.at(0) === 0) {
    result.pop();
    result.shift();
  }
  return result.length === 0 ? "0" : result.join("");
}

expect(largestPalindromic("444947137"), "7449447");
expect(largestPalindromic("00009"), "9");
expect(largestPalindromic("1100009"), "1009001");
expect(largestPalindromic("00001105"), "1005001");
expect(largestPalindromic("00000"), "0");
expect(largestPalindromic("0000"), "0");
