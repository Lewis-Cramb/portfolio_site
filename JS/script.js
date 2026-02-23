function navbar(){ //this dims page and brings out nav bar
    document.getElementById("nav-bar").style.display = 'block' ;
    document.getElementById("nav-clear").style.opacity = 0.2 ;
    document.getElementById("nav-bttn").style.visibility = 'hidden' ;
}

function navClear(){ //this hides the nav bar and brings back the main page
    document.getElementById("nav-bar").style.display = 'none' ;
    document.getElementById("nav-clear").style.opacity = 1.0 ;
    document.getElementById("nav-bttn").style.visibility = 'visible' ;
}