let popup = 1;

function show_hide()
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