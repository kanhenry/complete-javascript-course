// console.log("test");




// //let, const and var
const language = 'english';
const country = "Canada";
// const continent = "North America";
// const isIsland = false;

let population = 38000000;
// console.log(country);
// console.log(continent);
// console.log(population);



// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// population++;

// console.log(population);
// console.log(population > 6000000);
// console.log(population < 33000000);

// //Strings and Template Literals
// const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;

// console.log(description);

// let belowAvg = 33000000 - population;
// if (population > 33000000) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${belowAvg} below average`);
// };

// Type Conversion and Coercion
/*
1. Predict the result of these 5 operations without executing them:
*/
// '9' - '5'; //number 4
// '19' - '13' + '17'; //617 string
// '19' - '13' + 17; //23 number
// '123' < 57; //  * false
// 5 + 6 + '4' + 9 - 4 - 2; //1149 - 4 - 2 = 1143 number
/*2. Execute the operations to check if you were right*/
// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// Equality Operators: == vs. ===

/*
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours == 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

*/

//////// Coding Challenge #3
/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dScore1 = 96;
const dScore2 = 108;
const dScore3 = 89;

const kScore1 = 88;
const kScore2 = 91;
const kScore3 = 110;

let avgDolphin = (dScore1 + dScore2 + dScore3) / 3;
let avgKoala = (kScore1 + kScore2 + kScore3) / 3;

console.log(avgDolphin, avgKoala);

if (avgDolphin > avgKoala && avgDolphin >= 100) {
    console.log('Dolphins win');
} else if (avgKoala > avgDolphin && avgKoala >= 100) {
    console.log('Koalas win');
} else if (avgKoala === avgDolphin avgKoala >= 100 && avgDolphin >= 100) {
    console.log('Draw');
} else {
    console.log('nobody wins');
}

// The switch Statement

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too');
}

// The Conditional (Ternary) Operator

const relativeAvg = population >= 33000000 ? 'above' : 'below';
console.log(`${country}'s population is ${relativeAvg} average`);
*/

// Coding Challenge #4
const value = 275;
const tip = value >= 50 && value <= 300 ? value * 0.15 : value * 0.20;

console.log(`the bill was ${value}, the tip was ${tip} and the total value ${value + tip}`);

