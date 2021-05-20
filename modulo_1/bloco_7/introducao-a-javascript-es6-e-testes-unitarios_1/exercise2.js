//  1.Faça uma função que retorne o array oddsAndEvens em ordem crescente.
//    - Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() .
//  2.Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
//   
//  Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a-b);

console.log(oddsAndEvens);