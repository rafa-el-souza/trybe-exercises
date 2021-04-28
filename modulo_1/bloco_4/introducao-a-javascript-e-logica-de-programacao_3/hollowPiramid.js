// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let n = 13;

if (n % 2 === 0) {
    console.log("'n' must be an odd number");
}

let spaceLeft = "";
let spaceRight = "";
let asteriscLeft = "";
let asteriscRight = "";
let numberOfLines = (n + 1) / 2;

for (let index = 1; index <= n; index += 2) {
    spaceLeft = " ".repeat(n - numberOfLines);
    numberOfLines += 1;
    if (index === 1 || index === n) {
        asteriscLeft = "*".repeat(index);
    }   else {
        asteriscLeft = "*".repeat(1);
        spaceRight = " ".repeat(n - numberOfLines);
        asteriscRight = "*".repeat(1);
    }
    console.log(spaceLeft + asteriscLeft + spaceRight + asteriscRight);  
}
