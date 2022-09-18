import assert from "assert";

function lastStoneWeight(stones: number[]): number {
  while (1 < stones.length) {
      stones.sort((a, b) => a - b);
      const diff = stones.pop()! - stones.pop()!;
      if (0 < diff) {
          stones.push(diff);
      }
  }
  return stones.pop() || 0
};

assert(lastStoneWeight([2,7,4,1,8,1]) == 1);