import { expect } from "../utils/expect";

/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
class TriNode {
    value: string;
    count: number = 0;
    ancestors: TriNode[];
    constructor(value: string, ancestors: TriNode[]) {
        this.value = value;
        this.ancestors = ancestors;
    }
    append(value: string): void {
        var head: TriNode = this;
        if (value === "") {
            const node = new TriNode(value, []);
            head.ancestors = [...head.ancestors, node];
            head.count += 1;
        }
        for (let char of [...value]) {
            let node = head.ancestors.filter(a => a.value == char).at(0);
            if (node) {
                head = node;
            } else {
                const node = new TriNode(char, []);
                head.ancestors = [...head.ancestors, node];
                head = node;
            }
            head.count += 1;
        }
    }
    common(max: number): string {
        var head: TriNode = this;
        var result = ""
        while (head.ancestors.length === 1 && head.ancestors[0].count === max) {
            head = head.ancestors.at(0)
            result += head.value;
        }
        return result;
    }
}

function longestCommonPrefix(strs: string[]): string {
    const root = new TriNode("", []);
    root.count = strs.length;
    for (let str of strs ) {
        root.append(str);
    }
    return root.common(root.count);
};
// @lc code=end

expect(longestCommonPrefix(["flower","flow","flight"]), "fl");
expect(longestCommonPrefix(["","b"]), "");
expect(longestCommonPrefix(["ab", "a"]), "a");