// const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.querySelector('#jokeContainer');

const showJoke = ({ joke }) => {
  jokeContainer.innerHTML = joke;
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(response => showJoke(response));
};

window.onload = () => fetchJoke();
