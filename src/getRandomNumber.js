const getRandomNumber = (min = 1, max = 30) => min + (Math.floor(Math.random() * (max - min + 1)));

export default getRandomNumber;
