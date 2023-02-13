import { exit } from "node:process";
import { expect } from "../utils/expect";

function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    
    var i = s.length;
    while (i--) {
        if (t.indexOf(t[i]) !== s.indexOf(s[i])) return false
    }
    return true
};

expect(isIsomorphic("paper", "title"), true)
expect(isIsomorphic("egg", "add"), true)
expect(isIsomorphic("foo", "bar"), false)
expect(isIsomorphic("badc", "baba"), false)

exit();
