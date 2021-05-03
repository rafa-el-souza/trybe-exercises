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
                console.log(dezDaysList[index]);
            }
        }
        li.innerHTML = dezDaysList[index];
        ulDays.appendChild(li);
    }
  }

  monthBuilder();

  function createButton(string) {
    let button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerHTML = string;
    buttonsContainer.appendChild(button);
  }

  createButton('Feriados');