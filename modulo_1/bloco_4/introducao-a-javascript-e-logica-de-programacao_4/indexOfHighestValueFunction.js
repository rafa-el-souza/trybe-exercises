// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let test = [2, 3, 6, 7, 10, 1, 20];

function indexOfHighestValue(array) {
    let highestValue = undefined;
    let highestValueIndex = 0;
    for (let index = 1; index < array.length; index += 1) {
        if (array[highestValueIndex] < array[index]) {
            highestValue = array[index];
            highestValueIndex = index;
        }
    }
    console.log(`The highest value is ${highestValue}, and it's index is ${highestValueIndex}.`);
    return highestValueIndex;
}

indexOfHighestValue(test);