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

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// //const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';

// console.log(friends);

// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];

// console.log(jonas);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge1(years[0]));

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
// friends.push('Jay');
// const newLength = friends.push('Jay');

// console.log(friends);
// console.log(newLength);

// friends.unshift('John');

// // Remove elements
// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends.indexOf('Steven'));

// object literal syntax
const henry = {
    firstName: 'Henry',
    lastName: 'Kan',
    birthYear: 1998,
    job: 'UX Designer',
    friends: ['Leo', 'Jesse', 'Nathan'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        console.log(`${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license `);
    }
};

//dot notation
// console.log(henry.firstName);
// console.log(henry['firstName']);

// const nameKey = 'Name';

// //bracket notation
// console.log(henry['first' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// console.log(interestedIn);

// console.log(henry[interestedIn]);

// if (henry[interestedIn]) {
//     console.log(henry[interestedIn]);
// } else {
//     console.log('property does not exist. Choose between firstName, lastName, age, job, and friends');
// }

// henry.location = 'Toronto';
// henry['instagram'] = '@kan.kapo';

// // challenge
// // "Henry has 3 friends, and his best friend is called "Leo"

// console.log(`${henry.firstName} has ${henry.friends.length} friends, and his best friend is ${henry.friends[0]}`);

// console.log(henry.calcAge());
// console.log(henry.age);
// console.log(henry.age);
// console.log(henry.age);
// // console.log(henry['calcAge'](henry.birthYear));

// henry.getSummary()

const henryArray = [
    'Henry',
    'Kan',
    1998,
    'UX Designer',
    true
];

const types = [];

for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repitition ${i}`);
}

for (let i = 0; i < henryArray.length; i++) {
    // types[i] = typeof henryArray[i];
    types.push(typeof henryArray[i]);
}

console.log(types);

let x = 1;
while (x <= 10) {
    console.log(x);
    x++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
