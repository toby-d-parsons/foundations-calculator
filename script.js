const digitBtns = document.querySelectorAll(".digit");
const decimalBtn = document.querySelector(".decimal");
const opBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const backspace = document.querySelector(".backspace-container");
let display = document.querySelector("#display");
let a;
let operator;
let b;

function shouldAddDigit() {
    if (display.textContent.length <= 16 || (typeof b == 'undefined' && typeof operator !== 'undefined')) {
        return true
    }
}

function enterDigit(num) {  
    if (typeof a !== 'undefined' && typeof operator === 'undefined') {
            a = undefined;
        }
        if (typeof b === 'undefined') {
            display.textContent = num;
        } else if (display.textContent == '0' && num == '0') {
            console.log(num); 
        } else {
            display.textContent += num;
            console.log(num);
        }
        b = Number(display.textContent);
}

function shouldBackspace() {
    if (typeof b !== 'undefined' && b !== 0 && display.textContent !== '0.') {
        return true
    } else {
        return false
    }
}

function removeLast() {
    display.textContent = display.textContent.slice(0, -1);
    b = Number(display.textContent);
    if (b == '') {
        b = undefined;
        display.textContent = '0';
    }
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

function clickOperator(op) {
    if (typeof a === 'undefined' && typeof b === 'undefined') {
        a = 0;
        operator = op;
    } else if (typeof b === 'undefined') {
        operator = op;
    } else if (typeof a === 'undefined') {
        a = b;
        b = undefined;
        operator = op;
    } else {
        a = operate(a, operator, b);
        display.textContent = a;
        b = undefined;
        operator = op;
    }
}

function calculate() {
    if (typeof a === 'undefined' && typeof b === 'undefined') {
        display.textContent = '0';
    } else if (typeof operator == 'undefined') {
        a = b;
        b = undefined;
    } else {
        b = Number(display.textContent);
        display.textContent = operate(a, operator, b);
        a = Number(display.textContent);
        b = undefined;
        operator = undefined;
    }
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

digitBtns.forEach((btn) => btn.addEventListener("click", function() {
    shouldAddDigit() ? enterDigit(btn.textContent) : false;
}));
decimalBtn.addEventListener("click", () => shouldAddDecimal() ? addDecimal() : false);
opBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        clickOperator(event.currentTarget.textContent);
    });
});
equalsBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", clearCalc);
backspace.addEventListener("click", () => shouldBackspace() ? removeLast() : false);

document.addEventListener("keydown", (event) => {
    switch(event.key) {
        case '.':
            shouldAddDecimal() ? addDecimal() : false;
            break;
        case 'Backspace':
            shouldBackspace() ? removeLast() : false;
            break;
        case 'Delete':
            clearCalc();
            break;
        case '=':
            calculate();
            break;
        case 'Enter':
            calculate();
            break;
        case '+':
            clickOperator(event.key);
            break;
        case '-':
            clickOperator(event.key);
            break;
        case '*':
            clickOperator(event.key);
            break;
        case '/':
            clickOperator(event.key);
            break;
        case '1':
            shouldAddDigit() ? enterDigit(event.key) : false;
            break;
        case '2':
            shouldAddDigit() ? enterDigit(event.key) : false;
            break;
        case '3':
            shouldAddDigit() ? enterDigit(event.key) : false;
            break;
        case '4':
            shouldAddDigit() ? enterDigit(event.key) : false;
            break;
        case '5':
            shouldAddDigit() ? enterDigit(event.key) : false;
            break;
        case '6':
            shouldAddDigit() ? enterDigit(event.key) : false;
            break;
        case '7':
            shouldAddDigit() ? enterDigit(event.key) : false;
            break;
        case '8':
            shouldAddDigit() ? enterDigit(event.key) : false;
            break;
        case '9':
            shouldAddDigit() ? enterDigit(event.key) : false;
            break;
        case '0':
            shouldAddDigit() ? enterDigit(event.key) : false;
            break;
    }
})