function threeSum(nums: number[]): number[][] {

    /*
    Tengo que encontrar todas las combinaciones de triplas cuya suma de igual a 0
    Teniendo en cuenta las condiciones:
        1. No puede ser el mismo elemento, es decir, diferente indice si o si

        Se me ocurre hacerlo con 3 ciclos for, que recorran con los diferentes indices,
        pero el tiempo de ejecucion daria O(n^3), que es una locura
        No se como hacer una solucion que no demore tanto. Se menciona que la longitud maxima del array 
        sera de 3000, por lo que hacer una solucion con esa complejidad es inviable.

     */



    let result: number[][] = [];

    // 1. Ordenamos el array
    nums.sort((a, b) => a - b);

    // 2. Iteramos el array
    for (let i = 0; i < nums.length - 2; i++) {
        // Evitar duplicados
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Saltamos duplicados en `left` y `right`
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Movemos los punteros después de encontrar una solución
                left++;
                right--;
            } else if (sum < 0) {
                left++;  // Incrementamos `left` para aumentar la suma
            } else {
                right--; // Decrementamos `right` para disminuir la suma
            }
        }
    }

    return result;




};