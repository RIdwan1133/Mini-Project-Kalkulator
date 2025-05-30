const displayHistory = document.querySelector(".display-history");
const display = document.querySelector(".display-input");
const tempResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const clearAll = document.querySelector(".all-clear");
const clearLast = document.querySelector(".last-entity-clear");
const equal = document.querySelector(".equal");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display.innerText = dis2Num;
  });
});

operations.forEach((op) => {
  op.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;

    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }

    clearVar(operationName);
    lastOperation = operationName;
  });
});

function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  displayHistory.innerText = dis1Num;
  display.innerText = "";
  dis2Num = "";
  tempResult.innerText = result;
}

function mathOperation() {
  if (lastOperation === "X") {
    result *= parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result += parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result -= parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result /= parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result %= parseFloat(dis2Num);
  }
}

equal.addEventListener("click", () => {
  if (!dis1Num || !dis2Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display.innerText = result;
  tempResult.innerText = "";
  dis2Num = result;
  dis1Num = "";
});

clearAll.addEventListener("click", () => {
  dis1Num = "";
  dis2Num = "";
  haveDot = false;
  displayHistory.innerText = "";
  display.innerText = "0";
  tempResult.innerText = "";
  result = null;
  lastOperation = "";
});

clearLast.addEventListener("click", () => {
  dis2Num = "";
  display.innerText = "0";
});
