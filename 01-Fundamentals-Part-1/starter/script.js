/*
let js = 'amazing';

// console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';


// true;
// console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES';

console.log(javascriptIsFun);

let year;

console.log(year);


let age = 30;
age = 31;

const birthYear = 1991;
var job = 'programmer';
job = 'teacher';


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to power of 3

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
console.log(x);
x += 10; // x = x + 10
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x);
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSara, averageAge);
*/

//Coding Challenge #1
/* Mark and John are trying to compare their BMI(Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height)(mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
m tall.


let heightMark;
let heightJohn;
let massMark;
let massJohn;




heightMark = 1.69;
heightJohn = 1.95;
massMark = 78;
massJohn = 92;

let BMI_Mark = massMark / (heightMark ** 2);
let BMI_John = massJohn / (heightJohn ** 2);
let markHigherBMI = BMI_Mark > BMI_John;

console.log(BMI_Mark, BMI_John, markHigherBMI);

heightMark = 1.88;
heightJohn = 1.76;
massMark = 95;
massJohn = 85;

BMI_Mark = massMark / (heightMark ** 2);
BMI_John = massJohn / (heightJohn ** 2);
markHigherBMI = BMI_Mark > BMI_John;
console.log(BMI_Mark, BMI_John, markHigherBMI);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonasNew);

console.log(`regular string`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 😊');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/


// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �


let heightMark;
let heightJohn;
let massMark;
let massJohn;

heightMark = 1.69;
heightJohn = 1.95;
massMark = 78;
massJohn = 92;

let BMI_Mark = massMark / (heightMark ** 2);
let BMI_John = massJohn / (heightJohn ** 2);
let markHigherBMI = BMI_Mark > BMI_John;

console.log(BMI_Mark, BMI_John, markHigherBMI);

if (BMI_Mark > BMI_John) {
    console.log(`Mark's BMI (${BMI_Mark}) is higher than John's (${BMI_John})`);
} else {
    console.log(`John's BMI (${BMI_John}) is higher than Mark's (${BMI_Mark})`);
};

// type conversion
const inputYear = '1991'
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

// type coercion
console.log('I am ' + 23 + ' years old');

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(NaN));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('height is defined');
} else {
    console.log('height is not defined');
}

const age = 18;
if (age === 18) console.log('you just became an adult');

const favourite = Number(prompt("What's your favourite number?"));

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
}

if (favourite !== 23) {
    console.log("Why not 23?");
}


const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense && !hasGoodVision)

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive');
} else {
    console.log('someone else should drive...');
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
    case 'friday':
        console.log('Record videos');
    case 'saturday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}

if (23 > 10) {
    const str = '23 is bigger';
} 

*/


const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(`I like to drink ${drink}`);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}