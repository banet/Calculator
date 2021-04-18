
// select all numbers and operators with use of "data atribut" 

const numberButtons = document.querySelectorAll('[data-number]')
const opearationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

// Defining all opeation in on class

class Calculator {

    // constructor to save all data
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    // All possible function which calculator planing to do

    clear() {
         this.currentOperand = ''
         this.previousOperand = ''
         this.opearation = undefined
    }
    // remove the number
    delete() {

    }
    // add number
    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString()
        console.log(this.currentOperand)
    }
    chooseOperation(operation) {

    }
    //Calculate
    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }


}

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement) 

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});