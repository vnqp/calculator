let n1
let n2 
let currentButton = ''
const functions = {
    add: add(),
    subtract: subtract(),
    multiply: multiply(),
    divide: divide(),
}

// functions
function add(n1, n2) {
    calc = n1 + n2
    return calc;
}

function subtract(n1, n2) {
    if (n1 > n2) {
        calc = n1 - n2
    } else {
        calc = n2 - n1
    }
}

function multiply(n1, n2) {
    calc = n1 * n2
}

function divide(n1, n2) {
    calc = n1 / n2
}


// operator

function populateDisplay(operator) {
    const displayH1 = document.getElementById('displayH1')
    displayH1.innerHTML += `${currentButtonContent}`
    if (operator == true) {
        function saveNumber() {
            n1 = displayH1.innerHTML
            displayH1.innerHTML = ''
        }
        saveNumber()
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let currentButton = button.id
        if (currentButton in numberButtonList) {
            operator = false
            currentButtonContent = numberButtonList[currentButton]
            console.log(currentButton)
            populateDisplay(currentButton)
        }

        if (currentButton in operatorButtonList) {
            currentButtonContent = ''
            let operator = true
            operatorBtn = operatorButtonList[currentButton]
            populateDisplay(operator) 
        }

        if (currentButton == "btnEqual") {
            number1 = parseInt(n1)
            number2 = parseInt(currentButtonContent)
            equalSign(number1, number2)
            
        }
    })
}) 

const numberButtonList = {
    btnOne: 1,
    btnTwo: 2,
    btnThree: 3,
    btnFour: 4,
    btnFive: 5,
    btnSix: 6,
    btnSeven: 7,
    btnEight: 8,
    btnNine: 9,
    btnZero: 0,

}

const operatorButtonList = {
    btnPlus: '+',
    btnSubtract: '-',
    btnMultiply: '*',
    btnDivide: '/',
}

function equalSign(number1, number2) {
    let operator = checkOperator()
    calc = functions[operator](number1, number2)
}

function checkOperator(currentOperator) {
    if (currentOperator == btnPlus) {
        return 'add';
    }
    else if (currentOperator == btnSubtract) {
        return 'subtract';
    }
    else if (currentOperator == btnMultiply) {
        return 'multiply';
    }
    else if (currentOperator == btnDivide) {
        return 'divide';
    }
}

