import assert from "assert"

function runningSum(nums: number[]): number[] {
    return nums.reduce((acc, curr) => {
        const prev = acc[acc.length - 1] || 0
        acc.push(curr + prev)
        return acc
    }, Array<number>())
};

console.log(runningSum([1,2,3,4]))