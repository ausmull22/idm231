



image_tracker = "zodiac";

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
    
    document.querySelector(".input_screen").style.animation ="fade-in 0.5s";

    setTimeout(switch_to_input, 500); // Once exit animation is over for the zodiac description, prepare to switch to splash screen.
    
    setTimeout(reset_animation, 500);

}

function reset_animation() {
    document.querySelector(".zodiac_description").style.animationName=""; // display exit animation for zodiac description
}

// Change Navigation Images


// Image Switch to cereal

function image_switch() {

    if (image_tracker == "zodiac") {

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
    
    } 
    
    if (image_tracker == "brand") {
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
    }

}



// Zodiac Switches

function zodiac_aries() { // Switch to Aries

    document.getElementById("js-cereal-title").innerHTML = "Lucky Charms";
    document.getElementById("js-zodiac-title").innerHTML = "Aries";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    document.getElementById("image_box").style.animation ="aries 5s linear infinite";
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/luckycharms.png"; 

}

function zodiac_taurus() { // Switch to Taurus

    document.getElementById("js-cereal-title").innerHTML = "Trix";
    document.getElementById("js-zodiac-title").innerHTML = "Taurus";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    document.getElementById("image_box").style.animation ="taurus 5s linear infinite";
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/trix.png"; 

}


function zodiac_gemini() { // Switch to Gemini

    document.getElementById("js-cereal-title").innerHTML = "Raisin Bran";
    document.getElementById("js-zodiac-title").innerHTML = "Gemini";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    document.getElementById("image_box").style.animation ="gemini 5s linear infinite";
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/raisinbran.png"; 

}


function zodiac_cancer() { // Switch to Cancer

    document.getElementById("js-cereal-title").innerHTML = "Frosted Flakes";
    document.getElementById("js-zodiac-title").innerHTML = "Cancer";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    document.getElementById("image_box").style.animation ="cancer 5s linear infinite";
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/frostedflakes.png"; 

}


function zodiac_leo() { // Switch to Leo

    document.getElementById("js-cereal-title").innerHTML = "Life";
    document.getElementById("js-zodiac-title").innerHTML = "Leo";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    document.getElementById("image_box").style.animation ="leo 5s linear infinite";
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/life.png"; 

    
}

function zodiac_virgo() { // Switch to Virgo

    document.getElementById("js-cereal-title").innerHTML = "Alpha Bits";
    document.getElementById("js-zodiac-title").innerHTML = "Virgo";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    document.getElementById("image_box").style.animation ="virgo 5s linear infinite";
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/alphabits.png"; 


}


function zodiac_libra() { // Switch to Libra

    document.getElementById("js-cereal-title").innerHTML = "Honey Nut Cheerios";
    document.getElementById("js-zodiac-title").innerHTML = "Saggitarus";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    document.getElementById("image_box").style.animation ="libra 5s linear infinite";
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/honeynutcheerios.png"; 

}


function zodiac_scorpio() { // Switch to Scorpio

    document.getElementById("js-cereal-title").innerHTML = "Corn Flakes";
    document.getElementById("js-zodiac-title").innerHTML = "Scorpio";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    document.getElementById("image_box").style.animation ="scorpio 5s linear infinite";
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/cornflakes.png"; 

}


function zodiac_saggitarus() { // Switch to Saggitarus

    document.getElementById("js-cereal-title").innerHTML = "Honey Nut Cheerios";
    document.getElementById("js-zodiac-title").innerHTML = "Saggitarus";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    document.getElementById("image_box").style.animation ="sagittarius 5s linear infinite";
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/honeynutcheerios.png"; 

}


function zodiac_capricorn() { // Switch to Capricorn

    document.getElementById("js-cereal-title").innerHTML = "Golden Grahams";
    document.getElementById("js-zodiac-title").innerHTML = "Capricorn";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    document.getElementById("image_box").style.animation ="capricorn 5s linear infinite";
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/goldengrahams.png"; 

}


function zodiac_aquarius() { // Switch to Aquarius

    document.getElementById("js-cereal-title").innerHTML = "Wheaties";
    document.getElementById("js-zodiac-title").innerHTML = "Aquarius";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    document.getElementById("image_box").style.animation ="aquarius 5s linear infinite";
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/wheaties.png"; 

}


function zodiac_pisces() { // Switch to Pisces

    document.getElementById("js-cereal-title").innerHTML = "Reeses";
    document.getElementById("js-zodiac-title").innerHTML = "Pisces";
    document.getElementById("js-written-description").innerHTML = "ADD TEXT HERE";
    document.getElementById("image_box").style.animation ="pisces 5s linear infinite";
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/reesespuffs.png"; 


}





