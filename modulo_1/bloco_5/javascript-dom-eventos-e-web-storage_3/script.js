function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidays = [24, 25, 31];
const fridays = [4, 11, 18, 25];

const ulDays = document.querySelector('#days');
const buttonsContainer = document.querySelector('.buttons-container');

function monthBuilder() {
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let li = document.createElement('li');
        li.className = 'day';
        for (let index2 = 0; index2 < holidays.length; index2 += 1) {
            if (holidays[index2] === dezDaysList[index]) {
                li.classList.add('holiday');
            }
        }
        for (let index3 = 0; index3 < fridays.length; index3 += 1) {
            if (fridays[index3] === dezDaysList[index]) {
                li.classList.add('friday');
                // console.log(dezDaysList[index]);
            }
        }
        li.innerHTML = dezDaysList[index];
        ulDays.appendChild(li);
    }
}

monthBuilder();

function createHolidayButton(string) {
    let button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerHTML = string;
    buttonsContainer.appendChild(button);
}

createHolidayButton('Feriados');

let holiday = document.getElementsByClassName('holiday');
let clickedHoliday = false;
function highlightHolidays() {
    clickedHoliday = !clickedHoliday;
    if (clickedHoliday) {
        for (let index = 0; index < holiday.length; index += 1) {
            holiday[index].style.backgroundColor = 'green';
        };
    } else {
        for (let index = 0; index < holiday.length; index += 1) {
            holiday[index].style.backgroundColor = '#eee';
        };
    }
}

document.querySelector('#btn-holiday').addEventListener('click', highlightHolidays);

function createFridayButton(string) {
let button = document.createElement('button');
button.id = 'btn-friday';
button.innerHTML = string;
buttonsContainer.appendChild(button);
}

createFridayButton('Sexta-feira');

let friday = document.getElementsByClassName('friday');
let clickedFriday = false;
function highlightFridays() {
    clickedFriday = !clickedFriday;
    if (clickedFriday) {
        for (let index = 0; index < friday.length; index += 1) {
            friday[index].innerHTML = 'SEXTOU!';
        };
    } else {
        for (let index = 0; index < fridays.length; index += 1) {
            friday[index].innerHTML = fridays[index];
        }
    }
}

document.querySelector('#btn-friday').addEventListener('click', highlightFridays);

function zoomIn(event) {
    event.target.style.fontSize = '40px';
}

function zoomOut(event) {
    event.target.style.fontSize = '20px';
}

let liDay = document.querySelectorAll('.day');
for (let index = 0; index < liDay.length; index += 1) {
    liDay[index].addEventListener('mouseover', zoomIn);
    liDay[index].addEventListener('mouseout', zoomOut);
}

let myTasks = document.querySelector('.my-tasks');
function createTask(string) {
    let task = document.createElement('span');
    task.innerHTML = string;
    myTasks.appendChild(task);
}

createTask('Cozinhar');

function taskColor(colorString) {
    let colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = colorString;
    colorDiv.className = 'task-selected';
    myTasks.appendChild(colorDiv);
}

taskColor('aquamarine');

let taskSelected = false;
function toggleTask(event) {
    taskSelected = !taskSelected;
    if (taskSelected) {
        event.target.classList.add('task-selected');
        event.target.classList.remove('task');
    } else {
        event.target.classList.add('task');
        event.target.classList.remove('task-selected');
    }
};

document.querySelector('.task, .task-selected').addEventListener('click', toggleTask);

function selectDayForTask(event) {
    event.target.style.color = document.querySelector('.task-selected').style.backgroundColor; // it breaks if there is no element with class task-selected and backgroundColor style property
}

for (let index = 0; index < liDay.length; index += 1) {
    liDay[index].addEventListener('click', selectDayForTask);
}