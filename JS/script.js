// nav bar stuff
function toggleNav(event) {
    // If the button is clicked, let navbar() handle it
    if (event.target.id === 'nav-bttn') {
        return;
    }
    // Otherwise close the menu
    navClear();
}

function navbar(event){ //this dims page and brings out nav bar
    event.stopPropagation(); 
    document.getElementById("nav-bar").style.display = 'block' ;
    document.getElementById("nav-clear").style.opacity = 0.2 ;
    document.getElementById("nav-bttn").style.visibility = 'hidden' ;
}

function navClear(){ //this hides the nav bar and brings back the main page
    document.getElementById("nav-bar").style.display = 'none' ;
    document.getElementById("nav-clear").style.opacity = 1.0 ;
    document.getElementById("nav-bttn").style.visibility = 'visible' ;
}





