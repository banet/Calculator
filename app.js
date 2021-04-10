
// select all numbers and operators with use of "data atribut" 

const numberbuttons = document.querySelectorSelectorAll('[data-number]')
const opearationButtons = document.querySelectorSelectorAll('[data-operation]')
const equalsButton = document.querySelectorSelector('data-equals')
const deleteButton = document.querySelectorSelector('data-delete')
const allClearButton = document.querySelectorSelector('data-all-clear')
const previousOperandTextElement = document.querySelectorSelector('data-previous-operand')
const currentOperandTextElement = document.querySelectorSelector('data-current-operand')

// Defining all opeation in on class

class Calculator {

    // constructor to save all data
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
    // All possible function which calculator planing to do

    clear() {

    }

    delete() {

    }
    // add number
    appendNumber(number) {

    }
    chooseOperation(operation) {

    }
    //Calculate
    compute() {

    }

    updateDisplay() {

    }


}