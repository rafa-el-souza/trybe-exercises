// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindrome(string) {
    string = string.toLowerCase();

    let comparisonString = "";
    for (let index = 0; index < string.length; index += 1) {
        if (string[index] !== " " && string[index] !== "," && string[index] !== "." && string[index] !== "-") {
            comparisonString += string[index];
        }
    }
    console.log(comparisonString);

    let palindromized = "";
    for (let index = string.length - 1; index >= 0; index -= 1) {
        if (string[index] !== " " && string[index] !== "," && string[index] !== "." && string[index] !== "-") {
            palindromized += string[index];
        }
    }
    console.log(palindromized);

    if (comparisonString === palindromized) {
        console.log("It's a palindrome!")
        return true;
    } else {
        console.log("It's not a palindrome.")
        return false;
    }
}

let string = "Socorram-me, subi no onibus em Marrocos";
let string2 = "desenvolvimento";
isPalindrome(string);
isPalindrome(string2);