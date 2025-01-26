"use strict";
console.log("zigzag conversion loaded");
function convert(s, numRows) {
    /**
        numRows-2: cantidad de
     */
    if (numRows === 1)
        return s; // Si solo hay una fila, no hay zigzag
    // Crear una matriz de numRows filas
    const rows = Array.from({ length: numRows }, () => []);
    let currentRow = 0;
    let goingDown = false;
    // Recorrer el string y llenar la matriz
    for (let i = 0; i < s.length; i++) {
        rows[currentRow].push(s[i]);
        // Si estamos en la primera o última fila, cambiamos la dirección
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        // Moverse hacia arriba o hacia abajo
        currentRow += goingDown ? 1 : -1;
    }
    // Leer las filas y unirlas para formar la respuesta
    console.log(rows.flat().join(''));
    return rows.flat().join('');
}
;
convert("PAYPALISHIRING", 3);
