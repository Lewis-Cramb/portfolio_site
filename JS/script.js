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



//project cycling stuff

class project{ //probs not conventionally great but it works for the means of this project
    constructor(title, link, img, txt){
        this.title = title ;
        this.link = link ;
        this.img = img ;
        this.txt = txt ;
    }

    getTitle(){
        return this.title ;
    }

    getLink() {
        return this.link ;
    }

    getImg() {
        return this.img ;
    }

    getTxt() {
        return this.txt ;
    }
}

const proj_track = new project("Project Tracker", "project_tracker", "pj-tkr.png", "This is the first project in my portfolio, it is a java program to track the due dates of exams or any assessments. It can store the data inputted and it will reformat and display the data on every opening of the project.")
const port_web = new project("Portfolio Website", "portfolio_site", "site.png", "This is the website you are on now, I had to re-teach myself HTML and CSS to do this as well as learning JS on the fly using tutorials when I needed interactivity such as the projects list you are currently going through. It will be updated as my github updates, manually, and will be a larger version of my CV, basically.")
const drill_mod = new project("Minecraft mod - Drill", "N/A", "N/A", "Will be updated, had idea for minecraft mod for a drill that mines 3x3 instantly in looking direction and dont want to forget.")

const projects = [proj_track, port_web, drill_mod] ;
let projIndex = 0 ; 

function moveProjectRight(){
    projIndex ++ ;
    if (projIndex == projects.length){
        projIndex = 0 ;
    }

    rewriteProjBox()
}

function moveProjectLeft(){
    projIndex -- ;
    if (projIndex == -1){
        projIndex = projects.length-1 ;
    }

    rewriteProjBox() 
}

function rewriteProjBox(){
    document.getElementById("proj-name").innerHTML = projects[projIndex].getTitle() ;

    document.getElementById("proj-img").src = '../Images/' + projects[projIndex].getImg() ;

    let url = projects[projIndex].getLink() ;
    if (url == "N/A"){
        document.getElementById("proj-url").href = "javascript:void(0)" ;
    } else {
        document.getElementById("proj-url").href = 'https://www.github.com/lewis-cramb/' + url ;
    }

    document.getElementById("proj-text").innerHTML = projects[projIndex].getTxt() ;
}




