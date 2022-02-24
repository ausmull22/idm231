let popup = 1; // Variable set to open pop-up on start 

function popup_exit() {
    document.getElementById('popup').style.animationName="exit"; // Activate animation set for pop-up to exit out 
    setTimeout(show_hide, 1000); // Once animation is complete proceed to close pop-up using show_hide()
}


function show_hide() // function used to close pop-up 
{
    if(popup==1) 
        {
            document.getElementById('popup').style.display="none";
            return popup=0;
        }
        
    else
        
        {
            document.getElementById('popup').style.display="inline";
            return popup=1;
        }
    
}

