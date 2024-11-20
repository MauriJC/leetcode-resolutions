console.log("digits sum");


function digitsSum(num: number): number {

    // Caso base: si el número es 0, su suma de dígitos es 0.
    if (num === 0) {
        return 0;
    }

    // Paso recursivo: sumar el último dígito (n % 10) al resultado de la suma de los dígitos del resto del número (Math.floor(n / 10)).
    return (num % 10) + digitsSum(Math.floor(num / 10));
}