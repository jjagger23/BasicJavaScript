// Basic JavaScript Exercises - script.js
// Joshua Jaggernauth

function getCounterValue() {
  return Number(document.getElementById("counter").textContent);
}

function setCounterValue(value) {
  document.getElementById("counter").textContent = String(value);
}

// 1pt: Simple Functions
function tickUp() {
  const current = getCounterValue();
  setCounterValue(current + 1);
}

function tickDown() {
  const current = getCounterValue();
  setCounterValue(current - 1);
}

// 1pt: Simple For Loop
function runForLoop() {
  const counter = getCounterValue();
  let output = "";

  for (let i = 0; i <= counter; i++) {
    output += (i === 0) ? "0" : " " + i;
  }

  document.getElementById("forLoopResult").textContent = output;
}

// 1pt: Repetition with Condition
function showOddNumbers() {
  const counter = getCounterValue();
  let output = "";

  for (let i = 1; i <= counter; i += 2) {
    output += (output.length === 0) ? String(i) : " " + i;
  }

  document.getElementById("oddNumberResult").textContent = output;
}

// 1pt: Arrays
function addMultiplesToArray() {
  const counter = getCounterValue();
  const multiples = [];

  // Add every multiple of 5 up to counter, but in reverse order
  for (let i = counter; i >= 5; i--) {
    if (i % 5 === 0) {
      multiples.push(i);
    }
  }

  // Print the array itself
  console.log(multiples);
}

// 2pts: Objects and Form Fields
function printCarObject() {
  const type = document.getElementById("carType").value;
  const mpg = document.getElementById("carMPG").value;
  const color = document.getElementById("carColor").value;

  const carObject = { cType: type, cMPG: mpg, cColor: color };
  console.log(carObject);
}

// 2pts: Objects and Form Fields pt. 2
function loadCar(carNumber) {
  let selectedCar;

  if (carNumber === 1) selectedCar = carObject1;
  else if (carNumber === 2) selectedCar = carObject2;
  else if (carNumber === 3) selectedCar = carObject3;
  else return;

  document.getElementById("carType").value = selectedCar.cType;
  document.getElementById("carMPG").value = selectedCar.cMPG;
  document.getElementById("carColor").value = selectedCar.cColor;
}

// 2pt: Changing Styles
function changeColor(colorNumber) {
  const p = document.getElementById("styleParagraph");

  if (colorNumber === 1) p.style.color = "red";
  else if (colorNumber === 2) p.style.color = "green";
  else if (colorNumber === 3) p.style.color = "blue";
}
