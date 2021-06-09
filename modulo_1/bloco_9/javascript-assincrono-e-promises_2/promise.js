const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const squared = (number) => number ** 2;

const sumArray = (array) => array.reduce((acc, curr) => acc + curr, 0);

const makeRandomNumbersArray = (length, callBack) => {
  const array = [];
  for (let index = 0; index < length; index += 1) {
    array.push(callBack(generateRandomNumber(1, 50)));
  }
  return array;
};

const myPromise = () => {
  return new Promise((resolve, reject) => {
    const arraySum = sumArray(makeRandomNumbersArray(10, squared));
    if (arraySum < 8000) {
      return resolve(arraySum);
    }
    reject(arraySum);
  })
  .then((arraySum) => console.log('Deal!', arraySum))
  .catch((arraySum) => console.log('No deal', arraySum));
}  
myPromise();