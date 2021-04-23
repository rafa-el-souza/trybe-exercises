let salarioBruto = 3000;
let aliquotaInss = undefined;
let descontoINSS = undefined;
let aliquotaIr = undefined;
let descontoIr = undefined;
let salarioBase = undefined;
let salarioLiquido = undefined;

console.log("Salário bruto: R$" + salarioBruto);

switch (true) {
    case (salarioBruto < 1556.94):
        aliquotaInss = 0.08;
        descontoINSS = salarioBruto * aliquotaInss;
        break;
    case (salarioBruto >= 1556.95 && salarioBruto <= 2594.92):
        aliquotaInss = 0.09;
        descontoINSS = salarioBruto * aliquotaInss;
        break;
    case (salarioBruto >= 2594.93 && salarioBruto <= 5189.82):
        aliquotaInss = 0.11;
        descontoINSS = salarioBruto * aliquotaInss;
        break;
    case (salarioBruto > 5189.82):
        aliquotaInss = "máxima";
        descontoINSS = 570.88;
}

console.log("Alíquota INSS = " + aliquotaInss + "%");
console.log("Desconto INSS = R$" + descontoINSS + "\n");

salarioBase = salarioBruto - descontoINSS;

console.log("Salário-base = R$" + salarioBase + "\n");

switch (true) {
    case (salarioBase < 1903.98):
        aliquotaIr = "isento";
        descontoIR = 0;
        break;
    case (salarioBase >= 1903.99 && salarioBase <= 2826.65):
        aliquotaIr = 0.075;
        descontoIr = (salarioBase * aliquotaIr) - 142.8;
        break;
    case (salarioBase >= 2826.66 && salarioBase <= 3751.05):
        aliquotaIr = 0.15;
        descontoIr = (salarioBase * aliquotaIr) - 354.8;
        break;
    case (salarioBase >= 3751.06 && salarioBase <= 4664.68):
        aliquotaIr = 0.225;
        descontoIr = (salarioBase * aliquotaIr) - 636.13;
    case (salarioBase > 4664.68):
        aliquotaIr = 0.275;
        descontoIr = (salarioBase * aliquotaIr) - 869.36;
}

console.log("Alíquota IR = " + aliquotaIr + "%");
console.log("Desconto IR = R$" + descontoIr + "\n");

salarioLiquido = salarioBase - descontoIr;

console.log("Salário líquido = R$" + salarioLiquido);