// Model
let counter = 0;

// Controller
function plusClicked() {
  counter++;
  setLabelText();
  setLabelColor();
}

function minusClicked() {
  counter--;
  setLabelText();
  setLabelColor();
}

function setLabelColor() {
  const labelColor = getLabelColor();
  if (label.style.color !== labelColor) {
    label.style.color = labelColor;
  }
}

function setLabelText() {
  label.textContent = getLabelText();
}

function getLabelText() {
  return `Button clicked ${counter} times`;
}

function getLabelColor() {
  if (counter % 3 == 0 && counter % 5 == 0) {
    return "blue";
  } else if (counter % 3 == 0) {
    return "red";
  } else if (counter % 5 == 0) {
    return "green";
  } else {
    return "black";
  }
}

// View
const domContainer = document.getElementById("container");

const label = document.createElement("p");
setLabelText();
setLabelColor();

const plusButton = document.createElement("button");
plusButton.textContent = "+";
plusButton.onclick = plusClicked;

const minusButton = document.createElement("button");
minusButton.textContent = "-";
minusButton.onclick = minusClicked;

domContainer.appendChild(label);
domContainer.appendChild(minusButton);
domContainer.appendChild(plusButton);
