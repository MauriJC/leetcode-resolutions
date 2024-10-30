console.log("remove duplicates from sorted array");



function removeDuplicates(nums: number[]): number {
    // k es la cantidad de elementos sin repetir en nums, es lo que retornamos como resultado de esta funcion
    // Hay que modificar nums para eliminar los repetidos y agregar guiones bajos por cada numero repetido al final del array
    // el array nums debe ser modificado por operaciones que lo muten
    /**
     * Ejemplo:
     * nums = [1,1,2] ||  Output: 2 (este es k), nums = [1,2,_] (Este es el array modificado poniendo los guiones al final)
     */

    // My trash tier solution

    let k: number = 0; // Elements not duplicated
    let repetitionsCounter: number = 0;
    let nonRepeated: number[] = [];
    //let repeated: number[] = [];
    const limitLenght: number = nums.length;

    let terror: null[] = [null, null];

    for (let i = -100; i < 101; i++) {
        repetitionsCounter = 0;
        for (let j = 0; j < limitLenght; j++) {
            if (repetitionsCounter == 0 && nums[j] == i) {
                repetitionsCounter = 1;
                nonRepeated.push(i);
                continue;
            }
            if (repetitionsCounter > 0 && nums[j] == i) {
                repetitionsCounter++;
                nums.splice(j, 1);
                j--;
            }
        }
    }

    k = nonRepeated.length;
    return k;


    // Godtier solution
    // if (nums.length === 0) return 0;

    // let k = 1;

    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] !== nums[i - 1]) {
    //         nums[k] = nums[i];
    //         k++;
    //     }
    // }

    // nums.splice(k, nums.length);
    // return k;
};


removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])