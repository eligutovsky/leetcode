export function search(nums: number[], target: number): number {
  let k = 0;
  let previous = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] < previous) {
          k = i;
          break;
      }
      previous = nums[i];
  }
  function rotate(start: number, end: number) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start += 1;
      end -= 1;
  }
  }
  if (k > 0) {
      rotate(0, k - 1);
      rotate(k, nums.length - 1);
      rotate(0, nums.length - 1);
  }
  
  let min = 0;
  let max = nums.length - 1;
  let mid = Math.ceil((max - min) / 2);
  let targetIndex = -1;
  while (min < mid && mid < max) {
      mid = Math.ceil((max - min) / 2);
      if (nums[mid] === target) {
          targetIndex = mid;
      } else if (nums[mid] < target) {
          min = mid + 1;
      } else {
          max = mid - 1;
      }
  }

  return targetIndex == -1 ? -1 : (k + targetIndex) % nums.length;
};