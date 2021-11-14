export function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let index = Math.ceil((right - left)/ 2) + left;
        const value = nums[index];
        if (value === target) {
            return index;
        } 
        if (value < target) {
            left = index + 1;
        } else if (value > target) {
            right = index - 1;
        }
    }
    return -1;
};