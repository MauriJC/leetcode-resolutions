console.log("pascals triangle loaded");


function generate(numRows: number): number[][] {

    if (numRows == 1) return [[1]];
    if (numRows == 2) return [[1], [1, 1]];

    let result: number[][] = [[1], [1, 1]];


    console.log("Generating triangle");

    for (let i: number = 2; i < numRows; i++) {
        result[i] = [];
        for (let j: number = 0; j <= i; j++) {

            if (j === 0 || j === i) {

                result[i][j] = 1;

            } else {

                result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
            }

        }
    }

    console.log('mostrando result', result);
    return result;
};

generate(3);