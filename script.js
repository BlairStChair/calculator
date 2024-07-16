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