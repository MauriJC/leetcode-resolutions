console.log("Rotating the box loaded");

function rotateTheBox(box: string[][]): string[][] {

    /**
        Planteamiento del problema:
        # piedra, es afectada por la gravedad
        * no es afectado por la gravedad, mantiene posicion
        . vacio, espacio ocupable por las piedras

        la cantidad de arrays generados sera igual a la longitud del primer array
        La longitud de los arrays generados sera igual a la cantidad de arrays ingresados

        cada posicion del array box[i][j] => traslated = [j][i]

        Una vez tengamos construida la matriz vamos a hacer los movimientos:
        Si [i+1][j]=== "." (vacio) y !== undefined  => [i+1][j] = # y [i][j] = "."

        Sera importante empezar desde la ultima fila de la matriz (el ultimo array)
        para generar los desplazamientos de forma correcta, porque si empezamos desde arriba, 
        tendremos el problema que el desplazamiento podria detenerse al dar con otra piedra

        Actualizacion:
            Se decidio aplicar la gravedad sobre la matriz sin rotar para simplificar entendimiento
            y legibilidad del codigo gracias al manejo de indices mas simples

     */

    const m = box.length;
    const n = box[0].length;

    // Paso 1: Aplicar la gravedad a cada fila
    for (let i = 0; i < m; i++) {
        let empty = n - 1; // Índice de la posición vacía más a la derecha
        for (let j = n - 1; j >= 0; j--) {
            if (box[i][j] === '#') {
                // Mover la piedra al espacio vacío
                box[i][j] = '.';
                box[i][empty] = '#';
                empty--;
            } else if (box[i][j] === '*') {
                // Reiniciar el espacio vacío al encontrar un obstáculo
                empty = j - 1;
            }
        }
    }

    // Paso 2: Rotar la matriz
    const rotated: string[][] = Array.from({ length: n }, () => Array(m).fill('.'));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][m - 1 - i] = box[i][j];
        }
    }

    return rotated;
};