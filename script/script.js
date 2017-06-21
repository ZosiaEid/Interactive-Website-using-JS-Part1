document.getElementById("1").onmouseover = function() {mouseOver()};
document.getElementById("1").onmouseout = function() {mouseOut()};
document.getElementById("1").onclick = function() {onclick()};

function mouseOver() {
    document.getElementById("1").src = "winogrona.jpg";
}

function mouseOut() {
    document.getElementById("1").src = "karta1.jpg";
}

function onclick() {
    document.getElementById("1").src = "winogrona.jpg";
}
