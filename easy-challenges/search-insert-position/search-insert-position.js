"use strict";
console.log("Search insert position loaded");
const numsf = [1, 3, 5, 6];
const targetf = 2;
function searchInsert(nums, target) {
    let i = 0;
    let position = 0;
    for (i; i < nums.length; i++) {
        if (nums[i] == target) {
            console.log(i);
            return i;
        }
        if (target > nums[i - 1] && target < nums[i]) {
            position = i;
        }
        if (nums[i + 1] === undefined && target > nums[i]) {
            position = i + 1;
        }
    }
    console.log(position);
    return position;
}
;
searchInsert(numsf, targetf);
/** Solucion optima utilizando busqueda binaria y complejidad O(logn)
 *  let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // target encontrado
        }
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left; // posición donde debería insertarse el target
 */
