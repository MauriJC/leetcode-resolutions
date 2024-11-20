console.log("string inversion");

function invert(word: string): string {

    if (word.length <= 0) return word;

    return invert(word.substring(1)) + word[0];
}
