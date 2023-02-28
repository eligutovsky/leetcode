import { expect } from "../utils/expect";

function isHappy(n: number): boolean {
  const produced = new Set<number>();

  const splitNumber = (n: number): number[] => {
    const res = [];
    while (n > 0) {
      res.push(n % 10);
      n = Math.floor(n / 10);
    }
    return res;
  };

  let tmp = n;

  while (tmp != 1) {
    const nums = splitNumber(tmp);
    tmp = nums.reduce((acc, n) => acc + n * n, 0);
    if (produced.has(tmp)) {
      return false;
    }
    produced.add(tmp);
  }

  return true;
}

expect(isHappy(19), true);
expect(isHappy(2), false);
