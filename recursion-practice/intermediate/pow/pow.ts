console.log("POW");

function power(num: number, pow: number): number {

    if (pow == 0) return 1;

    return power(num, pow - 1) * num;
}