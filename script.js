"use strict";
const screenOne = document.querySelector(".input-one");
const screenTwo = document.querySelector(".input-two");
const screenThree = document.querySelector(".input-three");
const screenFour = document.querySelector(".input-four");
const screenFive = document.querySelector(".input-five");

let screens = [screenOne, screenTwo, screenThree];

buttons.forEach((element) => element.addEventListener("click", button));

function plus() {
  if (!screenTwo.hasAttribute("plusIsHere")) {
    removePrevious();
    screenTwo.setAttribute("plusIsHere", "");
    buttons.forEach((element) => element.removeEventListener("click", button));
    screenTwo.setAttribute("value", "+");
    buttons.forEach((element) =>
      element.addEventListener("click", buttonSecondInput)
    );
  } else if (screenTwo.hasAttribute("plusIsHere")) {
    removePrevious();
    screenTwo.removeAttribute("plusIsHere");
    buttons.forEach((element) => element.addEventListener("click", button));
    screenTwo.removeAttribute("value");
    buttons.forEach((element) =>
      element.removeEventListener("click", buttonSecondInput)
    );
  }
}
let plusButton = buttonPlus.addEventListener("click", plus);

function minus() {
  if (!screenTwo.hasAttribute("minusIsHere")) {
    removePrevious();
    screenTwo.setAttribute("minusIsHere", "");
    screenTwo.setAttribute("value", "-");
    buttons.forEach((element) => element.removeEventListener("click", button));
    buttons.forEach((element) =>
      element.addEventListener("click", buttonSecondInput)
    );
  } else if (screenTwo.hasAttribute("minusIsHere")) {
    removePrevious();
    screenTwo.removeAttribute("minusIsHere");
    screenTwo.removeAttribute("value");
    buttons.forEach((element) => element.addEventListener("click", button));
    buttons.forEach((element) =>
      element.removeEventListener("click", buttonSecondInput)
    );
  }
}
let minusButton = buttonMinus.addEventListener("click", minus);

function xXX() {
  if (!screenTwo.hasAttribute("xIsHere")) {
    removePrevious();
    screenTwo.setAttribute("value", "*");
    screenTwo.setAttribute("xIsHere", "");
    buttons.forEach((element) => element.removeEventListener("click", button));
    buttons.forEach((element) =>
      element.addEventListener("click", buttonSecondInput)
    );
  } else if (screenTwo.hasAttribute("xIsHere")) {
    removePrevious();
    buttons.forEach((element) => element.addEventListener("click", button));
    screenTwo.removeAttribute("value");
    screenTwo.removeAttribute("xIsHere");
    buttons.forEach((element) =>
      element.removeEventListener("click", buttonSecondInput)
    );
  }
}
let xButton = buttonX.addEventListener("click", xXX);

function divide() {
  if (!screenTwo.hasAttribute("divideIsHere")) {
    removePrevious();
    screenTwo.setAttribute("divideIsHere", "");
    screenTwo.setAttribute("value", "÷");
    buttons.forEach((element) => element.removeEventListener("click", button));
    buttons.forEach((element) =>
      element.addEventListener("click", buttonSecondInput)
    );
  } else if (screenTwo.hasAttribute("divideIsHere")) {
    removePrevious();
    screenTwo.removeAttribute("divideIsHere");
    screenTwo.removeAttribute("value", "÷");
    buttons.forEach((element) => element.removeEventListener("click", button));
    buttons.forEach((element) =>
      element.addEventListener("click", buttonSecondInput)
    );
  }
}
let divideButton = buttonDivide.addEventListener("click", divide);

