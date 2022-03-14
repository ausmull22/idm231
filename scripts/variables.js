
image_tracker = "zodiac";

let date; // User's birthdate 
let birthmonth;  // User's birth month 
let day;  // User's day of the month 
let image;
let selected_audio;


// Grab date input:

function switch_to_zodiac() { // Close the Input Screen and Display and Zodiac Description 
    document.querySelector(".input_screen").style.display ="none";
    document.querySelector(".zodiac_description").style.display ="inline";
}

function switch_to_input() { // Close the Zodiac Description and Display and Input Screen 
    document.querySelector(".input_screen").style.display ="inline";
    document.querySelector(".zodiac_description").style.display ="none";
}


function zodiac_transition() {  // Activate Transition Animations when button is clicked.

    document.querySelector(".input_screen").style.animation ="fade-out 0.5s";  // Activates Fade Out Animation for Input Screen

    setTimeout(switch_to_zodiac, 500);


}

// Functions that activate animations


function zodiac_exit() { // Animations for when zodiac descriptions slide down when exiting.

    document.querySelector(".zodiac_description").style.animationName="slide_down"; // display exit animation for zodiac description
    
    document.querySelector(".input_screen").style.animation ="fade-in 0.5s";

    setTimeout(switch_to_input, 500); // Once exit animation is over for the zodiac description, prepare to switch to splash screen.
    
    setTimeout(reset_animation, 500);

}

function reset_animation() { // Resets Animation

    document.querySelector(".zodiac_description").style.animationName=""; // display exit animation for zodiac description
}

// Change Navigation Images


// Image Switch to cereal

