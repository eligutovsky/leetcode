function searchInsert(nums: number[], target: number): number {
  let l =0;
      let r = nums.length - 1;
      let m = -1;
      while (l <= r) { 
          m = Math.ceil((r-l)/2) +l;
          const v = nums[m];
          if (v === target) { return m}
          else if (v < target) { l = m + 1}
          else { r = m - 1}
   }
      return l ;
  };