/**
 Do not return anything, modify nums in-place instead.
 */
 export function rotate(nums: number[], k: number): void {
  const size = nums.length - 1;
  let low = 0;
  let high = size;
  let mid = size - k;
  while (low <= high) {
      
      high--;
      low++;
  }
};