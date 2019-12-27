let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Atardecer.jpg') {
    myImage.setAttribute ('src','images/sunset-1046475_640.jpg');
  } else {
   myImage.setAttribute (`src`, ìmages/Atardecer.jpg');
 }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
} else {
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Travel with us to Australia, ' + myName;
  }
}

if(!localStorange.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Travel qith us to Australia,' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
