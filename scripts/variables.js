let date; // User's birthdate 
let birthmonth;  // User's birth month 
let day;  // User's day of the month 
let sign; // Array of Zodiacs
let selected_sign // Selected zodiac sign 
let image


// Array of zodiac sign 
const sign_type =  ['aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'leo', 
'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn']

// Grab date input:

function getdate() {
    let date = new Date(document.getElementById("input").value);

    let birthmonth = date.getMonth() + 1;  // Grabbing User's birth month (Adding +1 because value starts at 0) 

    let day = date.getDate() + 1; // Grabbing User's birth day of the month (Adding +1 because value starts at 0) 

    console.log(date)
    console.log(birthmonth)
    console.log(day)
    

}

function switch_to_zodiac() { // Grabbing User's birth day of the month (Adding +1 because value starts at 0) 
    document.querySelector(".input_screen").style.display ="none";
    document.querySelector(".zodiac_description").style.display ="inline";


}
