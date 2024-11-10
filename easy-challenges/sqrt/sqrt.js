"use strict";
function mySqrt(x) {
    let counter = -1;
    let lastPow = 0;
    while (lastPow < x) {
        if (x == 0) {
            return 0;
        }
        counter++;
        lastPow = counter * counter;
        console.log("counter iterador", counter);
        if (lastPow > x) {
            counter--;
        }
    }
    console.log("Valor de raiz cuadrada", counter);
    return counter;
}
;
mySqrt(1473634757);
/**Solucion optima con busqueda binaria
 *  if (x < 2) return x;  // Los casos 0 y 1 son triviales

    let left = 1;
    let right = Math.floor(x / 2);  // La raíz cuadrada de x siempre es <= x / 2 para x >= 2

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let square = mid * mid;

        if (square === x) {
            return mid;  // Encontramos la raíz cuadrada exacta
        } else if (square < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Si no encontramos una raíz exacta, `right` contendrá el valor truncado de la raíz cuadrada
    return right;
 */ 
