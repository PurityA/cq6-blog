// commonly used operatprs in js
//assignment operators
let currentAge = 22
let ageIn5yrs = currentAge + 5
//ageIn5yrs += get the value of ageIn5yrs and add something
//ageIn5yrs += ()

let age = 0
//age += 6; same as below
age = age + 6;

let AgeInHalf = ageIn5yrs / 2;
let num = 2;
num *= 5;

let age2YrsAgo = (num - 2) /2;

//module operator
let reminder = age2YrsAgo % 3; // returns the reminder after dividing the number

//logical operators
let truth = true && true;
let lie = true && false; // logical AND
let lie2 = lie || truth; // logical OR
let lieIsh = truth && lie;

//comparison operators
let numOne, numtwo; // camelcase used only in Js
numOne = 55;
numtwo = 78; 
 let isEqual = (numOne == numtwo);
 let isStrictEqual = (numOne === numtwo)
 let isGreater = (numtwo > numOne);
 let isLess = (numOne < numtwo);
 let isGreaterOrEqual = (numOne >= numtwo);
 let isLessOrEqual = (numtwo <= numOne);
