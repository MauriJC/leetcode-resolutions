"use strict";
console.log("two Sum");
const array1 = [2, 7, 11, 15];
const target1 = 9;
function twoSum(nums, target) {
    let answer = [];
    nums.forEach((num, index) => {
        for (let i = index + 1; i < nums.length; i++) {
            if ((num + nums[i]) == target) {
                console.log(num, nums[i]);
                answer = [index, i];
                return answer;
            }
        }
    });
    return answer;
}
;
twoSum(array1, target1);
