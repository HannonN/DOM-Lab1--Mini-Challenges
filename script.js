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
let buttons = document.querySelectorAll(".btn");

onButton.addEventListener("click", () => {
  lightBulb.classList.add("lights-on");
});

offButton.addEventListener("click", () => {
  lightBulb.classList.remove("lights-on");
});

toggleButton.addEventListener("click", () => {
  lightBulb.classList.toggle("lights-on");
});

//
// Note - toggle perfomred the if/else if loop I was trying to create.
// toggleButton.addEventListener("click", () => {
//   if (lightBulb.style.backgroundColor  ) {
//     lightBulb.style.backgroundcolor = ;
//   } else if (lightBulb.style.backgroundColor ) {
//     lightBulb.style.backgroundColor = ;
//   }
// });

endButton.addEventListener("click", () => {
  lightBulb.remove();
  buttons.forEach((item) => {
    item.disabled = true;
  });
});
