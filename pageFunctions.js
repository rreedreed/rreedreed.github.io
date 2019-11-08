// function to change house photo on Exterior Page
// also gives more info on solar panels 
function photoSwitch() {
	document.getElementById("green_roof_image").src="images/rooftop_solar.jpg";
	
	var paragraph = document.getElementsByTagName("p")

	var changeText = paragraph[0].innerHTML = "If you are a homeowner or are planning on building a new home, there are a variety of options to choose from in how to make your roof work best for you." + "<br>" + "Having solar panels on your roof can reduce heat capture in the summer and generate energy for your home."
}

// function to make text larger
function increaseText() {
	var paragraph = document.getElementsByTagName("p");
	var aLink = document.getElementsByTagName("a");

	for (var i = 0; i < paragraph.length; i++) {
		paragraph[i].style.fontSize="150%";
	}
	for (var i = 0; i < aLink.length; i++) {
		aLink[i].style.fontSize="150%";
	}
}


// function for high contrast mode
function highContrast() {
	var everything = document.querySelectorAll("*");
	for (var i = 0; i < everything.length; i++) {
		everything[i].style.backgroundColor="#ffffff";
		everything[i].style.color="#000000";
	}
}
