function lengthOfLongestSubstring(s: string): number {
    let substring: string = "";
    let maxLenght: number = 0;
    if (s.length == 0) return 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (!substring.includes(s[j])) {
                substring = substring + s[j];
                if (substring.length >= maxLenght) maxLenght = substring.length;
            } else {
                substring = "";
                break;
            }
        }
    }

    console.log(maxLenght);
    return maxLenght;
};

lengthOfLongestSubstring("pwwkew");


/**
 * Solucion optima
 * 
 * function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;        // Longitud máxima encontrada
    let start = 0;            // Inicio de la ventana
    const seen = new Set();   // Conjunto para caracteres en la ventana

    for (let end = 0; end < s.length; end++) { // Recorremos con el puntero `end`
        while (seen.has(s[end])) {             // Si encontramos duplicado
            seen.delete(s[start]);            // Quitamos el carácter al inicio
            start++;                          // Contraemos la ventana
        }
        seen.add(s[end]);                     // Agregamos el nuevo carácter
        maxLength = Math.max(maxLength, end - start + 1); // Actualizamos el máximo
    }

    return maxLength;
}

 * 
 */