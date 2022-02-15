Aquarius - January 20 - February 18

Pisces - February 19 - March 20

Aries - March 21 - April 19

Taurus - April 20 - May 20

Gemini - May 21 - June 20

Cancer -June 21 - July 22

Leo - July 23 - August 22

Virgo -August 23 - September 22

Libra - September 23 - October 22

Scorpio - October 23 - November 21

Sagittarius - November 22 - December 21

Capricorn - December 22 - January 19




const signs =  ['aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'leo', 
'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn']


let image_view = 'zodiac';


if (image_view == 'zodiac') {

    let image = document.getElementById('aries');
    image.src = "images/symbols/zodiac/aries.png";

}

if (image_view == 'cereal') {
    
    let image = document.getElementById('aries');
    image.src = "images/symbols/brand/luckycharms.png";

}

function switchbutton() {

    if (image_view == 'zodiac') {
        let image_view = 'cereal'; //If the Zodiac signs are on screen, switch them to icons of the cereals.
    }

    if (image_view == 'cereal') {
        let image_view = 'zodiac'; //If the cereal signs are on screen, switch them to icons of the zodiacs.
    }

}

