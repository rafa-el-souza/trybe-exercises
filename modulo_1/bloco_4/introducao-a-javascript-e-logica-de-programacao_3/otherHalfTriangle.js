// n = 5

//     *    n - 1 " " + index "*"
//    **
//   ***
//  ****
// *****
//          (n - index) * " " + index * "*"

let n = 5;
let space = "";
let asterisc = "";
let hash = "";

for (let index = 1; index <= n; index += 1) {
    space = " ".repeat(n - index);
    asterisc = "*".repeat(index);
    console.log(space + asterisc); 
}
