const states = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espirito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso do Sul',
    'Mato Grosso',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
];
const statesInitials = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
]

const startDateInput = document.querySelector('#start-date-input');
const consolidateButton = document.querySelector('#consolidate-button');
const body = document.querySelector('body');

const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const telInput = document.querySelector('#tel-input');
const addressInput = document.querySelector('#address-input');
const cityInput = document.querySelector('#city-input');
const stateInput = document.querySelector('#state-input');
const genderInput = getGenderInput();
const abstractInput = document.querySelector('#abstract-input');
const jobInput = document.querySelector('#job-input');
const jobDescriptionInput = document.querySelector('#job-description-input');
const resumeDiv = document.querySelector('#resume-div');
const inputsArray = [nameInput, startDateInput, emailInput, telInput, addressInput, cityInput, abstractInput, jobInput, jobDescriptionInput];

for (let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    if (states[index] === 'Rio de Janeiro') {
        option.selected = true;
    }
    option.innerHTML = states[index];
    option.value = statesInitials[index];
    stateInput.appendChild(option);
}

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

function getGenderInput() {
    const genderInputs = document.getElementsByName('gender-input');
    for (let index = 0; index < genderInputs.length; index += 1) {
        if (genderInputs[index].checked) {
            const genderInput = genderInputs[index];
            return genderInput;
        }
    }
}

function buildResume() {
    const divPersonalInfo = document.createElement('div');
    divPersonalInfo.id = 'personal-infos';
    resumeDiv.appendChild(divPersonalInfo);

    const name = document.createElement('h1');
    name.innerHTML = `${nameInput.value}`;
    divPersonalInfo.appendChild(name);

    const email = document.createElement('h3');
    email.innerHTML = `${emailInput.value}`;
    divPersonalInfo.appendChild(email);

    const tel = document.createElement('p');
    tel.innerHTML = `${telInput.value}`;
    divPersonalInfo.appendChild(tel);

    const addr = document.createElement('p');
    addr.innerHTML = `${addressInput.value} ${cityInput.value}/${stateInput.value}`;
    divPersonalInfo.appendChild(addr);

    const divProfessionalInfo = document.createElement('div');
    divProfessionalInfo.id = 'professional-infos';
    resumeDiv.appendChild(divProfessionalInfo);

    const job = document.createElement('h4');
    job.innerHTML = `${jobInput.value}`;
    divProfessionalInfo.appendChild(job);

    const jobD = document.createElement('span');
    jobD.innerHTML = `<em>${jobDescriptionInput.value}</em>`;
    divProfessionalInfo.appendChild(jobD);

    const abs = document.createElement('p');
    abs.innerHTML = `${abstractInput.value}`;
    divProfessionalInfo.appendChild(abs);

}

startDateInput.addEventListener('change', validateDate);

consolidateButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateDate()) {
        buildResume();
    };
});

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    const resumeDiv = document.querySelector('#resume-div');
    while (resumeDiv.firstChild) {
        resumeDiv.removeChild(resumeDiv.firstChild);
    }
    for (let input of inputsArray) {
        input.value = '';
    }
});