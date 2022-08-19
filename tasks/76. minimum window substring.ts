export function minWindow(s: string, t: string): string {
    const tmap = new Map<string, number>();
    const wmap = new Map<string, number>();
    for (let chart of t) {
        tmap.set(chart, (tmap.get(chart) ?? 0) + 1);
        wmap.set(chart, 0);
    }
    const need = Array.from(tmap.values()).reduce((acc, next) => acc + next);
    let have = 0;
    let res = "";
    let resLength = Number.POSITIVE_INFINITY;
    let l = 0;
    let r = 0;    
    while (r < s.length) {
        if (!tmap.has(s[r])) {
            r += 1;
            continue;
        }
        wmap.set(s[r], (wmap.get(s[r]) ?? 0) + 1);
        if (wmap.get(s[r]) === tmap.get(s[r])) {
            have += 1;
        }
        while (have === need) {
            const candidate  = s.slice(l, r + 1);
            if (candidate.length < resLength) {
                res = candidate;
                resLength = res.length;
            }
            if (wmap.has(s[l])) {
                if (wmap.get(s[l]) === tmap.get(s[l])) {
                    have -= 1;
                }
                wmap.set(s[l], (wmap.get(s[l]) ?? 0) - 1); 
            }   
            l += 1;
        }
        r += 1;
    }
    
    return res;
};