const digitBtns = document.querySelectorAll(".digit");
const decimalBtn = document.querySelector(".decimal");
const opBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
let display = document.querySelector("#display");
let a;
let operator;
let b;

function enterDigit() {  
    if (typeof a !== 'undefined' && typeof operator === 'undefined') {
            a = undefined;
        }
        if (typeof b === 'undefined') {
            display.textContent = this.textContent;
        } else if (display.textContent == '0' && this.textContent == '0') {
            console.log(this.textContent); 
        } else {
            display.textContent += this.textContent;
            console.log(this.textContent);
        }
        b = Number(display.textContent);
}

function shouldAddDecimal() {
    if (typeof b === 'undefined' && typeof operator === 'undefined') {
        return true
    } else if (display.textContent.slice(-1) != '.' && b - Math.floor(b) == 0) {
        return true
    } else {
        return false;
    }
}

function addDecimal() {
    if (typeof b === 'undefined') {
        display.textContent = '0.'
    } else {
        display.textContent += '.';
    }
    b = Number(display.textContent);
}

function clickOperator() {
    if (typeof b === 'undefined') {
        operator = this.textContent;
    } else if (typeof a === 'undefined') {
        a = b;
        b = undefined;
        operator = this.textContent;
    } else {
        a = operate(a, operator, b);
        display.textContent = a;
        b = undefined;
        operator = this.textContent;
    }
}

function calculate() {
    b = Number(display.textContent);
    display.textContent = operate(a, operator, b);
    a = Number(display.textContent);
    b = undefined;
    operator = undefined;
}

function clearCalc() {
    a = undefined;
    b = undefined;
    display.textContent = "0";
}

function operate(a, operator, b){
    if (operator == '/' && b == 0) {
        return 'You cannot divide by zero!';
    }
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

digitBtns.forEach((btn) => btn.addEventListener("click", enterDigit));
decimalBtn.addEventListener("click", () => shouldAddDecimal() ? addDecimal() : false);
opBtns.forEach((btn) => btn.addEventListener("click", clickOperator));
equalsBtn.addEventListener("click", calculate)
clearBtn.addEventListener("click", clearCalc)


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