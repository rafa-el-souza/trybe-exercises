const consolidateButton = document.querySelector('#consolidate-button');
const clearButton = document.querySelector('#clear-button');
const fillExampleButton = document.querySelector('#fill-example');
const body = document.querySelector('body');
const nameInput = document.querySelector('#name-input');
const lastNameInput = document.querySelector('#last-name-input');
const emailInput = document.querySelector('#email-input');
const telInput = document.querySelector('#tel-input');
const addressInput = document.querySelector('#address-input');
const cityInput = document.querySelector('#city-input');
const stateInput = document.querySelector('#state-input');
const genderInput = getGenderInput();
const startDateInput = document.querySelector('#start-date-input');
const abstractInput = document.querySelector('#abstract-input');
const jobInput = document.querySelector('#job-input');
const jobDescriptionInput = document.querySelector('#job-description-input');
const resumeSection = document.querySelector('#resume-section');
const inputsArray = [nameInput, lastNameInput, emailInput, telInput, addressInput, cityInput, abstractInput, jobInput, jobDescriptionInput, startDateInput];

//Valida valor do input de data através de expressão regular
function validateDate() {
    const regexDate = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[012])\/(1\d\d\d|2\d\d\d)$/;
    const startDateString = startDateInput.value;
    if (regexDate.test(startDateString)) {
        return startDateString;
    } else {
        console.log('Formato de data inválido');
        alert('Formato de data inválido');
        return false;
    }
}

//Retorna o elemento radio button com classe checked
function getGenderInput() {
    const genderInputs = document.getElementsByName('gender-input');
    for (let index = 0; index < genderInputs.length; index += 1) {
        if (genderInputs[index].checked) {
            const genderInput = genderInputs[index];
            return genderInput;
        }
    }
}

//Constrói currículo com dados do formulário e popula #resume-container
function buildResume() {
    const divPersonalInfo = document.createElement('div');
    divPersonalInfo.id = 'personal-infos';
    resumeSection.appendChild(divPersonalInfo);

    const name = document.createElement('h2');
    name.innerHTML = `${nameInput.value} ${lastNameInput.value}`;
    divPersonalInfo.appendChild(name);
    
    const email = document.createElement('h3');
    email.innerHTML = `${emailInput.value}`;
    divPersonalInfo.appendChild(email);

    const tel = document.createElement('p');
    tel.innerHTML = `<em>${telInput.value}</em>`;
    tel.classList.add('flow-text')
    divPersonalInfo.appendChild(tel);

    const addr = document.createElement('p');
    addr.innerHTML = `${addressInput.value} ${cityInput.value}/${stateInput.value}`;
    divPersonalInfo.appendChild(addr);

    const divProfessionalInfo = document.createElement('div');
    divProfessionalInfo.id = 'professional-infos';
    resumeSection.appendChild(divProfessionalInfo);

    const job = document.createElement('h4');
    job.innerHTML = `${jobInput.value}`;
    divProfessionalInfo.appendChild(job);

    const jobD = document.createElement('span');
    jobD.innerHTML = `<em>${jobDescriptionInput.value}</em>`;
    divProfessionalInfo.appendChild(jobD);

    const abs = document.createElement('p');
    abs.innerHTML = `${abstractInput.value}`;
    // abs.classList.add('flow-text')
    divProfessionalInfo.appendChild(abs);
}

// Input Select | Inicializa elemento select conforme Materialize Docs
document.addEventListener('DOMContentLoaded', function() {
    // Popula elemento select com options dos arrays acima
    for (let index = 0; index < states.length; index += 1) {
        const option = document.createElement('option');
        if (states[index] === 'Rio de Janeiro') {
            option.selected = true;
        }
        option.innerHTML = states[index];
        option.value = statesInitials[index];
        stateInput.appendChild(option);
    }
    M.FormSelect.init(stateInput);
});

// Botão Action | Inicializa botão 'action button' conforme Materialize Docs
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelector('.fixed-action-btn');
    M.FloatingActionButton.init(elems, {
        hoverEnabled: true
    });
  });

// Realiza validação de data quando o valor do input de data mudar
startDateInput.addEventListener('change', validateDate);

// Botão consolidar | Constrói currículo quando botão consolidar é pressionado, se data for válida
consolidateButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateDate()) {
        buildResume();
    };
});

// Botão limpar | Limpa todos os inputs e currículos
clearButton.addEventListener('click', () => {
    const resumeSection = document.querySelector('#resume-section');
    while (resumeSection.firstChild) {
        resumeSection.removeChild(resumeSection.firstChild);
    }
    for (let input of inputsArray) {
        input.value = '';
    }   
});

// Botão preencher | Seta valores de todos os inputs conforme dados em exampleDataArray (arrays.js)
fillExampleButton.addEventListener('click', () => {
    for (let index = 0; index < inputsArray.length; index += 1) {
        inputsArray[index].value = exampleDataArray[index];
    }
});