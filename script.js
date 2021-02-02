"use strict";

let total = 0;
let totalParagraph = document.querySelector(".total");

let cola = document.querySelector(".cola");
let peanuts = document.querySelector(".peanuts");
let chocolate = document.querySelector(".chocolate");
let gummies = document.querySelector(".gummies");

cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `Total: $${total}`;
});
peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total: $${total}`;
});
chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total: $${total}`;
});
gummies.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total: $${total}`;
});

// Question #2
// Listen for the submission of the form.
// Can you derive the value of the inputs
// use the input values to create the number of coins, and their respective types.

let moneyContainer = document.querySelector(".money-container");
let makeMoneyForm = document.querySelector(".make-money-form");
let coinDisplay = document.querySelector(".coin-circles");

makeMoneyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(makeMoneyForm);
  let amount = formData.get("amount");
  let type = formData.get("type");
  //   console.log(amount);
  //   console.log(type);
  for (let i = 0; i < amount; i++) {
    let coin = document.createElement("div");
    coin.innerText = type;
    coin.classList.add(type, "coin");
    coin.textContent = type;
    coinDisplay.append(coin);
  }
});

// Question #3
let lightBulb = document.querySelector(".lightbulb");
let onButton = document.querySelector(".on-button");
let offButton = document.querySelector(".off-button");
let toggleButton = document.querySelector(".toggle-button");
let endButton = document.querySelector(".end-button");

onButton.addEventListener("click", () => {
  lightBulb.classList.add("lights-on");
});

offButton.addEventListener("click", () => {
  lightBulb.classList.add("lights-off");
});

toggleButton.addEventListener("click", () => {
  if (lightBulb.style.backgroundColor === "gray") {
    lightBulb.style.backgroundcolor = "yellow";
  } else if (lightBulb.style.backgroundColor === "yellow") {
    lightBulb.style.backgroundColor = "gray";
  }
});

endButton.addEventListener("click", () => {
  lightBulb.classList.add("disappear");
});
