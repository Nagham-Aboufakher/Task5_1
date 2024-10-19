let display = document.getElementById('display');
let firstOperand = '';
let secondOperand = '';
let operation = '';

// دالة لإضافة قيمة إلى العرض
function insert(value) {
    display.value += value;
}

// دالة لمسح كل القيم
function clearAll() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    operation = '';
}

// دالة لحذف آخر حرف
function deleteOne() {
    display.value = display.value.slice(0, -1);
}

// دالة للحساب
function calculate() {
    if (operation === '') {
        display.value = 'ERROR';
        return;
    }

    secondOperand = display.value;
    let result = 0;

    switch (operation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            result = 'ERROR';
    }

    display.value = result;
    firstOperand = '';
    secondOperand = '';
    operation = '';
}

// دالة لإضافة العملية
function insertOperation(op) {
    firstOperand = display.value;
    operation = op;
    display.value = '';
}

// دوال الحسابات العلمية
function calculateSin() {
    display.value = Math.sin(parseFloat(display.value));
}

function calculateCos() {
    display.value = Math.cos(parseFloat(display.value));
}

function calculateTan() {
    display.value = Math.tan(parseFloat(display.value));
}

function calculateSqrt() {
    display.value = Math.sqrt(parseFloat(display.value));
}

// ربط الأزرار بالوظائف باستخدام addEventListener
document.getElementById('clear-btn').addEventListener('click', clearAll);
document.getElementById('delete-btn').addEventListener('click', deleteOne);
document.getElementById('sqrt-btn').addEventListener('click', calculateSqrt);
document.getElementById('divide-btn').addEventListener('click', () => insertOperation('/'));

document.getElementById('seven-btn').addEventListener('click', () => insert('7'));
document.getElementById('eight-btn').addEventListener('click', () => insert('8'));
document.getElementById('nine-btn').addEventListener('click', () => insert('9'));
document.getElementById('multiply-btn').addEventListener('click', () => insertOperation('*'));

document.getElementById('four-btn').addEventListener('click', () => insert('4'));
document.getElementById('five-btn').addEventListener('click', () => insert('5'));
document.getElementById('six-btn').addEventListener('click', () => insert('6'));
document.getElementById('add-btn').addEventListener('click', () => insertOperation('+'));

document.getElementById('one-btn').addEventListener('click', () => insert('1'));
document.getElementById('two-btn').addEventListener('click', () => insert('2'));
document.getElementById('three-btn').addEventListener('click', () => insert('3'));
document.getElementById('subtract-btn').addEventListener('click', () => insertOperation('-'));

document.getElementById('zero-btn').addEventListener('click', () => insert('0'));
document.getElementById('decimal-btn').addEventListener('click', () => insert('.'));
document.getElementById('equals-btn').addEventListener('click', calculate);

document.getElementById('sin-btn').addEventListener('click', calculateSin);
document.getElementById('cos-btn').addEventListener('click', calculateCos);
document.getElementById('tan-btn').addEventListener('click', calculateTan);
