const calcultator = (number1, number2, arg3) => {
  let operation = arg3
  if (operation == "addition"){
    return  number1 + number2
  }  

  if (operation == "subtraction"){
    return  number1 - number2
  }  

  if (operation == "division"){
    return  number1 / number2
  }  

  if (operation == "multiplication"){
    return  number1 * number2
  }  

  if (operation == "modulus"){
    return  number1 % number2
  }  
}

console.log('Which operation do you wish to perform of the following operations;\n Addition \n Subtraction \n Division \n Multiplication \n Modulus')

let operand = prompt('-').toLowerCase()
let firstNumber = parseInt(prompt('Type in your first number '))
let secondNumber = parseInt(prompt('Type in your second number '))
let result = calcultator(firstNumber, secondNumber, operand)
console.log('The result of your ' + operand + ' operation is ' + result)
