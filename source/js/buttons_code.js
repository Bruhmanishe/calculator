"use strict";

const numberButtons = document.querySelectorAll(".calculator__button_number");
const sectionOne = document.querySelectorAll("calculator__segment_three");
const numberOne = document.querySelector(".calculator__button_one");
const numberTwo = document.querySelector(".calculator__button_two");
const numberThree = document.querySelector(".calculator__button_three");
const numberFour = document.querySelector(".calculator__button_four");
const numberFive = document.querySelector(".calculator__button_five");
const numberSix = document.querySelector(".calculator__button_six");
const numberSeven = document.querySelector(".calculator__button_seven");
const numberEight = document.querySelector(".calculator__button_eight");
const numberNine = document.querySelector(".calculator__button_nine");
const numberZero = document.querySelector(".calculator__button_zero");
const dot = document.querySelector(".calculator__button_dot");

const buttonPlus = document.querySelector(".calculator__button_plus");
const buttonMinus = document.querySelector(".calculator__button_minus");
const buttonX = document.querySelector(".calculator__button_x");
const buttonDivide = document.querySelector(".calculator__button_divide");
const buttonPercent = document.querySelector(".calculator__button_percent");
const buttonPower = document.querySelector(".calculator__button_power");
// const buttonRootSq = document.querySelector(".calculator__button_square-root");
const buttonBack = document.querySelector(".calculator__button_backwards");
const buttonClear = document.querySelector(".calculator__button_clear");
const plusMinusBtn = document.querySelector(".calculator__button_minus-plus");

const equal = document.querySelector(".calculator__button_equal");

let buttonsCalc = [
  buttonPlus,
  buttonMinus,
  buttonX,
  buttonPercent,
  buttonDivide,
  buttonPower,
  // buttonRootSq,
];

buttonsCalc.forEach((e) =>
  e.addEventListener("click", () =>
    screenTwo.setAttribute("firstStrokeBlocked", "")
  )
);

let buttons = [
  numberOne,
  numberTwo,
  numberThree,
  numberFour,
  numberFive,
  numberSix,
  numberSeven,
  numberEight,
  numberNine,
  numberZero,
  dot,
];

function button(event) {
  let valueToCalcLength = parseInt(
    screenOne.getAttribute("value").trim().length,
    10
  );
  let maxLengthLimit = parseInt(screenOne.getAttribute("maxlength"), 10);
  if (valueToCalcLength < maxLengthLimit) {
    if (event.target.closest(".calculator__button_one")) {
      let value = screenOne.getAttribute("value");
      function numberOne() {
        screenOne.setAttribute("value", value + 1);
      }
      numberOne();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_two")) {
      let value = screenOne.getAttribute("value");
      function numberTwo() {
        screenOne.setAttribute("value", value + 2);
      }
      numberTwo();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_three")) {
      let value = screenOne.getAttribute("value");
      function numberThree() {
        screenOne.setAttribute("value", value + 3);
      }
      numberThree();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_four")) {
      let value = screenOne.getAttribute("value");
      function numberFour() {
        screenOne.setAttribute("value", value + 4);
      }
      numberFour();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_five")) {
      let value = screenOne.getAttribute("value");
      function numberFive() {
        screenOne.setAttribute("value", value + 5);
      }
      numberFive();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_six")) {
      let value = screenOne.getAttribute("value");
      function numberSix() {
        screenOne.setAttribute("value", value + 6);
      }
      numberSix();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_seven")) {
      let value = screenOne.getAttribute("value");
      function numberSeven() {
        screenOne.setAttribute("value", value + 7);
      }
      numberSeven();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_eight")) {
      let value = screenOne.getAttribute("value");
      function numberEight() {
        screenOne.setAttribute("value", value + 8);
      }
      numberEight();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_nine")) {
      let value = screenOne.getAttribute("value");
      function numberNine() {
        screenOne.setAttribute("value", value + 9);
      }
      numberNine();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_zero")) {
      let value = screenOne.getAttribute("value");
      function numberZero() {
        screenOne.setAttribute("value", value + 0);
      }
      numberZero();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_dot")) {
      let value = screenOne.getAttribute("value");
      function dot() {
        screenOne.setAttribute("value", value + ".");
      }
      dot();
      console.log(value);
    }
  }
  //

  event.preventDefault();
}

function buttonSecondInput(event) {
  let valueToCalcLength = parseInt(
    screenThree.getAttribute("value").trim().length,
    10
  );
  let maxLengthLimit = parseInt(screenThree.getAttribute("maxlength"), 10);
  if (maxLengthLimit > valueToCalcLength) {
    if (event.target.closest(".calculator__button_one")) {
      let value = screenThree.getAttribute("value");
      function numberOne() {
        screenThree.setAttribute("value", value + 1);
      }
      numberOne();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_two")) {
      let value = screenThree.getAttribute("value");
      function numberTwo() {
        screenThree.setAttribute("value", value + 2);
      }
      numberTwo();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_three")) {
      let value = screenThree.getAttribute("value");
      function numberThree() {
        screenThree.setAttribute("value", value + 3);
      }
      numberThree();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_four")) {
      let value = screenThree.getAttribute("value");
      function numberFour() {
        screenThree.setAttribute("value", value + 4);
      }
      numberFour();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_five")) {
      let value = screenThree.getAttribute("value");
      function numberFive() {
        screenThree.setAttribute("value", value + 5);
      }
      numberFive();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_six")) {
      let value = screenThree.getAttribute("value");
      function numberSix() {
        screenThree.setAttribute("value", value + 6);
      }
      numberSix();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_seven")) {
      let value = screenThree.getAttribute("value");
      function numberSeven() {
        screenThree.setAttribute("value", value + 7);
      }
      numberSeven();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_eight")) {
      let value = screenThree.getAttribute("value");
      function numberEight() {
        screenThree.setAttribute("value", value + 8);
      }
      numberEight();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_nine")) {
      let value = screenThree.getAttribute("value");
      function numberNine() {
        screenThree.setAttribute("value", value + 9);
      }
      numberNine();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_zero")) {
      let value = screenThree.getAttribute("value");
      function numberZero() {
        screenThree.setAttribute("value", value + 0);
      }
      numberZero();
      console.log(value);
    }
    //
    if (event.target.closest(".calculator__button_dot")) {
      let value = screenThree.getAttribute("value");
      function dot() {
        screenThree.setAttribute("value", value + ".");
      }
      dot();
      console.log(value);
    }
  }
}

function removePrevious() {
  if (screenTwo.hasAttribute("minusIsHere")) {
    screenTwo.removeAttribute("minusIsHere");
  } else if (screenTwo.hasAttribute("xIsHere")) {
    screenTwo.removeAttribute("xIsHere");
  } else if (screenTwo.hasAttribute("plusIsHere")) {
    screenTwo.removeAttribute("plusIsHere");
  } else if (screenTwo.hasAttribute("divideIsHere")) {
    screenTwo.removeAttribute("divideIsHere");
  } else if (screenTwo.hasAttribute("percentIsHere")) {
    screenTwo.removeAttribute("percentIsHere");
  } else if (screenTwo.hasAttribute("powerIsHere")) {
    screenTwo.removeAttribute("powerIsHere");
  }
}

function clear() {
  removePrevious();
  screens.forEach((element) => element.removeAttribute("value"));
  screenThree.setAttribute("value", "");
  screenOne.setAttribute("value", "");
  buttons.forEach((element) =>
    element.removeEventListener("click", buttonSecondInput)
  );
  buttons.forEach((element) => element.addEventListener("click", button));
}
let clearAll = buttonClear.addEventListener("click", clear);
