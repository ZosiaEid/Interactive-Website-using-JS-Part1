document.getElementById("A").onmouseover = cardOnMouseOverHandler;
document.getElementById("A").onmouseout = cardOnMouseOutHandler;

function cardOnMouseOverHandler() {
    document.getElementById("A")images.src = "aligator.jpg";
}

function cardOnMouseOutHandler() {
    document.getElementById("A")images.src = "A.jpg";
}
