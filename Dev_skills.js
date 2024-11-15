"use strict";

// task one.
// Understand the question - ask the right questions.
/* - what should we use to get the sum of numbers in the Array? How do we do that?
 */

// Break task into sub-task
/* - declare a function of name - arraySum
   - parse a parameter(input/array) into the function.
   - use a for loop to then loop through the array
   - then get the sum of that array? which we will soon find out.
 */
// the logic to get the sum. is declaring a sum variable that is subject to change using the let keyWord. then when that is done and the array has been looped through. when then say (sum = sum + array[i]). this says that the sum at every iteration before reaching the final sum is the sum which is = 0 + the array at every iteration meaning that at  iteration 1/ 1st[i]. if the number at the 1st index position 0 is 5 then it will be 5 + 0. so if this goes on till the condition set in the loop is met and the loop is terminated then all the numbers would have beeen added together.

function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

const theSumOfTheArray = arraySum([1, 2, 3, 4, 5]);
console.log(theSumOfTheArray);

//task 2.

//Understand the question - ask the right question.
/* - is it a string in numbers,letters or special characters? Answer - letters since it is in upperCase.
   - how do we return the parsed in value in upper case? 
*/

// break question into sub-questions.
/* - return the string in upper case*/

function stringInUpperCase(string1) {
  return string1.toUpperCase();
}

const stringInUpperCase1 = stringInUpperCase("chibuikem");
console.log(stringInUpperCase1);

// Understanding the question - Ask the right questions.
/* - How are we meant to target the maximum values in the array to be used in the string template? Answer: Using a for loop👌
   - How are we meant to get the (days) at each index of the array? this would be done with a for loop too and a bit of thinking 😂😃.
   - How can we put the arrays of temps and days on the same line?
*/

// Breaking questions into sub-problems. step-by-step.
/* - Create a function called 'printForecast'.✅
   - Give the function a parameter of name (arr) ✅
   - Loop through the array to get each value using the for loop ✅
   - then concatinate the temperature and the days as defined in the question. and log forcast to the
*/

// .... Starting

const printForecast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    const forcast = `... ${arr[i]}*C in ${i + 1} days`;
    str = str + forcast;
  }
  return str;
};

console.log(printForecast([17, 21, 23]));

// UnderStand the question - ask the right question.
/* - What is the factorial of number? Answer:Factorial is a function that multiplies a number by every number below it till 1.
   - How to use a loop to get the factorial of a number.
*/

// break the question into smaller bits.
/*- declare a function named findFactorial
  - pass a parameter into the function of name number
  - then declatre a while loop 
  - then get the factorial of the number using the defined while loop.
*/

const findFactorial = function (number) {
  let fac = 1;
  while (number > 0) {
    fac *= number;
    number--;
  }
  console.log(fac);
};
findFactorial(5);

// UnderStand the question - ask the right question.
/*- What to use in order to compute the higher input(number)? Conditinal statements / tenary operators.*/

// break the question into smaller bits.
/*- declare a function named higherNumber
  - pass two parameters into the function of name num1 & num2 .
  - then use the if else or tenary operator to compare the two values
*/

function higherNumber(num1, num2) {
  const higherNumberans =
    num1 > num2 ? `${num1} is greater 😃👌` : `${num2} is greater 👌😃`;

  return higherNumberans;
}

const hn = higherNumber(9, 6);
console.log(hn);

// UnderStand the question - ask the right question.
/* - what is the Fibonacci of a number? Answer:  It means that the next number in the series is the addition of two previous numbers. 

   - what is recursion? Answer - it means to call a function over and over again till the function ends on its own(by setting a base case to tell it(Aii its time to be terminated)).

   - How can we use recursion? Answer - we set a base case and then call the function inside the function with what ever was solved. 
*/

// break the question into smaller bits.
/* - create a function of name fibonacciOfNumber
   - parse a number as the patrameter
   - get the fibonacci using recursion 
   - then return that value  
*/

const fibonacciOfNumber = (number) => {
  let fibonacci = 0;
  for (let i = 0; i < number; i++) {
    fibonacci = fibonacci + i;
  }
  return fibonacci;
};
console.log(fibonacciOfNumber(5));
// PRACTICE LATER.

// UnderStand the question - ask the right question.
/* - How to target a String(words) and then exclude the vowels from the consonants? Answer: for loops, charAt function

   - How to remove specific characters from a word? Answer: if else statements, break & continue methods.
*/

