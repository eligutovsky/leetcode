import { expect } from "../utils/expect";

let map = {};

function climbStairs(n: number): number {
    if (n === 0 || n === 1){
        map[n] = n;
        return 1;
    }
    if (n < 0) {
        return 0;
    }
    if (map[n]) {
        return map[n];
    }
    map[n] = climbStairs(n - 1) + climbStairs(n - 2)
    return map[n];
};


expect(climbStairs(2), 2);
expect(climbStairs(3), 3);
expect(climbStairs(44), 1134903170);
