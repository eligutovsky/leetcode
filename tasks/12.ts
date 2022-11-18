function intToRoman(num: number): string {
  let result = "";
  const map: { [key: number]: string } = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  for (const [dex, latin] of Object.entries(map).reverse()) {
    if (+dex > num) {
      continue;
    }
    const count = Math.floor(num / +dex);
    result += latin.repeat(count);
    num -= +dex * count;
  }
  return result;
}

intToRoman(1994);
