function getdate_season() { // Function used to (1) grab the date, (2) display the date, (3) take the birhmonth and day, and (4) find the season.


    // 1st Process - Grab The Date

    document.getElementById("data-content-area").style.display = "none"; // Hide Content Area (If previously displayed)

    let input = document.getElementById("input").value; // Grab the date from the input
    
    if (input == "") { // Check if input is empty

        document.getElementById("warning").style.display = "block"; // Display the Warning Sign if input is empty

    } else { // If the input is not empty, proceed with the dispaying the date and season


        // 2nd Process - Display The Date as mm/dd/yyyy
        
        const [displayyear, displaymonth, displayday] = input.split('-'); // Separate dates by dashes (-)

        const display_date = [displaymonth, displayday, displayyear].join('/'); // Rearranged dates by slashes (/)

        document.getElementById("birthday").innerHTML = display_date; // Add Simplified Date on to "birthday" span


        // 3rd Process - Take out the Birth Month and Day separately to determine the season.


        let string_date = new Date(input); // Apply the raw date to a new variable that shows the date as a string 
        
        let birthmonth = string_date.getMonth() + 1;  // Grabbing User's birth month from the input date (Adding +1 because value starts at 0) 

        let day = string_date.getDate() + 1; // Grabbing User's birth day of the month from the input date  (Adding +1 because value starts at 0) 
        
        
        // 4th Process - Find the Season


            // Spring range is from March 22 - June 21
            // Summer range is June 22 - September 21
            // Fall range is September 22 - December 21
            // Winter range is December 22 - March 21


        if (3 <= birthmonth && birthmonth <= 6) { // If birthmonth is at least 3 (March) or at maximum 6 (June).

            if ((birthmonth == 3 && day > 21) || (birthmonth == 6 && day <= 21) || (birthmonth > 3 && birthmonth < 9)) { // If the date is after 3/21, before 6/21, or between the months of March and June
                document.getElementById("season").innerHTML = "Spring"; // Display Month as Spring
            }

        } 

        if (6 <= birthmonth && birthmonth <= 9) { // If birthmonth is at least 3 or at maximum 6.

            if ((birthmonth == 6 && day > 21) || (birthmonth == 9 && day <= 21) || (birthmonth > 6 && birthmonth < 9)) { // If the date is after 6/21, before 9/21, or between the months of June and September
                document.getElementById("season").innerHTML = "Summer"; // Display Season as Summer
            }

        } 

        if (9 <= birthmonth && birthmonth <= 12) { // If birthmonth is at least 9 or at maximum 12.

            if ((birthmonth == 9 && day > 21) || (birthmonth == 12 && day <= 21) || (birthmonth > 9 && birthmonth < 12)) { // If the date is after 9/21, before 12/21, or between the months of September and December
                document.getElementById("season").innerHTML = "Fall"; // Display Season as Fall
            }

        } 

        if (12 == birthmonth || birthmonth <= 3) { // If birthmonth is equal to 12 or at maximum 3.

            if ((birthmonth == 12 && day > 21) || (birthmonth == 3 && day <= 21) || (1 <= birthmonth && birthmonth < 3)) { // If the date is after 12/21, before 3/21, or between the months of January and March
                document.getElementById("season").innerHTML = "Winter"; // Display Season as Winter
            }

        } 

        document.getElementById("warning").style.display = "none"; // Hide Warning Sign (If already displayed)

        document.getElementById("data-content-area").style.display = "block"; // Show Content Area 


    }

}

