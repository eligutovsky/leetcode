function sortedSquares(nums: number[]): number[] {
    let size = nums.length - 1;
  let acc = Array.from(nums);
  let ai = size;
  let l = 0;
  let r = size;
  while (l <= r) {
      const lv2 = nums[l] * nums[l];
      const rv2 = nums[r] * nums[r];
      if (lv2 <= rv2)  {
        acc[ai--] = rv2;
        r--;
      } else {
        acc[ai--] = lv2;
        l++;
      }
  }
  return acc;
};

export default sortedSquares;