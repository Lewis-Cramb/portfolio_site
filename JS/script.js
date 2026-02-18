document.getElementById("demo").innerHTML = 'Test' ;

function calcNum(){
    const x = 5 ;
    const y = 10 ;
    return x+y ;
}
document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML +  calcNum() ;


function navbar(){
    if (document.getElementById("nav-bar").style.display != 'none'){
        document.getElementById("nav-bar").style.display = 'none' ;
    } else {
        document.getElementById("nav-bar").style.display = 'block' ;
    }
}