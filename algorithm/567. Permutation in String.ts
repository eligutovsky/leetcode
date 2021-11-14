export function checkInclusion(s1: string, s2: string): boolean {
  const a1 = Array.from(s1).sort((a,b) =>  (a > b ? 1 : -1));
  const a2 = Array.from(s2).sort((a,b) =>  (a > b ? 1 : -1));

  for (let i = 0; i < a1.length; i++) {
    const v1 = a1[i];
    for (let j = i; j < a2.length; j++) {
      const v2 = a2[j];
      if (v1 == v2) {
        break;
      }
      continue;
    }
    
  }

  return true;
};