console.log("Roman to integer loaded");

function romanToInt(s: string): number {

    // Idea: Tengo varios substrings particulares. Como ser:
    /**
     * IV, IX
     * XL XC
     * CD CM
     * De ahi en mas, en todos los casos se realiza la suma
     * 
     * Podria buscar todas estas substrings en la cadena s y guardarlas en un acumulador, e ir haciendo splice de la cadena,
     * luego con lo que me quede de la cadena, voy recorriendolo posicion por posicion y con varios if hacer un acumulador del
     * valor restante 
     */


    // Esta solucion planteada es poco optima, y al modificar el array lo hacemos propenso a problemas de indice
    // y repeticion de valores analizados
    // let rareNumbersAcc: number = 0;
    // let normalNumbersAcc: number = 0;
    // let romanArray: string[] = Array.from(s);

    // for (let i: number = 0; i < s.length; i++) {
    //     if ((romanArray[i] + romanArray[i + 1]) == "IV") {
    //         rareNumbersAcc = rareNumbersAcc + 4;
    //         romanArray.splice(i - 1, i + 1);
    //         i--;
    //     }

    //     if ((romanArray[i] + romanArray[i + 1]) == "IX") {
    //         rareNumbersAcc = rareNumbersAcc + 9;
    //         romanArray.splice(i - 1, i + 1);
    //         i--;
    //     }

    //     if ((romanArray[i] + romanArray[i + 1]) == "XL") {
    //         rareNumbersAcc = rareNumbersAcc + 40;
    //         romanArray.splice(i - 1, i + 1);
    //         i--;
    //     }

    //     if ((romanArray[i] + romanArray[i + 1]) == "XC") {
    //         rareNumbersAcc = rareNumbersAcc + 90;
    //         console.log(romanArray)
    //         romanArray.splice(i - 1, i + 1);
    //         console.log(romanArray)
    //         i--;
    //     }

    //     if ((romanArray[i] + romanArray[i + 1]) == "CD") {
    //         rareNumbersAcc = rareNumbersAcc + 400;
    //         romanArray.splice(i - 1, i + 1);
    //         i--;
    //     }

    //     if ((romanArray[i] + romanArray[i + 1]) == "CM") {
    //         rareNumbersAcc = rareNumbersAcc + 900;
    //         console.log(romanArray)
    //         romanArray.splice(i - 1, i + 1);
    //         console.log(romanArray)
    //         i--;
    //     }

    // }

    // console.log(romanArray)
    // for (let i = 0; i < romanArray.length; i++) {
    //     if (romanArray[i] == "I") {
    //         normalNumbersAcc += 1;
    //     }
    //     if (romanArray[i] == "V") {
    //         normalNumbersAcc += 5;
    //     }
    //     if (romanArray[i] == "X") {
    //         normalNumbersAcc += 10;
    //     }
    //     if (romanArray[i] == "L") {
    //         normalNumbersAcc += 50;
    //     }
    //     if (romanArray[i] == "C") {
    //         normalNumbersAcc += 100;
    //     }
    //     if (romanArray[i] == "D") {
    //         normalNumbersAcc += 500;
    //     }
    //     if (romanArray[i] == "M") {
    //         normalNumbersAcc += 1000;
    //     }
    // }


    // console.log('la suma es', rareNumbersAcc, normalNumbersAcc)
    // return rareNumbersAcc + normalNumbersAcc;

    const values: { [key: string]: number } = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const current = values[s[i]];
        const next = values[s[i + 1]];

        // Si el valor actual es menor que el siguiente, restamos
        if (current < next) {
            total -= current;
        } else {
            // Si no, sumamos
            total += current;
        }
    }

    console.log(total)
    return total;


};

romanToInt('MCMXCIV');