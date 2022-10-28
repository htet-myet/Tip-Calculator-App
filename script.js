"use strict";

const resetBtn = document.getElementById("reset");
const inputPeople = document.getElementById("people");
const spanPeople = document.querySelector(".people-error");
const inputBill = document.getElementById("bill");
const spanBill = document.querySelector(".bill-error");
const tipAmount = document.querySelector(".tip-amount");
const total = document.querySelector(".tip-total");
const fivePercent = document.querySelector(".five");
const tenPercent = document.querySelector(".ten");
const fifteen = document.querySelector(".fifteen");
const twentyFive = document.querySelector(".twenty-five");
const fiftyPercent = document.querySelector(".fifty");
const inputCustom = document.querySelector(".custom");

const format = (num, decimals) =>
  num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

fivePercent.addEventListener("click", () => {
  peopleError();
  calculate(inputBill.value, 5);
  billError();
});

tenPercent.addEventListener("click", () => {
  peopleError();
  calculate(inputBill.value, 10);
  billError();
});

fifteen.addEventListener("click", () => {
  peopleError();
  calculate(inputBill.value, 15);
  billError();
});

twentyFive.addEventListener("click", () => {
  peopleError();
  calculate(inputBill.value, 25);
  billError();
});

fiftyPercent.addEventListener("click", () => {
  peopleError();
  calculate(inputBill.value, 50);
  billError();
});

inputCustom.addEventListener("input", () => {
  peopleError();
  calculate(inputBill.value, inputCustom.value);
  billError();
});

function calculate(number, percent) {
  if (!number == 0 && !percent == 0 && number > 0 && inputPeople.value > 0) {
    tipAmount.innerHTML = format(
      ((number / inputPeople.value) * percent) / 100
    );
    total.innerHTML = format(
      ((number / inputPeople.value) * percent) / 100 +
        inputBill.value / inputPeople.value
    );
  }
}

function peopleError() {
  if (inputPeople.value <= 0) {
    spanPeople.innerHTML = "Can't be zero";
    inputPeople.style.border = "1.5px solid red";
  } else {
    spanPeople.innerHTML = "";
    inputPeople.style.border = "1.5px solid hsl(172, 67%, 45%)";
  }
}

function billError() {
  if (inputBill.value <= 0) {
    spanBill.innerHTML = "Can't be zero";
    inputBill.style.border = "1.5px solid red";
  } else {
    spanBill.innerHTML = "";
    inputBill.style.border = "1.5px solid hsl(172, 67%, 45%)";
  }
}

resetBtn.addEventListener("click", () => {
  inputBill.value = "";
  inputPeople.value = "";
  tipAmount.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
  inputCustom.value = "";
  spanBill.innerHTML = "";
  spanPeople.innerHTML = "";
  inputBill.style.border = "1.5px solid hsl(189, 41%, 97%)";
  inputPeople.style.border = "1.5px solid hsl(189, 41%, 97%)";
});
