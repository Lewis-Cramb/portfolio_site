function navbar(){ //this function switched the nav-bar from being hidden to being shown
    if (document.getElementById("nav-bar").style.display != 'none'){
        document.getElementById("nav-bar").style.display = 'none' ;
    } else {
        document.getElementById("nav-bar").style.display = 'inline' ;
    }
}