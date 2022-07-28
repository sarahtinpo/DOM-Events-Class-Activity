//Your code goes here

// 1. Click the button to display your name
//Selectors
const myBtnOne = document.getElementById('btnName');
const nameInput = document.getElementById('myName');
//Function
function displayName() {
  nameInput.value = 'Sarah';
}
//Call the event
myBtnOne.addEventListener('click', displayName);
//2. Switch lights on mouseover
//Selectors
const lightBulbImg = document.getElementById('imageOff');

//Function
function switchLightOn() {
  lightBulbImg.src = 'images/lighton.png';
}

function switchLightOff() {
  lightBulbImg.src = 'images/lightoff.png';
}

//Call the event

lightBulbImg.addEventListener('mouseover', switchLightOn);
lightBulbImg.addEventListener('mouseout', switchLightOff);

//3. Double click to display content
//Selectors

const myBtnTwo = document.getElementById("btndbName");

/*Function {
  //some code here
  //create a new img element
}*/
function displayContent() {
  const smileyFace = document.createElement("img");
  smileyFace.src = "images/smileyface.png";
  document.getElementById("displayPara").appendChild(smileyFace);
}

//Call the event
myBtnTwo.addEventListener("dblclick", displayContent);

// 4. Traffic Lights
//Selectors
const stopBtn = document.getElementById("btnStop");
const readyBtn = document.getElementById("btnReady");
const goBtn = document.getElementById("btnGo");

const redLight = document.getElementById("stopDiv");
const yellowLight = document.getElementById("readyDiv");
const greenLight = document.getElementById("goDiv");

//Function 1
function clearLights() {
  redLight.style.backgroundColor = "black";
  yellowLight.style.backgroundColor = "black";
  greenLight.style.backgroundColor = "black";
}

function displayRedLight() {
  clearLights();
  redLight.style.backgroundColor = "#FF0000";
}
//Function 2
function displayYellowLight() {
  clearLights();
  yellowLight.style.backgroundColor = "#FCEA32";
}
//Function 3
function displayGreenLight() {
  clearLights();
  greenLight.style.backgroundColor = "#229954";
}

//Call the events
stopBtn.addEventListener("click", displayRedLight);
readyBtn.addEventListener("click", displayYellowLight);
goBtn.addEventListener("click", displayGreenLight);

//5. Change textbox border colours
//Selectors

const buttonThree = document.getElementById("btn2Name");
const textBoxOne = document.getElementById("firstName");
const textBoxTwo = document.getElementById("lastName");

//Function

function changeTextBoxBorderColors() {
  textBoxOne.style.borderColor = "red";
  textBoxTwo.style.borderColor = "green";
}

//Call the event

buttonThree.addEventListener("click", changeTextBoxBorderColors);

//6. validate the box [length should be more than 5 characters]
//Selectors

const buttonFour = document.getElementById("btnSub2");

/*Function {
  //if statement
}*/

function validateTheBox() {
  let textInput = document.getElementById("myName2").value;
  if (textInput.length > 8) {
    document.getElementById("errMsg").innerHTML = "All good";
    document.getElementById("errMsg").style.color = "green";
  } else {
    document.getElementById("errMsg").innerHTML = "Length should be more than 8";
    document.getElementById("errMsg").style.color = "red";
  }
}

//Call the event

buttonFour.addEventListener("click", validateTheBox);

// 7.create a list of hobbies
//Selectors

const buttonFive = document.getElementById("btnHobbies");

/*Function {
  //for loop
}*/
function enterHobbies() {
  let hobby = prompt("Please enter your hobby");
  if (hobby != null) {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    let text = document.createTextNode(hobby);    
    li.appendChild(text);
    ul.appendChild(li);
  }
}

//Call the event
buttonFive.addEventListener('click', enterHobbies);

// 8. Display a profile card from an object
//Object

//Selectors

/*Function {
    //for loop
      //if statement
  }*/
