function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber = 0;
let operator = '';
let secondNumber = 0;
let result = 0;
let equationArray = [];
let operatorClickCounter = 0;
let clearOnNextInput = false;

function operate() {
    const num1 = parseInt(firstNumber, 10);
    const num2 = parseInt(secondNumber, 10);

    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

const display = document.querySelector("#display");

const output = document.querySelector("#output");
output.addEventListener("click", () => {
    firstNumber = parseInt(equationArray.join(''));
    const operatorIndex = equationArray.findIndex(el => isNaN(el));
    secondNumber = parseInt(equationArray.slice(operatorIndex + 1).join(''));
    
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        display.style.color = "red";
        display.textContent = "Invalid input!";
        return;
    }

    display.style.color = "black";
    result = operate();
    display.textContent = result;
    equationArray = [result];
    firstNumber = result;
    secondNumber = 0;
    operator = '';
    operatorClickCounter = 0;
    clearOnNextInput = true;
});

function handleOperator(op) {
    if (operatorClickCounter > 0) {
        firstNumber = parseInt(equationArray.join(''));
        const operatorIndex = equationArray.findIndex(el => isNaN(el));
        secondNumber = parseInt(equationArray.slice(operatorIndex + 1).join(''));

        result = operate();
        display.textContent = result;

        equationArray = [result];
        firstNumber = result;
        secondNumber = 0;
        operatorClickCounter = 0;
        clearOnNextInput = true;
    }

    if (!clearOnNextInput) {
        const operatorD = document.createElement("p");
        operatorD.classList.add("numbersClass");
        operatorD.textContent = op;
        display.appendChild(operatorD);
        equationArray.push(op);
        operator = op;
        operatorClickCounter++;
    }
}

const addition = document.querySelector("#a");
addition.addEventListener("click", () => handleOperator('+'));

const subtraction = document.querySelector("#s");
subtraction.addEventListener("click", () => handleOperator('-'));

const multiplying = document.querySelector("#m");
multiplying.addEventListener("click", () => handleOperator('*'));

const division = document.querySelector("#d");
division.addEventListener("click", () => handleOperator('/'));

const numberButtons = document.querySelectorAll("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine");
numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (clearOnNextInput) {
            display.textContent = "";
            equationArray = [];
            clearOnNextInput = false;
        }
        const numberD = document.createElement("p");
        numberD.classList.add("numbersClass");
        numberD.textContent = event.target.textContent;
        display.appendChild(numberD);
        equationArray.push(parseInt(event.target.textContent));
    });
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display.textContent = "";
    firstNumber = 0;
    secondNumber = 0;
    operatorClickCounter = 0;
    equationArray = [];
    clearOnNextInput = false;
});