function percent() {
  if (!screenTwo.hasAttribute("percentIsHere")) {
    removePrevious();
    screenTwo.setAttribute("percentIsHere", "");
    screenTwo.setAttribute("value", "%");
    buttons.forEach((element) => element.removeEventListener("click", button));
    buttons.forEach((element) =>
      element.addEventListener("click", buttonSecondInput)
    );
  } else if (screenTwo.hasAttribute("percentIsHere")) {
    removePrevious();
    screenTwo.removeAttribute("percentIsHere");
    screenTwo.removeAttribute("value", "%");
    buttons.forEach((element) => element.removeEventListener("click", button));
    buttons.forEach((element) =>
      element.addEventListener("click", buttonSecondInput)
    );
  }
}

let percentButton = buttonPercent.addEventListener("click", percent);

function backwards() {
  if (!screenTwo.hasAttribute("firstStrokeBlocked")) {
    let value = screenOne.getAttribute("value");
    let finalValue = value.slice(0, -1);
    screenOne.setAttribute("value", `${finalValue}`);
  } else if (screenTwo.hasAttribute("firstStrokeBlocked")) {
    let value = screenThree.getAttribute("value");
    let finalValue = value.slice(0, -1);
    screenThree.setAttribute("value", `${finalValue}`);
  }
}

let backButton = buttonBack.addEventListener("click", backwards);

function plusMinus() {
  if (!screenTwo.hasAttribute("firstStrokeBlocked")) {
    console.log("Work");
    let number = parseInt(screenOne.getAttribute("value"), 10);
    console.log(number);
    if (number >= 0) {
      let finalNum = number * -1;
      screenOne.setAttribute("value", finalNum);
    } else if (numberOne < 0) {
      let finalNum = number * -1;
      screenOne.setAttribute("value", finalNum);
    }
  } else if (screenTwo.hasAttribute("firstStrokeBlocked")) {
    console.log("Work");
    let number = parseInt(screenThree.getAttribute("value"), 10);
    if (number >= 0) {
      let finalNum = number * -1;
      screenThree.setAttribute("value", finalNum);
    } else if (numberOne < 0) {
      let finalNum = number * -1;
      screenThree.setAttribute("value", finalNum);
    }
  }
}

let btnMinusPlus = plusMinusBtn.addEventListener("click", plusMinus);

function power() {
  if (!screenTwo.hasAttribute("powerIsHere")) {
    removePrevious();
    screenTwo.setAttribute("powerIsHere", "");
    screenTwo.setAttribute("value", "^");
    buttons.forEach((element) => element.removeEventListener("click", button));
    buttons.forEach((element) =>
      element.addEventListener("click", buttonSecondInput)
    );
  } else if (screenTwo.hasAttribute("powerIsHere")) {
    removePrevious();
    screenTwo.removeAttribute("powerIsHere");
    screenTwo.removeAttribute("value", "^");
    buttons.forEach((element) => element.removeEventListener("click", button));
    buttons.forEach((element) =>
      element.addEventListener("click", buttonSecondInput)
    );
  }
}

let powerButton = buttonPower.addEventListener("click", power);