// break the question into smaller bits.
/* -create a function of name wordVowels
   - parse a String as the patrameter
   - loop through the String 
   - use conditional statements to get the vowels and the consonants.
   - then return the answer.
*/

const newWord = [];
const removeVowels = function (word) {
  for (let i = 0; i < word.length; i++) {
    newWord.push(word.charAt(i));

    for (let x = 0; newWord.length; x++) {
      if (
        newWord[i] === "A" ||
        newWord[i] === "a" ||
        newWord[i] === "E" ||
        newWord[i] === "e" ||
        newWord[i] === "O" ||
        newWord[i] === "o" ||
        newWord[i] === "U" ||
        newWord[i] === "u" ||
        newWord[i] === "I" ||
        newWord[i] === "i"
      )
        continue;
    }
  }
  return word;
};
console.log(removeVowels("chibuike"));
console.log(newWord);

// UnderStand the question - ask the right question.
/* - How do we go through the Array to get the values?Answer: for loop.
   - how do we sum up the values in the array? by invloving and external variable that is empty. 
*/

// break the question into smaller bits.
/* - create a function of name sumArray
   - pass a paremeter of name arr
   - loop though that array using a for loop
   - then intorduce a variable of name sum initialized to 0(So we can add the first to zero and then the rest follow 😃👌)
*/

const sumArray = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumArray([1, 2, 3, 4, 5])); // = 15.

// UnderStand the question - ask the right question.
/* - How to loop through a word -(foward and backwords). Answer - foor loop.

   - How to then check if both looped through words are the same? Answer - if statement.
*/

// break the question into smaller bits.
/* - Create a function called plaindrome. 
   - Pass a string parameter of name word.
   - Loop through the word foward and store that answer in a variable.
   - Loop through the word backward and store that answer in a variable.
   - Use an if statement to then check if both of the looped words reads the same thing.
*/

function plaindrome(word) {
  for (let i = 0; word.length; i++) {
    // const foward  = word.charAt(i);
  }
  const foward = word.charAt(i);

  for (let x = word.length; x > 0; x--) {
    // const backward = word.charAt(x);
  }
  const backward = word.charAt(x);

  if (foward === backward || backward === foward) {
    console.log("This word is a plaindrome");
    return true;
  } else {
    console.log("This word is not a plaindrome");
    return false;
  }
}

// UnderStand the question - ask the right question.
/* - How to contdown whatever number passed in the function? - Answer for loop
   - How to get the String that reads blast of ? Answer  - concatination of String
*/

// break the question into smaller bits.
/* - Create a function of name countdown.
   - Parse a parameter 0f type number inside it
   - loop through the number that was parsed in the function using the for loop.
   - Then concatinate the string 'blast of' or use a template string. 
*/

const countdown = (number) => {
  for (let i = number; i > 0; i--) {
    console.log(`${i} BLAST OF 🚀`);
  }
};
countdown(10);

//  UnderStand the question - ask the right question.
/* - How would we turn the word to upperCase? Answer - we use the toUpperCase() method
 */

// break the question into smaller bits.
/* - Create a function of name upperCase
   - parse a string parameter into the function
   - Then return the toUpperCase function call on the word parsed by the user of into the function manually
*/

function upperCase(word) {
  return word.toUpperCase();
}
console.log(upperCase("hello world"));

//  UnderStand the question - ask the right question.
/* - How do we go through the array to even check the numbers for a max ? Answer - The for loop.
   - How do we then check for the maximum using the fpor loop ? Answer - we introduce a new variable called (max) then we set it to the first index of the Array assuming that since it is the first then it should be the largest(now this could be any index as it is just based on assumption but it is easier to set it at zero 👌😃). Then we use the if statement to define the maximum number at each iteration.
*/

// break the question into smaller bits.
/* - Create a function of name maxNum
   - Parse an array into the function
   - Define a variable that holds the curent maximum and declare it with the let keyword as it would be changing after each iteration.
   - Then use a for loop to loop through the Array 
   - Then use the if satement to define the new maximum after each iteration.
   - Then return the new maximum.
*/

const maxNum = function (array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
};
console.log(maxNum([2, 4, 6, 8, 10]));

//UnderStand the question - ask the right question.
/* -How to check if an Array is sorted in assending order ?
 */

// break the question into smaller bits.
/* - Create a function of name ascendingOrder
   - Parse an array into the function
   - Loop through that array 
   - check if that array if sorted in ascending order or not
*/

function ascendingOrder(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] <= array[i]) {
      return false;
    }
  }
  return true;
}
