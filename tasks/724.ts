import { expect } from '../utils/expect';

function pivotIndex(nums: number[]): number {
    const sum = nums.reduce((acc, next) => acc + next, 0);
    let leftsum = 0;
    for (let i=0; i < nums.length; i++) {
        if (leftsum == sum - leftsum - nums[i]) {
            return i;
        }
        leftsum += nums[i];
    }
    return -1;
};

expect(pivotIndex([1,2,3]), -1)
expect(pivotIndex([1,7,3,6,5,6]), 3)
expect(pivotIndex([-1,-1,-1,-1,-1,0]), 2)
expect(pivotIndex([2,1,-1]), 0)