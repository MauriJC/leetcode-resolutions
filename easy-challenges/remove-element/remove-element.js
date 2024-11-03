"use strict";
console.log("remove element");
let nums1 = [3, 2, 2, 3];
let val1 = 3;
function removeElement(nums, val) {
    let arrayLength = nums.length;
    for (let i = 0; i < arrayLength; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            i--;
        }
    }
    console.log(nums);
    return nums.length;
}
;
removeElement(nums1, val1);
