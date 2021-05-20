// 1.Crie uma função que receba um número e retorne seu fatorial.
//      Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
//      Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fatorial = (num) => (num === 1 || num === 0) ? 1 : num * fatorial(num - 1);
console.log(fatorial(10));

// Sucessivas chamadas são feitas à função fatorial, cada uma subtraindo em 1 o valor do número, até que a condição do operador ternário se torna verdadeira, gerando o primeiro retorno "definido" igual a 1. A partir daí, este retorno resolve a chamada de função anterior, gerando sucessivos retornos, até que finalmente o último retorno é atribuido à variável const fatorial.