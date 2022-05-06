// Coding Challenge 2

function calcTip(tipAmount) {
    if (50 <= tipAmount <= 300) {
        return tipAmount * 0.15;
    } else {
        return tipAmount * 0.20;
    }
}

// console.log(calcTip(100));

// const bills = new Array(125, 555, 44);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(totals);

// Coding Challenge 3

// const john = {
//     fullName: 'John Smith',
//     mass: 78,
//     height: 169,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 92,
//     height: 195,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is greater than ${mark.fullName}'s BMI (${mark.calcBMI()})`);
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is greater than ${john.fullName}'s BMI (${john.calcBMI()})`);
// }

// Coding Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = [];
const totals = [];

for (i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}


function calcAvg(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

console.log(calcAvg(totals));