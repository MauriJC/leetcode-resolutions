console.log("First index")

const haystack = "mississippi";
const needle = "issip";
let posit = 0

function strStr(haystack: string, needle: string): number {

    let counter = 0;

    // Si `needle` está vacío, devuelve 0, según el problema en LeetCode
    if (needle === "") return 0;

    for (let i = 0; i < haystack.length; i++) {
        // Si el carácter actual coincide con el primer carácter de `needle`
        if (haystack[i] === needle[counter]) {
            counter++; // Aumenta el contador
            // Si `counter` es igual a la longitud de `needle`, significa que encontramos `needle`
            if (counter === needle.length) {
                const startPos = i - counter + 1;
                console.log("Posición encontrada:", startPos);
                return startPos;
            }
        } else {
            // Reinicia `counter` y ajusta `i` para revisar desde el próximo carácter después de la primera coincidencia
            i = i - counter;
            counter = 0;
        }
    }

    // Si `needle` no está en `haystack`
    return -1;
};

strStr(haystack, needle);