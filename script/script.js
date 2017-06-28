document.getElementById("dodaj").onclick = function() {dodaj(a,b)};

function dodaj(a,b) {
	return document.getElementById("a") + document.getElementById("b");
}

document.getElementById("wynik").innerHTML = "dodaj(a,b)";
