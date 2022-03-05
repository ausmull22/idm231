var principle = "Austin Mullin";

console.log(principle);

var age = 17;

var drinkingLimit = 21;

if (age > drinkingLimit) {
    console.log("You are old enough");
} else {
    console.log("go to sleep");
}

USE LET OR CONST instead of var 

// use double slashes to comment

put date as strings "7/22"

ES6 String Interpolation - Better for adding spaces in strings



function calculateTipOfBill(total, tipPercentage) {
    // convert the percentage to decimal form
    let percentage = tipPercentage * 0.01; // 20 -> .2
    let tip = total * percentage; // 100 * .2 + 20
    return tip;
}

let totalTip = calculateTipOfBill(100, 20);
console.log(`You should tip $${totalTip}`);

function emailJervo() {
    // write code to email jervo
}

emailJervo();

function printHello() {
    console.log("Hello")
};

printHello = () => {
    // console.log("Hello");
    return "Hello";
};



calculateTipOfBill(50, 30);
calculateTipOfBill(50, 30);

// Arrays

const firstName = "Paul";

const classNames = ["Austin", "Paul", "Paul", "Anuj", "Tony",];

console.log(classNames[0]);

console.log(classNames);


// Objects

const person = {
    firstName : 'Paul',
    lastName : 'Phan',
    email: "paul@mrpaulphan.com"
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);


let sign = "URBN Center"

use single quotes and const



function check_season() {

    // Check Winter Season // view if birthmonth is equal to 12 (Decemebr) or less than or equal to 3 (March)

    if (birthmonth == 12) or (birthmonth >= 3) {

        if (day >= 21) {
            let selected_season = season[3];
            console.log(season)
        }

    } else if (birthmonth >= 3 && birthmonth >= 6) { // Check Spring Month (March)

        if (day >= 20) {
            let selected_season = season[0];
            console.log(season)
        }

    } else if (birthmonth >= 6 && birthmonth <= 9) { // Check Summer Month (June)

        if (day >= 21) {
            let selected_season = season[1];
            console.log(season)
        }

    } else if (birthmonth >=9 && birthmonth <= 12) { // Check Summer Month (June)

        if (day >= 21) {
            let selected_season = season[2];
            console.log(season)
        }
    }

}


// Spring range is from March 22 - June 21
// Summer range is June 22 - September 21
// Fall range is September 22 - December 21
// Winter range is December 22 - March 21
