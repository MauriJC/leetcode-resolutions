"use strict";
console.log("POW");
function power(num, pow) {
    if (pow == 0)
        return 1;
    return power(num, pow - 1) * num;
}
