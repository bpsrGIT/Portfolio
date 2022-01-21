const displayElement1 = document.querySelector('.cal-display1');
const displayElement2 = document.querySelector('.cal-display2');
const tempResultElement = document.querySelector('.cal-temp-result');
const numbersElement = document.querySelectorAll('.cal-number');
const operationElement = document.querySelectorAll('.cal-operation');
const allClearElement = document.querySelector('.cal-all-clear');
const lastEntryClearElement = document.querySelector('.cal-last-entry-clear');
const equalElement = document.querySelector('.cal-equal');
const dotElement = document.querySelector('.cal-dot');

let miniDisplay = '';
let mainDisplay = '';
let tempResult = null;
let lastOperation = '';
let haveDot = false;

numbersElement.forEach(number => {
    number.addEventListener('click', (e) => {

        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return
        };
        mainDisplay += e.target.innerText;
        displayElement2.innerText = mainDisplay;
    });
});

operationElement.forEach( operation => {
    operation.addEventListener('click', (e) => {
        if(!mainDisplay){
            result;
        }
        haveDot = false;
        const operation = e.target.innerText;
        miniDisplay && mainDisplay && lastOperation ? mathOperation() : result = parseFloat(mainDisplay);
        clearVar(operation)
        lastOperation = operation;
    })
})

clearVar = (name = '') => {
    miniDisplay += mainDisplay + ' ' + name + ' ';
    displayElement1.innerText = miniDisplay;
    displayElement2.innerText = '';
    mainDisplay = '';
    tempResultElement.innerText = result;
}

mathOperation = () => {
    if(lastOperation === '/'){ result = Number(result / mainDisplay) }
    else if(lastOperation === 'X'){ result = Number(result * mainDisplay)}
    else if(lastOperation === '-'){ result = Number(result - mainDisplay)}
    else if(lastOperation === '+'){ result = Number(result) + Number(mainDisplay)}
    else if(lastOperation === '%'){ result = Number(result % mainDisplay)}
}

equalElement.addEventListener('click', (e) => {
    if(!miniDisplay || !mainDisplay) return;
    haveDot = false;
    mathOperation();
    clearVar();
    displayElement2.innerText = result;
    tempResultElement.innerText = '';
    mainDisplay = result;
    miniDisplay = '';
})

allClearElement.addEventListener('click', () => {
    displayElement1.innerText = '0';
    displayElement2.innerText = '0';
    mainDisplay = '';
    miniDisplay = '';
    tempResultElement.innerText = '0';
});

lastEntryClearElement.addEventListener('click', () => {
    displayElement2.innerText = '';
    mainDisplay = '';
})

window.addEventListener('keydown', (e) => {
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ){
        clickBtnElement(e.key);
    }else if(
        e.key === '/' ||
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%' 
    ){
        clickOperation(e.key)
    }else if(e.key === '*'){
        clickOperation('X')
    }else if(e.key == 'Enter' || e.key === '='){
        clickEqual();
    }
})

clickBtnElement = (key) => {
    numbersElement.forEach( button => {
        if(button.innerText === key){
            button.click();
        }
    })
}
clickOperation = (key) => {
    operationElement.forEach(button => {
        if(button.innerText === key){
            button.click();
        }
    })
}
clickEqual = () => {
    equalElement.click()
}