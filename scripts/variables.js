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


// Change Navigation Images


// Image Switch to cereal

image_tracker ='f';

function image_switch() {
    if (image_tracker=='f') {
        document.getElementById("aries").src = "images/symbols/brand/aries.png"; 
        document.getElementById("taurus").src = "images/symbols/brand/taurus.png"; 
        document.getElementById("gemini").src = "images/symbols/brand/gemini.png"; 
        document.getElementById("cancer").src = "images/symbols/brand/cancer.png"; 
        document.getElementById("leo").src = "images/symbols/brand/leo.png"; 
        document.getElementById("virgo").src = "images/symbols/brand/virgo.png"; 
        document.getElementById("libra").src = "images/symbols/brand/libra.png"; 
        document.getElementById("scorpio").src = "images/symbols/brand/scorpio.png"; 
        document.getElementById("sagittarius").src = "images/symbols/brand/sagittarius.png"; 
        document.getElementById("capricorn").src = "images/symbols/brand/capricorn.png"; 
        document.getElementById("aquarius").src = "images/symbols/brand/aquarius.png"; 
        document.getElementById("pisces").src = "images/symbols/brand/pisces.png"; 
        image_tracker = 't';
    } else {
        document.getElementById("aries").src = "images/symbols/brand/luckycharms.png"; 
        document.getElementById("taurus").src = "images/symbols/brand/trix.png"; 
        document.getElementById("gemini").src = "images/symbols/brand/raisinbran.png"; 
        document.getElementById("cancer").src = "images/symbols/brand/frostedflake.png"; 
        document.getElementById("leo").src = "images/symbols/brand/life.png"; 
        document.getElementById("virgo").src = "images/symbols/brand/alphabits.png"; 
        document.getElementById("libra").src = "images/symbols/brand/applejacks.png"; 
        document.getElementById("scorpio").src = "images/symbols/brand/cornflakes.png"; 
        document.getElementById("sagittarius").src = "images/symbols/brand/honeynutcheerios.png"; 
        document.getElementById("capricorn").src = "images/symbols/brand/goldengrahams.png"; 
        document.getElementById("aquarius").src = "images/symbols/brand/wheaties.png"; 
        document.getElementById("pisces").src = "images/symbols/brand/reeses.png"; 
        image_tracker = 'f';
    }
}



// Zodiac Switches



function zodiac_saggitarus() { // Switch to Saggitarus

    document.getElementById("js-cereal-title").innerHTML = "Honey Nut Cheerios";
    document.getElementById("js-zodiac-title").innerHTML = "Saggitarus";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    
}

function zodiac_saggitarus() { // Switch to Saggitarus

    document.getElementById("js-cereal-title").innerHTML = "Honey Nut Cheerios";
    document.getElementById("js-zodiac-title").innerHTML = "Saggitarus";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    
}
