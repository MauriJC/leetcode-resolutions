console.log("length of last word loaded");

function lengthOfLastWord(s: string): number {

    // Revisar si se puede hacer con split
    if (s === "") return 0;

    s = s.trim();

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == " ") {
            const lastWord = s.slice(i + 1, s.length);
            console.log(lastWord.length)
            return lastWord.length;
        }

        if (i == 0) {
            const lastWord = s.slice(i, s.length);
            return lastWord.length;
        }
    }

    return 0;
};

lengthOfLastWord("   fly me   to   the moon  ")




/** Solucion mejorada con split
 *     const words = s.trim().split(" ");
    const lastWord = words[words.length - 1];
    return lastWord.length;
 */
