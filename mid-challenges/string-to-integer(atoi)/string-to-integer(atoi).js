"use strict";
console.log("atoi loaded");
function myAtoi(s) {
    const isDigit = (char) => /^[0-9]$/.test(char);
    /*
    1. quitar los espacios de los costados
    2. Buscar signo -, si no se encuentra sera positivo
    3. Quitar signo - y guardarlo en una variable, para saber que es
    4. Recorrer string hasta encontrar un simbolo que no sea numerico o se llegue al final
    5. Hacer la conversion con parseInt, y multiplicar por la variable que guarda el signo
     */
    if (s == "")
        return 0;
    let sWithoutSpaces = s.trim();
    let sign = 1; // 1 sera positivo y -1 negativo 
    let i = 0;
    let result = "";
    if (sWithoutSpaces[0] === "-") {
        sign = -1;
        i++;
    }
    else if (sWithoutSpaces[0] === "+") {
        i++;
    }
    for (i; i < sWithoutSpaces.length; i++) {
        if (isDigit(sWithoutSpaces[i])) {
            result = result + sWithoutSpaces[i];
        }
        else {
            break;
        }
    }
    let number = parseInt(result) || 0; // Si no hay dígitos válidos, devuelve 0
    number *= sign;
    // 6. Asegurar que el número está dentro del rango de un entero de 32 bits
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;
    if (number < INT_MIN)
        return INT_MIN;
    if (number > INT_MAX)
        return INT_MAX;
    return number;
}
;
