const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');

let calculation = [];
let aCalc = '';

function calculate(button) {
    const value = button.textContent;
    if (!aCalc && ['/', '+', '*', '-', '='].includes(value)) {
        calculation = [];
        aCalc = '';
        screenDisplay.textContent = '0';
    } else if (value == "CLEAR") {
        calculation = [];
        aCalc = '';
        screenDisplay.textContent = '0';
    } else if (value == "=") {
        aCalc = calculation.join('');
        const result = evaluateExpression(aCalc);
        screenDisplay.textContent = result;
    } else {
        calculation.push(value);
        aCalc = calculation.join('');
        screenDisplay.textContent = aCalc;
    }
}

function evaluateExpression(expression) {
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Error';
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)));
