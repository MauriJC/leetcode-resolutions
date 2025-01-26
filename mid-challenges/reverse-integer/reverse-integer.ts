console.log("Reverse integer loaded");

function reverse(x: number): number {
    // No se si vale utilizar algo tan simple como esto XD
    // la cosa es que cumple
    const isNegative = x < 0;
    const reversedStr = Math.abs(x).toString().split("").reverse().join("");

    const reversedNum = parseInt(reversedStr, 10);

    if (reversedNum > 2 ** 31 - 1) {
        return 0;
    }

    return isNegative ? -reversedNum : reversedNum;
};