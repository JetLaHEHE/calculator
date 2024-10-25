let num1 = 0;
let operator = '';
let num2 = 0;

function operate(num1, operator, num2) {
    let result = 0;

    switch(operator) {
        case '-':
            result = num1 - num2;
            break;
        case '+':
            result = num1 + num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
}

const equalsBtn = document.querySelector('#equals');

document.addEventListener("click", function(evnt){
    const display = document.querySelector('.displayNumber h1');
    let previousNumber = evnt.target.id.split('-')[1];
    display.textContent = previousNumber;
});

