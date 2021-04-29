// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

function printWelcomeFromObject(object) {
    console.log(`Bem-vinda, ${object["personagem"]}`);
}

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

printWelcomeFromObject(info);

// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info.recorrente = "Sim";
console.log(info);

// Faça um for/in que mostre todas as chaves do objeto.

function printKeysFromObject(object) {
  for (let key in object) {
    console.log(key);
  }
}

printKeysFromObject(info);

// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

function printValuesFromObject(object) {
  for (let key in object) {
    console.log(object[key])
  }
}

printValuesFromObject(info);

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info2 = {
  personagem : "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: "Sim"
}

function printValuesFromObjects(object1, object2) {
      console.log(`${object1["personagem"]} e ${object2["personagem"]}`);
      console.log(`${object1["origem"]} e ${object2["origem"]}`);
      console.log(`${object1["nota"]} e ${object2["nota"]}`);
      if (object1["recorrente"] === object2["recorrente"]) {
        console.log("Ambos recorrentes");
      }
}

printValuesFromObjects(info, info2);