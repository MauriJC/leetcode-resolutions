"use strict";
let first = 121;
function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    let inversed = 0;
    let rest = x;
    do {
        inversed = inversed * 10 + (rest % 10);
        rest = Math.floor(rest / 10);
        console.log("calculating inversed", inversed);
    } while (rest > 0);
    if (inversed == x) {
        console.log(inversed, x);
        return true;
    }
    return false;
}
;
isPalindrome(first);
