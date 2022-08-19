
function isMirror(value: string): boolean {
  let low = 0;
  let high = value.length - 1;
  while (low < high) {
    if (value[low] == value[high]) {
      low++;
      high--;
    } else {
      return false;
    }
  }
  return true;
}

function kMirror(k: number, n: number): number {
  let acc = [];
  let current = 1;
  while (acc.length < n) {
    const kString = current.toString(k);
    const tenString = current.toString(10);
    if (isMirror(kString) && isMirror(tenString)) {
      acc.push(current);
      console.log('found mirror', kString, tenString, acc.length);
    }
    current++;
  }
  return acc.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  }, 0)
};

export default kMirror;