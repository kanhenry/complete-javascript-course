'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio'; // reserved word

/*
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples & ${oranges} oranges`;
    return juice;
}

fruitProcessor(5, 2);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// fnc declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;;
}

calcAge1(1998);

// fnc expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// arrow fnc
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1990);

console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1990, 'Bob'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples & ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return -1;
    }
}

console.log(yearsUntilRetirement(1970, 'Jonas'));

*/

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Jay';

console.log(friends);

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);

function calcAge1(birthYear) {
    return 2037 - birthYear;;
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge1(years));
