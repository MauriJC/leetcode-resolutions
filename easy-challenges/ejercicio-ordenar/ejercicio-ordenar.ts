console.log("module loaded")

const resultDiv = document.getElementById("result");


function sortNumbers(): number[] {

    const inputValue: string | = document.getElementById("numberInput").value;

    //console.log("mostrando el valor ingresado", inputValue);

    const numbers = inputValue.split(',');

    const sortedNumbers = numbers.sort((a, b) => a - b);

    //console.log("sorted numbers", sortedNumbers);

    resultDiv?.textContent = sortedNumbers;

    return sortedNumbers;

}



