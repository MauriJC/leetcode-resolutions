"use strict";
console.log("Add binary loaded");
function addBinary(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";
    // Recorremos ambos strings de derecha a izquierda
    while (i >= 0 || j >= 0 || carry > 0) {
        // Si i o j son negativos, usamos 0 para ese dígito
        const digitA = i >= 0 ? Number(a[i]) : 0;
        const digitB = j >= 0 ? Number(b[j]) : 0;
        // Suma de los dígitos y el carry
        const sum = digitA + digitB + carry;
        // El dígito actual es la suma módulo 2 (0 o 1 en binario)
        result = (sum % 2) + result;
        // Actualizamos carry para la siguiente posición
        carry = Math.floor(sum / 2);
        // Avanzamos hacia la izquierda en cada cadena
        i--;
        j--;
    }
    console.log(result);
    return result;
}
;
addBinary("10", "10101");
