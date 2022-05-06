//Challenge 1
let heightMark;
let heightJohn;

let massMark;
let massJohn;

let bmiMark = massMark / (heightMark ** 2);
let bmiJohn = massJohn / (heightJohn ** 2);

let markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark})`);
}  