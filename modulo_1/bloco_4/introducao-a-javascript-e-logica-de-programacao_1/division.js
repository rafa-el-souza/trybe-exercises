const max = 6*10**23;
const min = 0;

let a = Math.floor(Math.random() * (max - min) ) + min; //Math.random() retorna um número pseudo aleatório de 0 a 1 (não inclusivo) que pode ser dimensionado. No caso para um número entre as constantes max e min.
let b = Math.floor(Math.random() * (max - min) ) + min; //https://www.w3schools.com/js/js_random.asp

console.log("a = " + a + "\nb = " + b);

let division = a / b;

console.log(division);