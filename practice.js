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