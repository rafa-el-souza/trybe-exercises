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

// Para os exercícios 2, 3 e 4 considere o seguinte array:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

// const expectedResult = 43;

// function averageAge() {
//   // escreva seu código aqui

// }

// assert.strictEqual(averageAge(), expectedResult);

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult3 = 43;

function averageAge() {
  // escreva seu código aqui
  const ageSum = books.reduce(
    (acc, book) => acc + book.releaseYear - book.author.birthYear, 0);
  return ageSum / books.length;
}

assert.strictEqual(averageAge(), expectedResult3);

// 4 - Encontre o livro com o maior nome.

const expectedResult4 = 'As Crônicas de Gelo e Fogo';

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce(
    (acc, book) => (acc.length > book.name.length ? acc : book.name),
    ''
  );
}

assert.deepStrictEqual(longestNamedBook(), expectedResult4);


// 5 - Dada a array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, name) => acc + name.match(/a|A/g).length, 0);
}

assert.deepStrictEqual(containsA(), 20);

