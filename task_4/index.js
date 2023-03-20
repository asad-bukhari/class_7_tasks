"use strict";
/*Finding Minimum and Maximum Sum of Integers in TypeScript
Create a TypeScript program that includes an array of five positive integers.
Use an algorithm to find the minimum and maximum sums that can be calculated by summing exactly four of the five integers in the array.
Display the respective minimum and maximum values to the user as output in a single line of two space-separated long integers.

arr=[1,3,5,7,9]
Example
The minimum sum is 1+3+5+7=16 and
the maximum sum is 3+5+7+9=24
The function prints 16 24 (Required output)*/
let arr = [54, 87, 666, 521, 221, 1, 5, 8, 111, 900];
arr.sort((a, b) => a - b);
// console.log(arr);
let miniNumbers = arr.slice(0, 4).reduce((a, b) => a + b);
let maxNumbers = arr.slice(-4).reduce((a, b) => a + b);
console.log(`sum of minimum numbers of is ${miniNumbers}, and sum of maxcimum numbers is ${maxNumbers}  `);
