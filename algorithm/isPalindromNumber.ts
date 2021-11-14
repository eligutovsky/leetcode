function isPalindrome(x: number) {
  // 121
  if (x < 0 || x % 10 == 0 && x != 0) {
    return false;
  }
  let rn = 0;
  while (x > rn) {
    rn = rn * 10 + (x % 10);
    x /= 10;
  }
  // console.log(x);
  // console.log(rn);
  return rn;
}

console.log(isPalindrome(121));
