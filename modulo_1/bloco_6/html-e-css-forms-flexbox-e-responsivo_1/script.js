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

for (let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    option.innerHTML = states[index];
    option.value = statesInitials[index];
    stateInput.appendChild(option);
}

startDateInput.addEventListener('change', () => {
    const regexDate = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[012])\/(1\d\d\d|2\d\d\d)$/;
    const startDateString = startDateInput.value;
    if (regexDate.test(startDateString)) {
        console.log(startDateString);
        return startDateString;
    } else {
        console.log('Formato de data inválido');
        alert('Formato de data inválido');
        return 'Formato inválido';
    }
});