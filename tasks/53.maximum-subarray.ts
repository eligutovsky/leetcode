/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

import { expect } from "../utils/expect";

// @lc code=start
function maxSubArray(nums: number[]): number {
    var best = -Infinity;
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i]);
        best = Math.max(sum, best);
    }
    return best;
};
// @lc code=end

expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]),6);
expect(maxSubArray([1]),1);
expect(maxSubArray([5,4,-1,7,8]),23);
expect(maxSubArray([-2,-1]),-1);