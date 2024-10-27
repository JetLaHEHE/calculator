let num1 = 0;
let operator = '';
let num2 = 0;

let display;

let operators = [];
let oneDot = false;

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
            const rounded = Math.round((num1 / num2) * 10) / 10
            result = rounded;
            break;
    }
    return result;
}

const equalsBtn = document.querySelector('#equals');

document.addEventListener("click", function(evnt){
    let id = evnt.target.id;

    display = document.querySelector('.displayNumber h1');

    let previousNumber = evnt.target.id.split('-')[1];

    if(previousNumber?.length == 1) {
        console.log(display.textContent);
        display.textContent += previousNumber;
    }

    

    switch(id) {
        case 'btn-Equals':
            oneDot = false;
            const content = display.textContent;
            const contentSplit = content.split(' ');

            if(contentSplit[0] === 0 || contentSplit[2] == 0) {
                display.textContent = 'ERROR: Dividing by zero.'
                break;
            }
            
            display.textContent = operate
            (Number(contentSplit[0]), contentSplit[1], Number(contentSplit[2]));
            break;
        case 'btn-Clear':
            oneDot = false;
            display.textContent = '';
            break;
        case 'btn-divide':
            display.textContent += ' / ';
            break;
        case 'btn-multiply':
            display.textContent += ' * ';
            break;
        case 'btn-add':
            display.textContent += ' + ';
            break;
        case 'btn-subtract':
            display.textContent += ' - ';
            break;
        case 'btn-dot':
            if(!oneDot) {
                oneDot = true;
                display.textContent += '.';
            }
            break;
        case 'btn-backspace':
            display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    }
});

