/*
 * @lc app=leetcode id=134 lang=typescript
 *
 * [134] Gas Station
 */

import { expect } from "../utils/expect";

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
    var totalGain = 0;
    var maxGain = 0;
    var answer = 0;
    for (var i = 0; i < gas.length; i++) {
        let gain = gas[i] - cost[i];
        if (gain > gain + maxGain) {
            maxGain = gain
            answer = i;
        } else {
            maxGain = gain + maxGain;
        }
        totalGain += gain;
    }
    return totalGain >= 0 ? answer : -1;
};
// @lc code=end

// expect(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]), 3);
// expect(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]), 4);
expect(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]), 3);