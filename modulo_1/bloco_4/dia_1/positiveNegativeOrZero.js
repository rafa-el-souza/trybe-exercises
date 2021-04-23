let a = 0;

positiveNegativeOrZero(a);

a = 10;

positiveNegativeOrZero(a);

a = -15;

positiveNegativeOrZero(a);

function positiveNegativeOrZero(a) {
    if (a > 0) {
        console.log("positive");
    } else if (a < 0) {
        console.log("negative");
    } else {
        console.log("zero");
    }    
}