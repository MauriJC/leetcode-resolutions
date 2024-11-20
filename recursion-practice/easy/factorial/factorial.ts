console.log("A numbers factorial");

const factorial = (num: number): number => {

    if (num === 0 || num === 1) return 1;

    let factor = factorial(num - 1) * num; // 1 * 2 * 3 * 4

    console.log("el factorial es", factor);
    return factor;
}


factorial(4);