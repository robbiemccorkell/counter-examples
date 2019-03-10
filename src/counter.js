// Model
let counter = 0;

// Controller
function plusClicked() {
  counter++;
  label.textContent = getLabelText();
}

function minusClicked() {
  counter--;
  label.textContent = getLabelText();
}

function getLabelText() {
  return `Button clicked ${counter} times`;
}

// View
const domContainer = document.getElementById("container");

const label = document.createElement("p");
label.textContent = getLabelText();

const plusButton = document.createElement("button");
plusButton.textContent = "+";
plusButton.onclick = plusClicked;

const minusButton = document.createElement("button");
minusButton.textContent = "-";
minusButton.onclick = minusClicked;

domContainer.appendChild(label);
domContainer.appendChild(minusButton);
domContainer.appendChild(plusButton);
