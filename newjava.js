/* Glow effect */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}


/* -- Pop up box -- */

let popup = document.getElementById("popup");

function openPopup() {
	popup.classList.add("open-popup");
}

function closePopup(){
	popup.classList.remove("open-popup");
}

/* turn light */

function turnlight() {
	var lightson = document.getElementById("turnon");
	if (turnon.style.display === "none") {
	turnon.style.display = "block";

	document.getElementById("toggleImage").src = "turnon.png"
	} 
	
	else {
	turnon.style.display = "none";
	document.getElementById("toggleImage").src = "turnoff.png"

	}
}

/* Day */

let today = new Date();
let day = today.getDay();
let daylist = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];


let todayHTML = document.getElementById("todayHTML");


todayHTML.innerHTML = "Happy " + daylist[day] + "!";

/* about me text*/

let aboutme = document.getElementById("about-copy");

aboutme.innerHTML = "Welcome to my portfolio! As a motion and graphic designer, I have a passion for creating visually stunning projects that captivate and engage audiences. With skills in web design, I bring a unique perspective to my work that incorporates both form and function. I am excited to share my portfolio with you and showcase my skills and experience in the field.";

