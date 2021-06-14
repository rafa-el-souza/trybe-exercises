const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const squared = (number) => number ** 2;

const sumArray = (array) => array.reduce((acc, curr) => acc + curr, 0);

const makeRandomNumbersArray = (length, callBack) => {
  const array = [];
  for (let index = 0; index < length; index += 1) {
    array.push(callBack(generateRandomNumber(1, 50)));
  }
  return array;
};

const makeArrayOfDivisions = (arraySum, ...params) => params.reduce((acc, curr) => {
    acc.push(arraySum * curr);
    return acc;
  }, []);

const myPromise = () => {
  return new Promise((resolve, reject) => {
    const arraySum = sumArray(makeRandomNumbersArray(10, squared));
    if (arraySum < 8000) {
      return resolve(makeArrayOfDivisions(arraySum, 2, 3, 5, 10));
    }
    reject(arraySum);
  })
    .then((arrayOfDivisions) => {
      console.log('Array de divisões: ', arrayOfDivisions);
      return arrayOfDivisions;
    })
    .then((sumOfarrayOfDivisions) => console.log('Array de divisões somado: ', sumArray(sumOfarrayOfDivisions)))
    .catch((arraySum) => console.log('É mais de oito mil! Essa promise deve estar quebrada!', arraySum));
};
myPromise();
