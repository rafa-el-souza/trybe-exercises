// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let test = [2, 4, 6, -20, 10, 0, -3, 12, -15];

function indexOfLowerValue(array) {
    let lowerValue = undefined;
    let lowerValueIndex = 0;
    for (let index = 1; index < array.length; index += 1) {
        if (array[lowerValueIndex] > array[index]) {
            lowerValue = array[index];
            lowerValueIndex = index;
        }
    }
    console.log(`The lower value is ${lowerValue}, and it's index is ${lowerValueIndex}.`);
    return lowerValueIndex;
}

indexOfLowerValue(test);