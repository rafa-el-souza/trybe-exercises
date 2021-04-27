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
let asterisc = "";
let numberOfLines = (n + 1) / 2;

for (let index = 1; index <= n; index += 2) {
    spaceLeft = " ".repeat(n - numberOfLines);
    spaceRight = " ".repeat(n - numberOfLines);
    numberOfLines += 1;
    if (index === 1 || index === n) {
        asterisc = "*".repeat(index);
    }   else {
        asterisc = "*".repeat(1);
    }
    console.log(spaceLeft + asterisc);  
}