function image_switch() {
    image_tracker = "zodiac";
    
    if (image_tracker == "zodiac") {
        image_tracker = "brand";
    } else if (image_tracker == "brand") {
        image_tracker = "zodiac";
    }

    if (image_tracker == "zodiac") {

        document.getElementById("aries").src = "images/symbols/zodiac/aries.png"; 
        document.getElementById("taurus").src = "images/symbols/zodiac/taurus.png"; 
        document.getElementById("gemini").src = "images/symbols/zodiac/gemini.png"; 
        document.getElementById("cancer").src = "images/symbols/zodiac/cancer.png"; 
        document.getElementById("leo").src = "images/symbols/zodiac/leo.png"; 
        document.getElementById("virgo").src = "images/symbols/zodiac/virgo.png"; 
        document.getElementById("libra").src = "images/symbols/zodiac/libra.png"; 
        document.getElementById("scorpio").src = "images/symbols/zodiac/scorpio.png"; 
        document.getElementById("sagittarius").src = "images/symbols/zodiac/sagittarius.png"; 
        document.getElementById("capricorn").src = "images/symbols/zodiac/capricorn.png"; 
        document.getElementById("aquarius").src = "images/symbols/zodiac/aquarius.png"; 
        document.getElementById("pisces").src = "images/symbols/zodiac/pisces.png"; 
    
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

    document.getElementById("js-cereal-title").innerHTML = "Lucky Charms";  // Title Changes to Lucky Charms
    document.getElementById("js-zodiac-title").innerHTML = "Aries"; // Zodiac Title Changes to Aries
    document.getElementById("js-written-description").innerHTML = aries_text; // Changes Description Text to "aries_text" string
    document.getElementById("image_box").style.animation ="aries 5s linear infinite"; // "Image_box" style is modified to show Aries/LuckyCharms Icons
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/luckycharms.png"; // Cereal View Changes to Lucky Charms

    selected_audio = new Audio('sounds/lucky_charms.mp3'); // Change Audio Source to sound made for Lucky Charms
    selected_audio.play();


}

function zodiac_taurus() { // Switch to Taurus

    document.getElementById("js-cereal-title").innerHTML = "Trix"; // Title Changes to Trix
    document.getElementById("js-zodiac-title").innerHTML = "Taurus"; // Zodiac Title Changes to Taurus
    document.getElementById("js-written-description").innerHTML = taurus_text; // Changes Description Text to "taurus_text" string
    document.getElementById("image_box").style.animation ="taurus 5s linear infinite"; // "Image_box" style is modified to show Taurus/Trix Icons
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/trix.png"; // Cereal View Changes to Trix

    selected_audio = new Audio('sounds/trix.mp3'); // Change Audio Source to sound made for Trix
    selected_audio.play();

}


function zodiac_gemini() { // Switch to Gemini

    document.getElementById("js-cereal-title").innerHTML = "Raisin Bran"; // Title Changes to Raisin Bran
    document.getElementById("js-zodiac-title").innerHTML = "Gemini"; // Zodiac Title Changes to Gemini
    document.getElementById("js-written-description").innerHTML = gemini_text; // Changes Description Text to "gemini_text" string
    document.getElementById("image_box").style.animation ="gemini 5s linear infinite"; // "Image_box" style is modified to show Gemini/Raisin Bran Icons
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/raisinbran.png"; // Cereal View Changes to Raisin Bran

    selected_audio = new Audio('sounds/raisin_bran.mp3'); // Change Audio Source to sound made for Raisin Bran
    selected_audio.play();

}


function zodiac_cancer() { // Switch to Cancer

    document.getElementById("js-cereal-title").innerHTML = "Frosted Flakes"; // Title Changes to Frosted Flakes
    document.getElementById("js-zodiac-title").innerHTML = "Cancer"; // Zodiac Title Changes to Cancer
    document.getElementById("js-written-description").innerHTML = cancer_text; // Changes Description Text to "cancer_text" string
    document.getElementById("image_box").style.animation ="cancer 5s linear infinite"; // "Image_box" style is modified to show Cancer/FrostedFlakes Icons
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/frostedflakes.png"; // Cereal View Changes to Frosted Flakes

    selected_audio = new Audio('sounds/frosted_flakes.mp3'); // Change Audio Source to sound made for Frosted Flakes
    selected_audio.play();


}


function zodiac_leo() { // Switch to Leo

    document.getElementById("js-cereal-title").innerHTML = "Life"; // Title Changes to Life
    document.getElementById("js-zodiac-title").innerHTML = "Leo"; // Zodiac Title Changes to Leo
    document.getElementById("js-written-description").innerHTML = leo_text; // Changes Description Text to "leo_text" string
    document.getElementById("image_box").style.animation ="leo 5s linear infinite"; // "Image_box" style is modified to show Leo/Life Icons
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/life.png"; // Cereal View Changes to Life

    selected_audio = new Audio('sounds/life.mp3'); // Change Audio Source to sound made for Life
    selected_audio.play();

    
}

function zodiac_virgo() { // Switch to Virgo

    document.getElementById("js-cereal-title").innerHTML = "Alpha Bits"; // Title Changes to Alpha Bits
    document.getElementById("js-zodiac-title").innerHTML = "Virgo"; // Zodiac Title Changes to Virgo
    document.getElementById("js-written-description").innerHTML = virgo_text; // Changes Description Text to "virgo_text" string
    document.getElementById("image_box").style.animation ="virgo 5s linear infinite"; // "Image_box" style is modified to show Virgo/AlphaBits Icons
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/alphabits.png"; // Cereal View Changes to Alpha Bits

    selected_audio = new Audio('sounds/alphabits.mp3'); // Change Audio Source to sound made for Alpha Bits
    selected_audio.play();


}


function zodiac_libra() { // Switch to Libra

    document.getElementById("js-cereal-title").innerHTML = "Apple Jacks"; // Title Changes to Apple Jacks
    document.getElementById("js-zodiac-title").innerHTML = "Libra"; // Zodiac Title Changes to Libra
    document.getElementById("js-written-description").innerHTML = libra_text; // Changes Description Text to "libra_text" string
    document.getElementById("image_box").style.animation ="libra 5s linear infinite"; // "Image_box" style is modified to show Libra/AppleJacks Icons
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/applejacks.png"; // Cereal View Changes to Apple Jacks
    
    selected_audio = new Audio('sounds/apple_jacks.mp3'); // Change Audio Source to sound made for Apple Jacks
    selected_audio.play();


}


function zodiac_scorpio() { // Switch to Scorpio

    document.getElementById("js-cereal-title").innerHTML = "Corn Flakes"; // Title Changes to Corn Flakes
    document.getElementById("js-zodiac-title").innerHTML = "Scorpio"; // Zodiac Title Changes to Scorpio
    document.getElementById("js-written-description").innerHTML = scorpio_text; // Changes Description Text to "scorpio_text" string
    document.getElementById("image_box").style.animation ="scorpio 5s linear infinite"; // "Image_box" style is modified to show Scorpio/CornFlakes Icons
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/cornflakes.png"; // Cereal View Changes to Corn Flakes

    selected_audio = new Audio('sounds/cornflakes.mp3'); // Change Audio Source to sound made for Corn Flakes
    selected_audio.play();


}


function zodiac_saggitarus() { // Switch to Saggitarus

    document.getElementById("js-cereal-title").innerHTML = "Honey Nut Cheerios"; // Title Changes to Honey Nut Cheerios
    document.getElementById("js-zodiac-title").innerHTML = "Saggitarus"; // Zodiac Title Changes to Saggitarus
    document.getElementById("js-written-description").innerHTML = saggitarus_text; // Changes Description Text to "saggitarus_text" string
    document.getElementById("image_box").style.animation ="sagittarius 5s linear infinite"; // "Image_box" style is modified to show Saggitarus/Honey Nut Cheerios Icons
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/honeynutcheerios.png"; // Cereal View Changes to Honey Nut Cheerios 

    selected_audio = new Audio('sounds/honey_nut_cheerios.mp3'); // Change Audio Source to sound made for Honey Nut Cheerios
    selected_audio.play();



}


function zodiac_capricorn() { // Switch to Capricorn

    document.getElementById("js-cereal-title").innerHTML = "Golden Grahams"; // Title Changes to Golden Grahams
    document.getElementById("js-zodiac-title").innerHTML = "Capricorn"; // Zodiac Title Changes to Capricorn
    document.getElementById("js-written-description").innerHTML = capricorn_text; // Changes Description Text to "capricorn_text" string
    document.getElementById("image_box").style.animation ="capricorn 5s linear infinite"; // "Image_box" style is modified to show Capricorn/GoldenGrahams Icons
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/goldengrahams.png"; // Cereal View Changes to Golden Grahams

    selected_audio = new Audio('sounds/golden_grahams.mp3'); // Change Audio Source to sound made for Golden Grahams
    selected_audio.play();


}


function zodiac_aquarius() { // Switch to Aquarius

    document.getElementById("js-cereal-title").innerHTML = "Wheaties"; // Title Changes to Wheaties
    document.getElementById("js-zodiac-title").innerHTML = "Aquarius"; // Zodiac Title Changes to Aquarius
    document.getElementById("js-written-description").innerHTML = aquarius_text; // Changes Description Text to "aquarius_text" string
    document.getElementById("image_box").style.animation ="aquarius 5s linear infinite"; // "Image_box" style is modified to show Aquarius/Wheaties Icons
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/wheaties.png"; // Cereal View Changes to Wheaties

    selected_audio = new Audio('sounds/wheaties.mp3'); // Change Audio Source to sound made for Wheaties
    selected_audio.play();


}


function zodiac_pisces() { // Switch to Pisces

    document.getElementById("js-cereal-title").innerHTML = "Reeses Puff"; // Title Changes to Reeses Puffs
    document.getElementById("js-zodiac-title").innerHTML = "Pisces"; // Zodiac Title Changes to Pisces
    document.getElementById("js-written-description").innerHTML = pisces_text; // Changes Description Text to "pisces_text" string
    document.getElementById("image_box").style.animation ="pisces 5s linear infinite"; // "Image_box" style is modified to show Pisces/ReesesPuff Icons
    document.getElementById("js-cereal-view").src = "images/cereal_viewer/reesespuffs.png"; // Cereal View Changes to Reeses Puffs

    selected_audio = new Audio('sounds/reeses.mp3'); // Change Audio Source to sound made for Reeses Puffs
    selected_audio.play();

}

function convert_date() { // Function used to (1) grab the date, (2) display the date, (3) take the birhmonth and day, and (4) find the season.


    // 1st Process - Grab The Date


    let input = document.getElementById("input").value; // Grab the date from the input
    
    if (input == "") { // Check if input is empty COME BACK

        


    } else { // If the input is not empty, proceed with the dispaying the date and season


        // 2nd Process - Display The Date as mm/dd/yyyy
        
        const [displayyear, displaymonth, displayday] = input.split('-'); // Separate dates by dashes (-)

        const display_date = [displaymonth, displayday, displayyear].join('/'); // Rearranged dates by slashes (/)

        // 3rd Process - Take out the Birth Month and Day separately to determine the season.


        let string_date = new Date(input); // Apply the raw date to a new variable that shows the date as a string 
        
        let birthmonth = string_date.getMonth() + 1;  // Grabbing User's birth month from the input date (Adding +1 because value starts at 0) 

        let day = string_date.getDate() + 1; // Grabbing User's birth day of the month from the input date  (Adding +1 because value starts at 0) 
        
        
        // 4th Process - Find the Zodiac


        // Aries	March 21 -April 19	
        // Taurus	April 20 - May 20	
        // Gemini	May 21 - June 21	
        // Cancer 	June 22 - July 22	
        // Leo 	    July 23 - August 22	
        // Virgo  	August 23 - September 22	
        // Libra 	September 23 - October 23	
        // Scorpio 	October 24 - November 22	
        // Sagittarius	November 23 - December 21	
        // Capricorn 	December 22 - January 19	
        // Aquarius	January 20 - February 18
        // Pisces	February 19 - March 20



        if ((birthmonth == 3 && day > 21) || (birthmonth == 4 && day <= 19)) { // If date is between March 21st and April 19th...

            zodiac_aries(); // Switch to Aries

        }

        if ((birthmonth == 4 && day > 20) || (birthmonth == 5 && day <= 20)) { // If date is between April 20th and May 20th...

            zodiac_taurus(); // Switch to Taurus 

        }

        if ((birthmonth == 5 && day > 21) || (birthmonth == 6 && day <= 21)) {// If date is between May 21st and June 21st...

            zodiac_gemini(); // Switch to Gemini

        }


        if ((birthmonth == 6 && day > 22) || (birthmonth == 7 && day <= 22)) { // If date is between June 22nd and July 22nd...

            zodiac_cancer(); // Switch to Cancer               

        }


        if ((birthmonth == 7 && day > 23) || (birthmonth == 8 && day <= 22)) { // If date is between July 23rd and August 22nd...

            zodiac_leo(); // Switch to Leo                

        }

        if ((birthmonth == 8 && day > 23) || (birthmonth == 9 && day <= 22)) { // If date is between August 23rd and September 22nd...

            zodiac_virgo(); // Switch to Virgo   

        }


        if ((birthmonth == 9 && day > 23) || (birthmonth == 10 && day <= 23)) { // If date is between September 23rd and October 23rd...

            zodiac_libra(); // Switch to Libra     

        }

        if ((birthmonth == 10 && day > 24) || (birthmonth == 11 && day <= 22)) { // If date is between October 24th and November 22nd...

            zodiac_scorpio();  // Switch to Scorpio              

        }

        if ((birthmonth == 11 && day > 23) || (birthmonth == 12 && day <= 21)) { // If date is between November 23rd and December 21st...

            zodiac_sagittarius(); // Switch to Sagittarius    

        }


        if ((birthmonth == 12 && day > 22) || (birthmonth == 1 && day <= 19)) { // If date is between Decemebr 22nd and January 19th...

            zodiac_capricorn(); // Switch to Capricorn

        }

        if ((birthmonth == 1 && day > 20) || (birthmonth == 2 && day <= 18)) { // If date is between January 20th and February 18th...

            zodiac_aquarius(); // Switch to Aquarius                

        }


        if ((birthmonth == 2 && day > 19) || (birthmonth == 3 && day <= 20)) { // If date is between February 19th and March 20th...

            zodiac_pisces(); // Switch to Pisces

        }



    }

}


function enter() {
    convert_date();
    zodiac_transition();
}

aries_text = "Lucky Charms has all the traits of Aries, especially all the magically delicious lucky stuff: hearts, stars and horseshoes, clovers and blue moons, unicorns, rainbows and tasty red balloons! Plus crunchy, gluten-free oats, too!"
taurus_text = "Raspberry Red, Lemony Lemon, Orangey Orange, Wildberry Blue, Grapity Purple, And Watermelon! When Trix launched in 1954, it was the first fruit-flavored cereal that was colorful and fun. While Trix cereal has evolved since their initial launch, the Punchline has remained unchanged: Silly rabbit, Trix are for kids!"
gemini_text = "Wake up with Sunny and the simple goodness of Kellogg’s Raisin Bran® Cereal. You’ll find crispy whole grain bran flakes and plump, juicy raisins in every spoonful. A good source of fiber in every serving. Kellogg’s Raisin Bran® is also a heart-healthy choice (while many factors affect heart disease, diets low in saturated fat and cholesterol may reduce the risk of this disease)."
cancer_text = "The corn makes it crunch. The sweet milk makes it Gr-r-reat! Frosted Flakes gives you the sweet spark to go all in. Tony the Tiger has been the trademark mascot of Frosted Flakes since its introduction. However, the name “Frosted Flakes” is so generic that it cannot be trademarked, and thus it often shares its name with competitors."
leo_text = "Just like the little ones you love, Vanilla Life Cereal tastes simply sweet and is totally irresistible. Life is a breakfast cereal made by the Quaker Oats Company. It was formerly made of oats, soy protein concentrate, sodium casienate and sugar, but now also contains corn flour, whole wheat flour, and rice flour. Introduced in 1961, the cereal is distinguished by its characteristic brown checkered square pattern."
virgo_text = "Alpha-Bits, was a brand of breakfast cereal made by Post Consumer Brands, which contains frosted alphabet-shaped multi-grain (whole-grain oat and corn flour) cereal bits. The cereal was introduced in 1957 and was taken off the market in 2006. The cereal was substantially reformulated in 2017, with the new and improved Alpha-Bits having larger shapes than its predecessor. Alpha-Bits was discontinued in May 2021."
libra_text = "Apple Jacks cereal is a crunchy sweet breakfast cereal, though often enjoyed as a mid-day snack as well. Apple Jacks has a memorable name and is distinguished by its orange and green color cereal O’s. Apple Jacks has an apple and cinnamon taste that is appealing with milk. It is a fairly popular cereal that occasionally comes off with spin-offs to keep the product fresh."
scorpio_text = "Kelloggs Corn Flakes® cereal is the Original & Best® cereal. Every bite of these crispy, golden flakes is just as delicious as the first. You'll be on your way to a great day when you pour a bowl of Kellogg's Corn Flakes® cereal into your breakfast bowl."
saggitarus_text = "Honey Nut Cheerios is a variation of Cheerios breakfast cereal, introduced in 1979 by Yandel Gonzalez, who was in the General Mills cereal company.[1] Honey Nut Cheerios is sweeter than the original, with a honey and almond flavor."
capricorn_text = "Golden Grahams consists of a graham cracker taste with honey and brown sugar. The cereal is made up of small toasted square shaped cereal pieces made of whole wheat and corn. Our recipe includes no Artificial Flavors, Colors from Artificial Sources or High Fructose Corn Syrup."
aquarius_text = "As our first ready-to-eat cereal, Wheaties debuted in 1921 as Washburn’s Whole Wheat Flakes. Since then, they’ve become an icon of sporting, thanks to their 100% whole grain flakes and B vitamins."
pisces_text = "Reese's Puffs brings together delicious real REESE'S peanut butter and HERSHEY’S cocoa on sweet crunchy corn puffs kids and teens love. (I mean, what's not to like about the creamy, crunchy and chocolatey puffs ?) Besides being one of the most amazing things to ever happen to mornings, REESE'S PUFFS breakfast cereal is made with whole grains (15g per serving; at least 48g recommended daily) and 12 vitamins and minerals, making it a great part of breakfast for kids who won't settle for a dull start to their day."
