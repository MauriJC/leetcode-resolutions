"use strict";
console.log("search-value-in-array");
function searchValue(value, numArray) {
    if (numArray.length == 0)
        return false;
    if (value == numArray[0])
        return true;
    return searchValue(value, numArray.splice(1, numArray.length - 1));
}
//Solucion optimizada
/**
 * function searchValue(value: number, numArray: number[], index: number = 0): boolean {
    // Caso base: si hemos recorrido todo el array, no se encontró el valor.
    if (index >= numArray.length) return false;

    // Caso base: si encontramos el valor en el índice actual.
    if (numArray[index] === value) return true;

    // Llamada recursiva: avanzar al siguiente índice.
    return searchValue(value, numArray, index + 1);
}

 */ 
