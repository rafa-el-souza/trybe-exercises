// Crie uma página que contenha:
//  - Um botão ao qual será associado um event listener ;
//  - Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
//  - Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
const countMeButton = document.querySelector('#button');
const counterDisplay = document.querySelector('#counter-display');
let counter = 0;
countMeButton.addEventListener('click', () => {
    counter += 1;
    counterDisplay.innerHTML = counter;
});