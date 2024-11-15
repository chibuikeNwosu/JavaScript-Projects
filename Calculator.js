"use strict";

//Calculator 🧮

/* _Understand the problem - Ask the right questions.
   --> How is the calculator going to be implemented?
// //    -> Ans: 1. Implemented through the use of functions.
// //            2. Also the use of conditinal statements(if-else, switch, & tenary operators).
// //            2. maybe arrays.

// //    --> What are the functionalites of the calculator?
// //    -> Ans: Addition, Subtraction, Multiplication,     Division, persentage, square root and exponets & factorials.

// //    --> What are areas that need error handling ?

// //    --> How to implement the memory function?
// //    -> Ans:
// // */

// // /*_Break problem into smaller task
// //   --> Create a function for every method / or just one.
// //   --> And just have fun with it 👌🤠
// // */

function addition(numbers) {
  if (numbers.length === 0) return false;

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function subtraction(numbers) {
  if (numbers.length === 0) return false;

  let subtraction = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    subtraction -= numbers[i];
  }
  return subtraction;
}

function division(number1, number2) {
  const division =
    number2 === 0
      ? `A number can not be divided by ${number2} `
      : Math.round(number1 / number2);
  return division;
}

function multiplication(numbers) {
  if (numbers.length === 0) return false;

  let multiplication = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    multiplication *= numbers[i];
  }
  return multiplication;
}

function factorial(number) {
  if (number < 0) return undefined;

  let factorial = 1;

  for (let i = number; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
}

function persentage(persentage, number) {
  return number * (persentage / 100);
}

function modulus(number1, number2) {
  if (number2 === 0) {
    return undefined;
  }
  return number1 % number2;
}

function squareRoot(number) {
  return Math.sqrt(number);
}

function exponents(base, exponent) {
  return Math.pow(base, exponent);
}

function viewMemory() {
  for (let i = 0; i < memory.length; i++) {
    console.log(`Calculation ${i + 1} = ${memory[i]}`);
    // 1st iteration = 0
    // 2nd = 1
    // 3rd = 2
    // and soo on at least till the aray is done. .....
  }
}

const memory = [];

const calculator = function (userChoice, numbers, number) {
  const addition_ = "+";
  const subtraction_ = "-";
  const division_ = "/";
  const Multiplication_ = "x";
  const factorial_ = "!";
  const persentage_ = "%";
  const modulus_ = "Mod";
  const squareRoot_ = "square";
  const exponents_ = "^";

  if (userChoice === addition_) {
    memory.push(addition(numbers));
    return addition(numbers);
  } else if (userChoice === subtraction_) {
    memory.push(subtraction(numbers));
    return subtraction(numbers);
  } else if (userChoice === division_) {
    memory.push(division(numbers, number));
    return division(numbers, number);
  } else if (userChoice === Multiplication_) {
    memory.push(multiplication(numbers));
    return multiplication(numbers);
  } else if (userChoice === factorial_) {
    memory.push(factorial(numbers));
    return factorial(numbers);
  } else if (userChoice === persentage_) {
    memory.push(persentage(numbers, number));
    return persentage(numbers, number);
  } else if (userChoice === modulus_) {
    memory.push(modulus(numbers, number));
    return modulus(numbers, number);
  } else if (userChoice === squareRoot_) {
    memory.push(squareRoot(numbers));
    return squareRoot(numbers);
  } else if (userChoice === exponents_) {
    memory.push(exponents(numbers, number));
    return exponents(numbers, number);
  } else {
    return "Invalid input sir";
  }
};

console.log(calculator("+", [5, 2]));
console.log(calculator("-", [5, 2]));
console.log(calculator("/", 6, 2));
console.log(calculator("x", [69, 5]));
console.log(calculator("!", 4));
console.log(calculator("%", 10, 200));
console.log(calculator("Mod", 69, 5));
console.log(calculator("square", 81));
console.log(calculator("^", 2, 3));

viewMemory();
