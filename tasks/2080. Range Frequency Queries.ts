class RangeFreqQuery {

  map: Map<number, number[]> = new Map();
  constructor(arr: number[]) {
    for (const [i, value] of arr.entries()) {
      if (!this.map.has(value)) {
        this.map.set(value, []);
      }
      this.map.get(value).push(i);
    }
  }

  query(left: number, right: number, value: number): number {
    if (!this.map.has(value)) return 0;
    const list = this.map.get(value);
    // [12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]
    var lower = 0;
    var bigest = 0;
    var low = 0;
    var high = list.length - 1;
    
    if (list[low] > right) return 0;

    while (low < high) {
      var mid = Math.ceil((high + low) / 2);
      const mvalue = list[mid];
      if (mvalue > right) high = mid - 1;
      else low = mid;
    }
    bigest = low;
    
    low = 0
    high = -1 + list.length
    if (list[low] >= left) {
      return 1 + bigest;
    }
    while (low < high) {
      var mid = Math.ceil((high + low) / 2);
      const mvalue = list[mid];
      if (mvalue < left) low = mid;
      else high = mid - 1;
    }
    lower = low;
    return bigest - lower;
  }
}

/**
* Your RangeFreqQuery object will be instantiated and called as such:
* var obj = new RangeFreqQuery(arr)
* var param_1 = obj.query(left,right,value)
*/

export default RangeFreqQuery;