document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstNumber = '';
    
    const updateDisplay = (value) => {
        display.textContent = value;
    };

    const calculate = () => {
        if (firstNumber && operator && currentInput) {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(currentInput);
            let result;

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    return;
            }

            updateDisplay(result);
            firstNumber = result;
            currentInput = '';
            operator = '';
        }
    };

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (button.classList.contains('operator')) {
                if (currentInput) {
                    calculate();
                }
                operator = value;
                firstNumber = display.textContent;
                currentInput = '';
            } else if (button.classList.contains('equal')) {
                calculate();
            } else if (button.classList.contains('clear')) {
                currentInput = '';
                operator = '';
                firstNumber = '';
                updateDisplay('');
            } else {
                currentInput += value;
                updateDisplay(currentInput);
            }
        });
    });
});