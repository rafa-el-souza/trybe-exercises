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
const stateInput = document.querySelector('#state-input');
const startDateInput = document.querySelector('#start-date-input');
const consolidateButton = document.querySelector('#consolidate-button');
const body = document.querySelector('body');

for (let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
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
    const div = document.createElement('div');
    div.id = 'resume-div';
    body.appendChild(div);
    const resumeDiv = document.querySelector('#resume-div');

    const nameInput = document.querySelector('#name-input');
    const emailInput = document.querySelector('#email-input');
    const cpfInput = document.querySelector('#cpf-input');
    const addressInput = document.querySelector('#address-input');
    const cityInput = document.querySelector('#city-input');
    const stateValue = document.querySelector('#state-input');
    const genderInput = getGenderInput();
    const abstractInput = document.querySelector('#abstract-input');
    const jobInput = document.querySelector('#job-input');
    const jobDescriptionInput = document.querySelector('#job-description-input');

    const divPersonalInfo = document.createElement('div');
    divPersonalInfo.id = 'personal-infos';
    resumeDiv.appendChild(divPersonalInfo);

    const h1 = document.createElement('h1');
    h1.innerHTML = `<em>${nameInput.value}</em>`;
    divPersonalInfo.appendChild(h1);

    const p = document.createElement('h3');
    p.innerHTML = `${emailInput.value}`;
    divPersonalInfo.appendChild(p);

    const divProfessionalInfo = document.createElement('div');
    divProfessionalInfo.id = 'professional-infos';
    divProfessionalInfo.innerHTML = 'divProfessionalInfo';
    resumeDiv.appendChild(divProfessionalInfo);

}

startDateInput.addEventListener('change', validateDate);

consolidateButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateDate()) {
        buildResume();
    };
});