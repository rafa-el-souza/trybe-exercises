const max = 6*10**23;
const min = 0;

let a = Math.floor(Math.random() * (max - min) ) + min; //Math.random() retorna um número pseudo aleatório de 0 a 1 (não inclusivo) que pode ser dimensionado, no caso para um número entre as constantes max e min.
let b = Math.floor(Math.random() * (max - min) ) + min; //https://www.w3schools.com/js/js_random.asp
let c = Math.floor(Math.random() * (max - min) ) + min;

console.log("a = " + a + "\nb = " + b + "\nc = " + c);

if(a >= b && a >= c) {
    console.log(a);
}
else if (b >= a && b >= c) {
    console.log(b);
}
else {
    console.log(c);
}