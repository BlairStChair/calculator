function add(a, b){
    let additionArray = [];
    additionArray[0] = parseInt(a);
    additionArray[1] = parseInt(b);
    let sum = additionArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);
    return sum;
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

let firstNumber = 0;
let firstNumberLength = -1;
let operator = '';
let secondNumber = 0;
let secondNumberLength = 0;
let result = 0;
let equationArray = [];

let operatorClickCounter = 0;

function operate(){
    const num1 = parseInt(firstNumber, 10);
    const num2 = parseInt(secondNumber, 10);
    
    if(operator === '+'){
        return add(num1, num2);
    } else if(operator === '-'){
        return subtract(num1, num2);
    } else if(operator === '*'){
        return multiply(num1, num2);
    } else if(operator === '/'){
        return divide(num1, num2);
    }
}

const display = document.querySelector("#display");

const output = document.querySelector("#output");
output.addEventListener("click", () =>{
    firstNumberLength = equationArray.reduce((acc, curr) => {
        if (acc.stop || typeof curr !== 'number') {
            acc.stop = true;
            return acc;
        }
        acc.length++;
        return acc;
    }, { length: 0, stop: false }).length;

    secondNumberLength = equationArray.length - (firstNumberLength + 1);
    
    firstNumber = parseInt(equationArray.slice(0, firstNumberLength).join(''));
    secondNumber = parseInt(equationArray.slice(firstNumberLength + 1, equationArray.length).join(''));

    if(equationArray[0] === "+" || equationArray[0] === "-" || equationArray[0] === "*" || equationArray[0] === "/"){
        display.style.color = "red";
        display.textContent = "You can't start with an operator!";
    }else{
        display.textContent = operate();
        result = operate();
        equationArray = [result];
        firstNumber = result;
        secondNumber = 0;
        operator = '';
        operatorClickCounter = 0;
    }
});

let additionD = document.createElement("p");

const addition = document.querySelector("#a");
addition.addEventListener("click", () =>{
    if(operatorClickCounter > 0){
        display.textContent = "";
        firstNumberLength = equationArray.reduce((acc, curr) => {
            if (acc.stop || typeof curr !== 'number') {
                acc.stop = true;
                return acc;
            }
            acc.length++;
            return acc;
        }, { length: 0, stop: false }).length;
    
        secondNumberLength = equationArray.length - (firstNumberLength + 1);
        
        firstNumber = parseInt(equationArray.slice(0, firstNumberLength).join(''));
        secondNumber = parseInt(equationArray.slice(firstNumberLength + 1, equationArray.length).join(''));
    
        
        additionD.textContent = firstNumber + secondNumber;
        display.appendChild(additionD);
        
            // display.textContent = firstNumber + secondNumber;
            result = firstNumber + secondNumber;

            console.log(display.textContent);
            console.log(firstNumber);
            console.log(secondNumber);
            
            // const additionD = document.createElement("p");
            // additionD.classList.add("numbersClass"); 
             
            //  additionD.textContent = "+";
            //  display.appendChild(additionD);
             equationArray = [];
             equationArray[0] = result;
             equationArray.push("+");


             console.log(equationArray.toString());
             operatorClickCounter++;
    }
    else{
        const additionD = document.createElement("p");
        additionD.textContent = "+";
        display.appendChild(additionD);
        equationArray.push("+");
        operator = "+";
        operatorClickCounter++;
    }
});

const subtraction = document.querySelector("#s");
subtraction.addEventListener("click", () =>{
    const subtractionD = document.createElement("p");
    subtractionD.classList.add("numbersClass"); 
    subtractionD.textContent = "-";
    display.appendChild(subtractionD);
    equationArray.push("-");
    operator = "-";
    operatorClickCounter++;
});

const multiplying = document.querySelector("#m");
multiplying.addEventListener("click", () =>{
    const multiplyingD = document.createElement("p");
    multiplyingD.classList.add("numbersClass"); 
    multiplyingD.textContent = "*";
    display.appendChild(multiplyingD);
    equationArray.push("*");
    operator = "*";
    operatorClickCounter++;
});

const division = document.querySelector("#d");
division.addEventListener("click", () =>{
    const divisionD = document.createElement("p");
    divisionD.classList.add("numbersClass"); 
    divisionD.textContent = "/";
    display.appendChild(divisionD);
    equationArray.push("/");
    operator = "/";
    operatorClickCounter++;
});

const zero = document.querySelector("#zero");
zero.addEventListener("click", () =>{
    const zeroD = document.createElement("p");
    zeroD.classList.add("numbersClass"); 
    zeroD.textContent = 0;
    display.appendChild(zeroD);
    equationArray.push(0);
    firstNumberLength++;
});

const one = document.querySelector("#one");
one.addEventListener("click", () =>{
    const oneD = document.createElement("p");
    oneD.classList.add("numbersClass"); 
    oneD.textContent = 1;
    display.appendChild(oneD);
    equationArray.push(1);
    firstNumberLength++;
});

const two = document.querySelector("#two");
two.addEventListener("click", () =>{
    const twoD = document.createElement("p");
    twoD.classList.add("numbersClass"); 
    twoD.textContent = 2;
    display.appendChild(twoD);
    equationArray.push(2);
    firstNumberLength++;
});

const three = document.querySelector("#three");
three.addEventListener("click", () =>{
    const threeD = document.createElement("p");
    threeD.classList.add("numbersClass"); 
    threeD.textContent = 3;
    display.appendChild(threeD);
    equationArray.push(3);
    firstNumberLength++;
});

const four = document.querySelector("#four");
four.addEventListener("click", () =>{
    const fourD = document.createElement("p");
    fourD.classList.add("numbersClass"); 
    fourD.textContent = 4;
    display.appendChild(fourD);
    equationArray.push(4);
    firstNumberLength++;
});

const five = document.querySelector("#five");
five.addEventListener("click", () =>{
    const fiveD = document.createElement("p");
    fiveD.classList.add("numbersClass"); 
    fiveD.textContent = 5;
    display.appendChild(fiveD);
    equationArray.push(5);
    firstNumberLength++;
});

const six = document.querySelector("#six");
six.addEventListener("click", () =>{
    const sixD = document.createElement("p");
    sixD.classList.add("numbersClass"); 
    sixD.textContent = 6;
    display.appendChild(sixD);
    equationArray.push(6);
    firstNumberLength++;
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", () =>{
    const sevenD = document.createElement("p");
    sevenD.classList.add("numbersClass"); 
    sevenD.textContent = 7;
    display.appendChild(sevenD);
    equationArray.push(7);
    firstNumberLength++;
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", () =>{
    const eightD = document.createElement("p");
    eightD.classList.add("numbersClass"); 
    eightD.textContent = 8;
    display.appendChild(eightD);
    equationArray.push(8);
    firstNumberLength++;
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", () =>{
    additionD.textContent = "";
    const nineD = document.createElement("p");
    nineD.textContent = 9;
    display.appendChild(nineD);
    equationArray.push(9);
    firstNumberLength++;

});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () =>{
    display.textContent = "";
    firstNumber = 0;
    firstNumberLength = 0;
    secondNumber = 0
    secondNumberLength = 0;
    operatorClickCounter = 0;
    equationArray = [];
});



