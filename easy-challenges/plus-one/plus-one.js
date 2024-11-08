"use strict";
console.log("Plus one loaded");
function plusOne(digits) {
    let b = true;
    let i = digits.length - 1;
    while (b) {
        if (digits[i] == undefined) {
            digits = [1, ...digits];
            b = false;
            console.log(digits);
            return digits;
        }
        if (digits[i] >= 0 && digits[i] < 9) {
            digits[i]++;
            console.log(digits);
            b = false;
            return digits;
        }
        else {
            digits[i] = 0;
            i--;
        }
    }
    console.log(digits);
    return digits;
}
;
plusOne([9, 9, 9, 9, 9, 1, 9, 9, 9, 9, 9, 9, 9, 9]);
/**
 * Solucion optimizada
 *
 *     for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    
    // Si llegamos aquí, significa que todos los dígitos eran `9`.
    digits.unshift(1);
    return digits;
 *
 */ 
