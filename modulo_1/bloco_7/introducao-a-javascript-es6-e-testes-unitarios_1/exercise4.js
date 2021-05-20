// Crie uma função que receba uma frase e retorne qual a maior palavra.

const maiorPalavra = (string) => string.split(' ').sort((a, b) => b.length - a.length)[0];
console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));

// O método split fraciona a string passada para a função a cada ' ' e retorna um array com estas strings. Este array é ordenado com o método sort através da função de comparação que é passada para ele como parâmetro. No caso, a função compara duas strings baseadas em sua propriedade length, de forma decrescente. Finalmente o primeiro ítem do array é atribuido à variável const maiorPalavra.