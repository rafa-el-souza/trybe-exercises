// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.

// 1 - Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  // Array.concat(): const newArray = array1.concat(array2); 
  return arrays.reduce((acc, array) => acc.concat(array), []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
