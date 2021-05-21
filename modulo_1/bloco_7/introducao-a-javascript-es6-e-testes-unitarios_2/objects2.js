/* 
3. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
4. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
5. Crie uma função para mostrar o tamanho de um objeto.
6. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
7. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: 
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
8. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
9. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
10. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
*/

const lesson1 = {
materia: 'Matemática',
numeroEstudantes: 20,
professor: 'Maria Clara',
turno: 'manhã',
};

const lesson2 = {
materia: 'História',
numeroEstudantes: 20,
professor: 'Carlos',
};

const lesson3 = {
materia: 'Matemática',
numeroEstudantes: 10,
professor: 'Maria Clara',
turno: 'noite',
};

//3.
const addMorningShift = (object, key, value) => object[key] = value;
addMorningShift(lesson2, 'turno', 'manhã');
console.log(lesson2);

//4.
const showKeys = (object) => `This object's keys are ${Object.keys(object)}.`;
console.log(showKeys(lesson2));

//5.
const showLength = (object) => `This object has ${Object.keys(object).length} entries.`;
console.log(showLength(lesson2));

//6.
const showValues = (object) => `This object's values are ${Object.values(object)}.`;
console.log(showValues(lesson2));

//7.
const allLessons = Object.assign({lesson1, lesson2, lesson3});
console.log(allLessons);

//8. 
const studentsTotal = (object) => `O total de estudantes em todas as aulas é ${object.lesson1.numeroEstudantes + object.lesson2.numeroEstudantes + object.lesson3.numeroEstudantes}.`;
console.log(studentsTotal(allLessons));

//9. 
const getValueByPosition = (object, position) => Object.values(object)[position];
console.log(getValueByPosition(lesson1, 0));

//10. 
const verifyPair = (object, key, value) => {
    for (let index = 0; index < Object.values(object).length; index += 1) {
        if (Object.values(object)[index] == value && Object.keys(object)[index] == key) {
            return true;
        }
    }
    return false;
};
console.log(Object.entries(lesson2));
console.log(verifyPair(lesson2, 'numeroEstudantes', '20'));

/* 
Bonus:
    11. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
    12. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: 
    console.log(createReport(allLessons, 'Maria Clara'))
    {
    professor: 'Maria Clara',
    aulas: [ 'Matemática', 'Matemática' ],
    estudantes: 30
    } 
*/

//11.
const mathStudentsCounter = (object) => {
    let studentsCounter = 0;
    if (object.lesson1.materia === 'Matemática') {
        studentsCounter += object.lesson1.numeroEstudantes;
    } 
    if (object.lesson2.materia == 'Matemática') {
        studentsCounter += object.lesson2.numeroEstudantes;
    } 
    if (object.lesson3.materia === 'Matemática') {
        studentsCounter += object.lesson3.numeroEstudantes;
    }
    return studentsCounter;
};
console.log(mathStudentsCounter(allLessons));