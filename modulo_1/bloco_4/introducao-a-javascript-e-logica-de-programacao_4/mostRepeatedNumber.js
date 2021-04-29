// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let test = [2, 3, 2, 5, 8, 2, 3];

function mostRepeatedNumber(array) {
    let mostRepeatedNumber = undefined;
    //let indexComparison = 0;
    let countFirst = 1;
    for (let indexComparison = 0; indexComparison < array.length) {

    }
    for (let index = 1; index < array.length; index += 1) {
        if (array[index] === array[indexComparison]) {
            countFirst += 1;
        }
    }
    console.log(countFirst);
}

mostRepeatedNumber(test);