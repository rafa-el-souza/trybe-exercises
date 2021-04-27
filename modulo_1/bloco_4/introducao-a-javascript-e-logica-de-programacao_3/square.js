let n = 10;
let line = "";

for (let indexCol = 1; indexCol <= n; indexCol += 1) {
    for (let indexRow = 1; indexRow <= n; indexRow += 1) {
        line += "*";
    }
    console.log(line);
    line = "";
}