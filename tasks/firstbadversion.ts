/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

 var solution = function(isBadVersion: any) {

  return function(n: number): number {
      let left = 1;
      let right = n;
      let lkbv = -1;
      let check = 0;
      while (left <= right) {
         check = Math.ceil(( right-left)/2) + left;
         if (isBadVersion(check)) { 
             lkbv = check;
            right = check - 1;
         }else { 
            left = check + 1;
         }
      }
      return lkbv;
  };
};