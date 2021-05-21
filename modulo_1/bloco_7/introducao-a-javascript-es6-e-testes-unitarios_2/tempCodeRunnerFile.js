let studentsCounter = 0;
const mathStudentsCounter = (object) => {
    if (object.lesson1.materia == 'Matemática') {
        studentsCounter += object.lesson1.numeroEstudantes;
    } else if (object.lesson2.materia == 'Matemática') {
        studentsCounter += object.lesson2.numeroEstudantes;
    } else if (object.lesson3.materia == 'Matemática') {
        studentsCounter += object.lesson3.numeroEstudantes;
    }
    return studentsCounter;
};
console.log(mathStudentsCounter(allLessons));