const digitBtns = document.querySelectorAll(".digit");
const opBtns = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
let display = document.querySelector("#display");
let a = 0;
let operator;
let b;

function enterDigit() {
    display.textContent += this.textContent;
}

digitBtns.forEach((btn) => btn.addEventListener("click", enterDigit));

function clickOperator() {
    if (a === 0) {
        a = Number(display.textContent);
        display.textContent = "";
        operator = this.textContent;
    } else {
        b = Number(display.textContent);
        display.textContent = operate(a, operator, b);
    }
}

opBtns.forEach((btn) => btn.addEventListener("click", clickOperator));

equals.addEventListener("click", calculate)

function calculate() {
    b = Number(display.textContent);
    display.textContent = operate(a, operator, b);
}

clearBtn.addEventListener("click", clearCalc)

function clearCalc() {
    a = 0;
    b = 0;
    display.textContent = "0";
}

function operate(a, operator, b){
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

/*
operate = (a, operator, b) => {
    let result = 0;
    switch(operator) {
        case add:
            result = a + b;
            break;
        case subtract:
            result = a - b;
            break;
        case multiply:
            result = a * b;
            break;
        case divide:
            result = a / b;
            break;
    }
    return result;
}
*/



/* add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b; */