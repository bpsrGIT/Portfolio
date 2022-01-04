const displayElement1 = document.querySelector('.cal-display1');
const displayElement2 = document.querySelector('.cal-display2');
const tempResultElement = document.querySelector('.cal-temp-result');
const numbersElement = document.querySelector('.cal-number');
const operationElement = document.querySelector('.cal-operation');
const allClearElement = document.querySelector('.cal-all-clear');
const lastEntryClearElement = document.querySelector('.cal-last-entry-clear');
const equalElement = document.querySelector('.cal-equal');
const dotElement = document.querySelector('.cal-dot');

let miniDisplay = '';
let mainDisplay = '';
let tempResult = null;
let lastOperation = '';
let haveDot = false;

numbersElement.forEach( number => {
    number.addEventListener('click', (e) => {
        if( e.target.innerText === '.' && !haveDot ){
            haveDot = true;
        } else if(e.target.innerText === '.' && haveDot){
            return;
        }
        mainDisplay += e.target.innerText;
        displayElement2.innerText = mainDisplay;
    })
})

