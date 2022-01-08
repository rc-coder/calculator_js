//Selectores

const root = document.querySelector('.calculator__content');
const buttons = root.querySelector('.calculator__body');
const display = root.querySelector('#calculator__display');
const result = root.querySelector('#operation_');
const eraser = root.querySelector('.--border');

//Display

let num1 = [];
let num2 = [];
let operator = [];

const displayNum1 = ({ target }) => {
  if (
    target.className === '--fn' ||
    target.className === '--equal' ||
    target.className === '--clear' ||
    operator.length !== 0 ||
    result.innerHTML !== ''
  ) {
    return;
  } else if (target.className === '--border' && num1.includes('.')) {
    return;
  }
  num1 += target.innerHTML;
  display.innerHTML = `${num1}`;
};

const displayOp = ({ target }) => {
  if (
    target.className !== '--fn' ||
    target.className === '--clear' ||
    num1.length === 0 ||
    num2.length !== 0
  ) {
    return;
  }
  operator = target.innerHTML;
  display.innerHTML = [];
  display.innerHTML = `${num1} ${operator}`;
};

const displayNum2 = ({ target }) => {
  if (
    target.className === '--fn' ||
    target.className === '--equal' ||
    target.className === '--clear' ||
    num1.length === 0 ||
    operator.length === 0
  ) {
    return;
  } else if (target.className === '--border' && num2.includes('.')) {
    return;
  }
  num2 += target.innerHTML;
  display.innerHTML = [];
  display.innerHTML = `${num1} ${operator} ${num2}`;
};

//Logic

const sum = (a, b) => {
  return a + b;
};

const substr = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const erase = () => {
  display.innerHTML = [];
  num1 = [];
  num2 = [];
  operator = [];
};

const calculator = ({ target }) => {
  if (target.className === '--equal' && operator == '+') {
    let operation = sum(Number(num1), Number(num2));
    result.innerHTML = operation;
    erase();
    num1 += operation;
  } else if (target.className === '--equal' && operator == '-') {
    let operation = substr(Number(num1), Number(num2));
    result.innerHTML = operation;
    erase();
    num1 += operation;
  } else if (target.className === '--equal' && operator == 'x') {
    let operation = mul(Number(num1), Number(num2));
    result.innerHTML = operation;
    erase();
    num1 += operation;
  } else if (target.className === '--equal' && operator == '/') {
    let operation = div(Number(num1), Number(num2));
    result.innerHTML = operation;
    erase();
    num1 += operation;
  }
};

// Clear
const clear = ({ target }) => {
  if (target.className === '--clear') {
    erase();
    result.innerHTML = '';
  }
};

//Entry

const init = () => {
  buttons.addEventListener('click', displayNum1);
  buttons.addEventListener('click', displayOp);
  buttons.addEventListener('click', displayNum2);
  buttons.addEventListener('click', calculator);
  buttons.addEventListener('click', clear);
};

// Run

init();
