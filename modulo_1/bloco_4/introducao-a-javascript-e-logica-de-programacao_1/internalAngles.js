let a = 90;
let b = 60;
let c = 30;

let isValid = true;

if ((a <= 0 || b <= 0 || c <= 0) || (a >= 180 || b >= 180 || c >= 180) || (typeof a != "number" || typeof b != "number" || typeof c != "number")) { //se for menor ou igual a zero, maior que 180 ou não for um tipo número não é válido.
    console.log("error");
    isValid = false;
} else if (isValid) {
    if (a + b + c == 180) {
        console.log(true);
    }   else {
        console.log(false);
    }
}