function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
      return false;
  }
  const map: Map<string, number> = new Map();
  for (const char of s1) {
      map.set(char, map.get(char) + 1 || 1);
  }
  let start: number = 0;
  let lettersToContain = map.size;
  for (let end = 0; end < s2.length; end++) {
      const char = s2[end];
      if (map.has(char)) {
          map.set(char, map.get(char) - 1);
          if (map.get(char) === 0) {
              lettersToContain--;
          }
      }
      if (end - start + 1 === s1.length) {
          if (lettersToContain === 0) {
              return true;
          }
          const startChar = s2[start++];
          if (map.has(startChar)) {
              map.set(startChar, map.get(startChar) + 1);
              if (map.get(startChar) === 1) {
                  lettersToContain++;
              }
          }
      }
  }
  return false;
  // T.C: O(M + N), M = length of s1, N = length of s2
  // S.C: O(M)
};