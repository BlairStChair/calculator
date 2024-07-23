document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('#buttons button');

    let firstNumber = '';
    let operator = '';
    let newInput = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            if (value === 'C') {
                display.value = '';
                firstNumber = '';
                operator = '';
                newInput = false;
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (firstNumber && operator && !newInput) {
                    try {
                        firstNumber = eval(firstNumber + operator + display.value).toString();
                        display.value = firstNumber;
                    } catch {
                        display.value = 'Error';
                        firstNumber = '';
                    }
                } else {
                    firstNumber = display.value;
                }
                operator = value;
                newInput = true;
            } else if (value === '=') {
                if (firstNumber && operator) {
                    try {
                        display.value = eval(firstNumber + operator + display.value).toString();
                    } catch {
                        display.value = 'Error';
                    }
                    firstNumber = '';
                    operator = '';
                    newInput = false;
                }
            } else {
                if (newInput) {
                    display.value = value;
                    newInput = false;
                } else {
                    display.value += value;
                }
            }
        });
    });
});


