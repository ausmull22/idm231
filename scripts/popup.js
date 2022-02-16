let popup = 1; // Variable set to open pop-up on start 


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