var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/mypic.jpeg') {
		myImage.setAttribute('src','images/mypic2.jpeg');
	}else {
		myImage.setAttribute('src','images/mypic.jpeg');
	}
}

//Personalized welcome message
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'Travel and Relex, ' + myName;
}

if(!localStorage.getItem('name')) {
	SetUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Travel and Relex, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}