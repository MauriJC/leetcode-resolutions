"use strict";
function getRow(rowIndex) {
    function generate(numRows) {
        if (numRows == 1)
            return [[1]];
        if (numRows == 2)
            return [[1], [1, 1]];
        let result = [[1], [1, 1]];
        for (let i = 2; i < numRows; i++) {
            result[i] = [];
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    result[i][j] = 1;
                }
                else {
                    result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
                }
            }
        }
        return result;
    }
    ;
    let pascalTriangle = generate(rowIndex + 1);
    return pascalTriangle[rowIndex];
}
;
