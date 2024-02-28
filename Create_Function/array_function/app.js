// create function has array
// cy = current year
// by = birth year

const myArray = [2006];

function guessYear(cy,by){
    return cy - by + " years old";
}

const currentYear = 2024;
const birthYear = myArray[0];

console.log(guessYear(currentYear,birthYear));