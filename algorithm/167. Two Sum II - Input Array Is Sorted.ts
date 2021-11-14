export function twoSum(numbers: number[], target: number): number[] {
  function find(arr: number[], x: number, y: number, t: number): number | undefined {
      while (x <= y) {
          let mid = Math.ceil(x + (y - x) / 2);
          let val = arr[mid];
          if (val == t) {
              return mid;
          }
          if (t < val) {
              return find(arr, x, mid - 1, t);
          } else {
              return find(arr, mid + 1, y, t);
          }
      }
      return undefined;
  }
  let low = 0;
  let result = undefined;
  while (low < numbers.length - 1 && result == undefined) {
      let reminder = target - numbers[low];
      result = find(numbers, low + 1, numbers.length - 1, reminder)
      if (result) {
        return [low + 1, result + 1];
      }
      low++;    
  }
  return [-1];
};