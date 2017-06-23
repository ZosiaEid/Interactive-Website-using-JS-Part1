document.getElementById("A").onmouseover = cardonmouseOverHandler;
document.getElementById("A").onmouseout = cardonmouseOutHandler;

function cardonmouseOverHandler() {
    document.getElementById("A").images.src = "aligator.jpg";
}

function cardonmouseOutHandler() {
    document.getElementById("A").images.src = "A.jpg";
}

document.getElementById("1").onclick = onclick1Button;

function onclick1Button () {
	document.getElementById("1").images.src = "A.jpg";
}
