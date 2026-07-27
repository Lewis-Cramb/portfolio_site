
document.addEventListener("keydown",downKey) ;
document.addEventListener("keyup",upKey) ;

const ball = document.getElementById("pong-ball") ;
const leftPaddle = document.getElementById("uni-box") ;
const rightPaddle = document.getElementById("hs-box") ;

let keysHeld = {"w":false, "s":false, "ArrowUp":false, "ArrowDown":false} ;
let x = 600 ;
let y = 20 ;

let vx = 6 ;
let vy = 2 ;

let leftScore = 0 ;
let rightScore = 0 ;

let leftPaddleTop = leftPaddle.offsetTop ;
let rightPaddleTop = rightPaddle.offsetTop ;

let started = false ;
let animationID = 0 ;

function downKey(event){
    console.log(event.key)
    if (event.key == " " && started == false){
        started = true ;
        startPong() ;
    }
    else if (event.key == " " && started == true){
        started = false ;
        endPong() ;
    }
    keysHeld[event.key] = true ;
}

function upKey(event){
    keysHeld[event.key] = false ;
}
    


function startPong(){
    document.getElementById("pong-ball").style.visibility = "visible" ;
    document.getElementById("pong-score").style.display = "inline" ;
    document.getElementById("pong-words").style.display = "none" ;
    animationID = requestAnimationFrame(playPong) ;
}

function endPong(){
    document.getElementById("pong-ball").style.visibility = "hidden" ;
    document.getElementById("pong-score").style.display = "none" ;
    document.getElementById("pong-words").style.display = "inline" ;
    resetPaddles() ;
    leftScore = 0 ;
    rightScore = 0 ;
    cancelAnimationFrame(animationID) ;
}

function playPong(){
    moveBall() ;

    moveLeftPaddle(keysHeld) ;
    moveRightPaddle(keysHeld) ;

    verifyLeftHit() ;
    verifyRightHit() ;
    
    animationID = requestAnimationFrame(playPong) ;
}

function moveBall(){
    if (x >= document.getElementById("nav-clear").offsetWidth-ball.offsetWidth || x <= 0){
        vx = -vx ;
    }
    if (y >= document.getElementById("nav-clear").offsetHeight-ball.offsetHeight || y <= 0){
        vy = -vy ;
    }
    x += vx ;
    y += vy ;
    ball.style.left = x + "px" ;
    ball.style.top = y + "px" ;


}

function verifyLeftHit(){
    if (x <= document.getElementById("uni-box").offsetLeft+document.getElementById("uni-box").offsetWidth && (y >= document.getElementById("uni-box").offsetTop && y <= document.getElementById("uni-box").offsetTop+document.getElementById("uni-box").offsetHeight)){
        vx = -vx ;
    } else if (x <= document.getElementById("uni-box").offsetLeft+document.getElementById("uni-box").offsetWidth){
        rightScore += 1 ;
        resetBall() ;
        updateScore() ;
    }
}

function verifyRightHit(){
    if (x >= document.getElementById("hs-box").offsetLeft && (y >= document.getElementById("hs-box").offsetTop && y <= document.getElementById("hs-box").offsetTop+document.getElementById("uni-box").offsetHeight)){
        vx = -vx ;
    } else if (x >= document.getElementById("hs-box").offsetLeft){
        leftScore += 1 ;
        resetBall() ;
        updateScore() ;
    }
}

function resetBall(){
    x = 600 ;
    y = 50 ;
    vx = 6 ;
    vy = 2 ;
}

function resetPaddles(){
    leftPaddle.style.top = "200px" ;
    rightPaddle.style.top = "200px" ;
}

function moveLeftPaddle(keysHeld){
    if (keysHeld["w"]){ 
        leftPaddleTop -= 15 ;
        leftPaddle.style.top = leftPaddleTop + "px" ;
    } else if (keysHeld["s"]){
        leftPaddleTop += 15 ;
        leftPaddle.style.top = leftPaddleTop + "px";
    }

    leftPaddleTop = Math.max(0, Math.min(leftPaddleTop, document.getElementById("nav-clear").offsetHeight-leftPaddle.offsetHeight)) ;
    leftPaddle.style.top = leftPaddleTop + "px";
}

function moveRightPaddle(keysHeld){
    if (keysHeld["ArrowUp"]){
        rightPaddleTop -= 15 ;
        rightPaddle.style.top = rightPaddleTop + "px" ;
    } else if (keysHeld["ArrowDown"]){
        rightPaddleTop += 15 ;
        rightPaddle.style.top = rightPaddleTop + "px" ;
    }
    
    rightPaddleTop = Math.max(0, Math.min(rightPaddleTop, document.getElementById("nav-clear").offsetHeight-rightPaddle.offsetHeight)) ;
    rightPaddle.style.top = rightPaddleTop + "px" ;
}

function updateScore(){
    document.getElementById("pong-score").innerHTML = leftScore + " - " + rightScore ;
}