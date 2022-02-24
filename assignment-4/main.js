
function getdate() {
    let date = new Date(document.getElementById("input").value);

    let birthmonth = date.getMonth() + 1;  // Grabbing User's birth month (Adding +1 because value starts at 0) 

    let day = date.getDate() + 1; // Grabbing User's birth day of the month (Adding +1 because value starts at 0) 

    console.log(date) // view date on console log

    console.log(birthmonth) // view birth month on console log

    console.log(day) // view day on console log

}


const season =  ['spring', 'summer', 'fall', 'winter'];

function check_season {

    // Check Winter Season

    if (birthmonth == 12) or (birthmonth >= 3); // view if birthmonth is equal to 12 (Decemebr) or less than or equal to 3 (March)

        if (day > 21);

            const selected_season = season[3];

    else if



    // Check Spring Month (March)



    // Check Summer Season


    // Check Fall Season  



}


// Spring range is from March 22 - June 21
// Summer range is June 22 - September 21
// Fall range is September 22 - December 21
// Winter range is December 22 - March 21
