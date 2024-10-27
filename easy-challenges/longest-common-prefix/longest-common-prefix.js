"use strict";
console.log("longest");
function longestCommonPrefix(strs) {
    let commonPrefix = strs[0];
    let aux = '';
    if (strs.includes(''))
        return '';
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] == commonPrefix[j]) {
                aux += (strs[i][j]);
            }
            else {
                commonPrefix = aux;
                aux = '';
                break;
            }
            if (j == (strs[i].length - 1)) {
                commonPrefix = aux;
                aux = '';
            }
        }
    }
    console.log(commonPrefix);
    return commonPrefix;
}
;
longestCommonPrefix(["car", "cir"]);
/**
 *  solucion optima
 *
 * function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return ""; // Si el array está vacío, no hay prefijo común.

    let commonPrefix = strs[0]; // Toma el primer string como prefijo inicial.

    for (let i = 1; i < strs.length; i++) {
        // Mientras el prefijo común no sea el prefijo de strs[i], recorta el prefijo.
        while (!strs[i].startsWith(commonPrefix)) {
            commonPrefix = commonPrefix.slice(0, -1); // Reduce el prefijo en una letra.
            if (commonPrefix === "") return ""; // Si el prefijo se vuelve vacío, no hay prefijo común.
        }
    }

    return commonPrefix;
}

console.log(longestCommonPrefix(["car", "cir"])); // Output: "c"

 */ 
