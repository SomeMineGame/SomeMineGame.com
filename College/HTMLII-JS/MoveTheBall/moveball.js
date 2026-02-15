// Javascript Document
// Move The Ball Excerise
// Author : SomeMineGame
// Date   : 1-12-2026

var myBallObj;

window.onload = initAll;

function initAll() {
    console.log("initAll has started.");

    myBallObj = document.getElementById("ball");
    myBallObj.style.top = "200px"
    myBallObj.style.left = "200px"

    document.getElementById("btnChangeBall").onclick = changeBallChar;
    document.getElementById("btnUp").onclick = moveBall;
    document.getElementById("btnDown").onclick = moveBall;
    document.getElementById("btnLeft").onclick = moveBall;
    document.getElementById("btnRight").onclick = moveBall;


    document.onkeydown = keyHit;
}

function changeBallChar() {
    var answer = prompt("What Character do you want for the ball?", "*")
    if(answer) myBallObj.innerHTML = answer;
}

function moveBall() {
    
    var x = parseInt(myBallObj.style.left)
    var y = parseInt(myBallObj.style.top)

    switch (this.id) {
        case "btnUp":
            y -= 5;
            break;
        case "btnDown":
            y += 5;
            break;
        case "btnLeft":
            x -= 5;
            break;
        case "btnRight":
            x += 5;
            break;
        default:
            alert("Ruh Roh! moveBall had an error!")
    }
    myBallObj.style.top = y+"px";
    myBallObj.style.left = x+"px";
}

function keyHit(event) {
    var x = parseInt(myBallObj.style.left)
    var y = parseInt(myBallObj.style.top)
    // Use either which or keyCode depending on browser
    var thisKey = event.which || event.keyCode;
    document.getElementById("txtKeyPressed").innerHTML = "Key Pressed - " + thisKey;
    if(thisKey == 37) x -= 5;
    else if(thisKey == 39) x += 5;
    else if(thisKey == 38) y -= 5;
    else if(thisKey == 40) y += 5;
    myBallObj.style.top = y+"px";
    myBallObj.style.left = x+"px";
}