"use strict";
console.log("module loaded");
const resultDiv = document.getElementById("result");
function sortNumbers() {
    const inputValue = document.getElementById("numberInput").value;
    //console.log("mostrando el valor ingresado", inputValue);
    const numbers = inputValue.split(',');
    const sortedNumbers = numbers.sort((a, b) => a - b);
    //console.log("sorted numbers", sortedNumbers);
    resultDiv === null || resultDiv === void 0 ? void 0 : resultDiv.textContent = sortedNumbers;
    return sortedNumbers;
}
