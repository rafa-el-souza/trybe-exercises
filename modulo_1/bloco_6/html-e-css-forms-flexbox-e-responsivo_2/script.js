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
const lastNameInput = document.querySelector('#last-name-input');
const emailInput = document.querySelector('#email-input');
const telInput = document.querySelector('#tel-input');
const addressInput = document.querySelector('#address-input');
const cityInput = document.querySelector('#city-input');
const stateInput = document.querySelector('#state-input');
const genderInput = getGenderInput();
const abstractInput = document.querySelector('#abstract-input');
const jobInput = document.querySelector('#job-input');
const jobDescriptionInput = document.querySelector('#job-description-input');
const resumeSection = document.querySelector('#resume-section');


document.addEventListener('DOMContentLoaded', function() {
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

startDateInput.addEventListener('change', validateDate);

consolidateButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateDate()) {
        buildResume();
    };
});

const inputsArray = [nameInput, lastNameInput, emailInput, telInput, addressInput, cityInput, abstractInput, jobInput, jobDescriptionInput, startDateInput];
const exampleDataArray = ['Antônio Carlos "Mussum"', "Bernardes Gomes", "h@mail.t", "3199999-9999", "Rua dos Bobos, Número 0. Bairro Milicionários.", "Guerra Híbrida", "Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.", "Originais do Samba", "Cantor e percussionista","13/12/1961"];

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    const resumeSection = document.querySelector('#resume-section');
    while (resumeSection.firstChild) {
        resumeSection.removeChild(resumeSection.firstChild);
    }
    for (let input of inputsArray) {
        input.value = '';
    }   
});

const fillExampleButton = document.querySelector('#fill-example');
fillExampleButton.addEventListener('click', () => {
    for (let index = 0; index < inputsArray.length; index += 1) {
        inputsArray[index].value = exampleDataArray[index];
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelector('.fixed-action-btn');
    M.FloatingActionButton.init(elems, {
        hoverEnabled: true
    });
  });