function equalTo() {
  if (screenTwo.hasAttribute("plusIsHere")) {
    let numberForCalcOne = Number(screenOne.getAttribute("value"));
    let numberForCalcTwo = Number(screenThree.getAttribute("value"));
    function calc() {
      let result = (numberForCalcOne += numberForCalcTwo);
      console.log(result);
      screenOne.removeAttribute("value");
      screenTwo.removeAttribute("value");
      screenThree.removeAttribute("value");
      screenOne.setAttribute("value", `${result}`);
    }
    calc();
    buttons.forEach((element) => element.addEventListener("click", button));
    buttons.forEach((element) =>
      element.removeEventListener("click", buttonSecondInput)
    );
    screenTwo.removeAttribute("plusIsHere");
  } else if (screenTwo.hasAttribute("minusIsHere")) {
    let numberForCalcOne = Number(screenOne.getAttribute("value"));
    let numberForCalcTwo = Number(screenThree.getAttribute("value"));
    function calc() {
      let result = (numberForCalcOne -= numberForCalcTwo);
      console.log(result);
      screenOne.removeAttribute("value");
      screenTwo.removeAttribute("value");
      screenThree.removeAttribute("value");
      screenOne.setAttribute("value", `${result}`);
    }
    calc();
    buttons.forEach((element) => element.addEventListener("click", button));
    buttons.forEach((element) =>
      element.removeEventListener("click", buttonSecondInput)
    );
    screenTwo.removeAttribute("minusIsHere");
  } else if (screenTwo.hasAttribute("xIsHere")) {
    let numberForCalcOne = Number(screenOne.getAttribute("value"));
    let numberForCalcTwo = Number(screenThree.getAttribute("value"));
    function calc() {
      let result = (numberForCalcOne *= numberForCalcTwo);
      console.log(result);
      screenOne.removeAttribute("value");
      screenTwo.removeAttribute("value");
      screenThree.removeAttribute("value");
      screenOne.setAttribute("value", `${result}`);
    }
    calc();
    buttons.forEach((element) => element.addEventListener("click", button));
    buttons.forEach((element) =>
      element.removeEventListener("click", buttonSecondInput)
    );
    screenTwo.removeAttribute("xIsHere");
  } else if (screenTwo.hasAttribute("divideIsHere")) {
    let numberForCalcOne = Number(screenOne.getAttribute("value"));
    let numberForCalcTwo = Number(screenThree.getAttribute("value"));
    function calc() {
      let result = (numberForCalcOne /= numberForCalcTwo);
      console.log(result);
      screenOne.removeAttribute("value");
      screenTwo.removeAttribute("value");
      screenThree.removeAttribute("value");
      screenOne.setAttribute("value", `${result}`);
    }
    calc();
    buttons.forEach((element) => element.addEventListener("click", button));
    buttons.forEach((element) =>
      element.removeEventListener("click", buttonSecondInput)
    );
    screenTwo.removeAttribute("divideIsHere");
  } else if (screenTwo.hasAttribute("percentIsHere")) {
    let numberForCalcOne = Number(screenOne.getAttribute("value"));
    let numberForCalcTwo = Number(screenThree.getAttribute("value"));
    function calc() {
      let result = (numberForCalcOne / 100) * numberForCalcTwo;
      console.log(result);
      screenOne.removeAttribute("value");
      screenTwo.removeAttribute("value");
      screenThree.removeAttribute("value");
      screenOne.setAttribute("value", `${result}`);
    }
    calc();
    buttons.forEach((element) => element.addEventListener("click", button));
    buttons.forEach((element) =>
      element.removeEventListener("click", buttonSecondInput)
    );
    screenTwo.removeAttribute("firstStrokeBlocked");
    screenTwo.removeAttribute("percentIsHere");
  } else if (screenTwo.hasAttribute("powerIsHere")) {
    let numberForCalcOne = Number(screenOne.getAttribute("value"));
    let numberForCalcTwo = Number(screenThree.getAttribute("value"));
    function calc() {
      let result = Math.pow(numberForCalcOne, numberForCalcTwo);
      console.log(result);
      screenOne.removeAttribute("value");
      screenTwo.removeAttribute("value");
      screenThree.removeAttribute("value");
      screenOne.setAttribute("value", `${result}`);
    }
    calc();
    buttons.forEach((element) => element.addEventListener("click", button));
    buttons.forEach((element) =>
      element.removeEventListener("click", buttonSecondInput)
    );
    screenTwo.removeAttribute("powerIsHere");
    screenTwo.removeAttribute("firstStrokeBlocked");
  }

  screenThree.setAttribute("value", "");
}

let equalButton = equal.addEventListener("click", equalTo);

// buttonPlus.addEventListener("click", function plus() {
//   numberOne.addEventListener("click", button);
//   numberTwo.addEventListener("click", button);
//   numberThree.addEventListener("click", button);
//   screenTwo.setAttribute("value", "");
//   buttonPlus.removeEventListener("click", plus);
// });
