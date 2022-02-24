let date; // User's birthdate 
let birthmonth;  // User's birth month 
let day;  // User's day of the month 
let sign; // Array of Zodiacs
let selected_sign; // Selected zodiac sign 
let image;


// Array of zodiac sign 
const sign_type =  ['aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'leo', 
'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn'];

// Grab date input:

function getdate() {
    let date = new Date(document.getElementById("input").value);

    let birthmonth = date.getMonth() + 1;  // Grabbing User's birth month (Adding +1 because value starts at 0) 

    let day = date.getDate() + 1; // Grabbing User's birth day of the month (Adding +1 because value starts at 0) 

    console.log(date) // view date on console log
    console.log(birthmonth) // view birth month on console log
    console.log(day) // view day on console log
}



function switch_to_zodiac() { // Close the Input Screen and Display and Zodiac Description 
    document.querySelector(".input_screen").style.display ="none";
    document.querySelector(".zodiac_description").style.display ="inline";
}

function switch_to_input() { // Close the Zodiac Description and Display and Input Screen 
    document.querySelector(".input_screen").style.display ="inline";
    document.querySelector(".zodiac_description").style.display ="none";
}


function zodiac_transition() {

    document.querySelector(".input_screen").style.animation ="fade-out 0.5s";

    setTimeout(switch_to_zodiac, 500);

}

// Functions that activate animations


function zodiac_exit() {

    document.querySelector(".zodiac_description").style.animationName="slide_down"; // display exit animation for zodiac description

    setTimeout(switch_to_input, 500); // Once exit animation is over for the zodiac description, prepare to switch to splash screen.

}

