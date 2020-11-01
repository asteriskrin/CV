function toggleCard(i) {
	var x = document.getElementById("card"+i);
	var hideBtn = document.getElementById("cardHideBtn"+i);
	if(x.style.display == "none") {
		x.style.display = "block";
		hideBtn.innerHTML = "Hide";
	}
	else {
		x.style.display = "none";
		hideBtn.innerHTML = "Show";
	}
}