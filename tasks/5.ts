import { expect } from "../utils/expect"

function longestPalindrome(s: string): string {
    var res = ""
    
    for (let i = 0; i < s.length; i++ ) {
        // odd
        var l = i;
        var r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > res.length) {
                res = s.substring(l,r + 1);
            }
            l -= 1;
            r += 1;
        }

        l = i;
        r = i + 1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > res.length) {
                res = s.substring(l,r + 1);
            }
            l -= 1;
            r += 1;
        }
    }
   

    return res;
};

expect(longestPalindrome("babad"), "bab");
expect(longestPalindrome("cbbd"), "bb");