function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

const firstNumber = 0;
const operator = '';
const secondNumber = 0;

function operate(){
    if(operator == '+'){
        return add(firstNumber, secondNumber);
    }
    else if(operator == '-'){
        return subtract(firstNumber, secondNumber);
    }
    else if(operator == '*'){
        return multiply(firstNumber, secondNumber);
    }
    else if(operator == '/'){
        return divide(firstNumber, secondNumber);
    }

}

const zero = document.querySelector("zero");
const one = document.querySelector("one");
const two = document.querySelector("two");
const three = document.querySelector("three");
const four = document.querySelector("four");
const five = document.querySelector("five");
const six = document.querySelector("six");
const seven = document.querySelector("seven");
const eight = document.querySelector("eight");
const nine = document.querySelector("nine");
const addition = document.querySelector("addition");
const substraction = document.querySelector("substraction");
const multiplying = document.querySelector("multiplying");
const division = document.querySelector("division");
const output = document.querySelector("output");
const clear = document.querySelector("clear");


