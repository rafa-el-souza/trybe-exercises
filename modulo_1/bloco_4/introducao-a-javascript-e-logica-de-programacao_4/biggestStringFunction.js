// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let test = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Super Mouse'];

function biggestString(array) {
    let biggestString = "";
    let biggestStringIndex = 0;
    for (let index in array) {
        if (array[biggestStringIndex].length < array[index].length) {
            biggestString = array[index];
            biggestStringIndex = index;
        }
    }
    console.log(`The biggest string is ${biggestString}, and it's index is ${biggestStringIndex}.`);
    return biggestString;
}

biggestString(test);