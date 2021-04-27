// n = 5

//   *      (n - 3) * " " +   
//  ***     (n - 1) * " " +
// *****    (n - 0) * " " +

let n = 150;
let space = "";
let asterisc = "";
let numberOfLines = (n + 1) / 2;

for (let index = 1; index <= n; index += 2) {
    space = " ".repeat(n - numberOfLines);
    numberOfLines += 1;
    asterisc = "*".repeat(index);
    console.log(space + asterisc); 
}
