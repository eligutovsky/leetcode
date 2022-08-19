const map: {[key: number]: string[]} = {
  1: [''],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  0: [' ']
};

function letterCombinations(digits: string): string[] {
  if (!digits.length) {
    return [];
  }
  
  const result: string[] = [];
  const dfs = (index: number, current: string, digits: string) => {
    if (index === digits.length) {
      result.push(current);
      return;
    }
    const letters = map[+digits[index]];
    for (let i = 0; i < letters.length; i++) {
      dfs(index + 1, current + letters[i], digits);
    }
  }
  dfs(0, '', digits);
  return result;
};

console.log(letterCombinations('23'));