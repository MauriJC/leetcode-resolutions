console.log("sumatoria cargada");

function sumatoria(num: number): number {

    if (num === 0) return 0;

    let suma = sumatoria(num - 1) + num;

    return suma;
}

sumatoria(5);