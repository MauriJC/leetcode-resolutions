"use strict";
console.log("sumatoria cargada");
function sumatoria(num) {
    if (num === 0)
        return 0;
    let suma = sumatoria(num - 1) + num;
    return suma;
}
sumatoria(5);
