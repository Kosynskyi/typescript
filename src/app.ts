// ===============2/1===============
// const checkAge = (age: number): string => {
//   if (age >= 18) {
//     return "You are an adult";
//   }

//   return "You are a minor";
// };

// console.log(checkAge(2));

// ===============2/2===============
// function checkPassword(password: number | string): string {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }
// console.log(checkPassword("jqueryismyjam"));

// ===============2/3===============
// function checkStorage(available: number, ordered: number): string {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } else if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } else {
//     return "The order is accepted, our manager will contact you";
//   }
// }

// console.log(checkStorage(200, 300));

// ===============2/4===============
// const fruits = ["apple", "plum", "pear", "orange"]; // const fruits: string[] = ["apple", "plum", "pear", "orange"]

// ===============2/5===============
// const fruits = ["apple", "plum", "pear", "orange"]; // TS сам зрозумів, що це масив рядків

// const firstElement = fruits[0]; // TS сам зрозумів, що це строка
// const secondElement = fruits[1]; // TS сам зрозумів, що це строка
// const lastElement = fruits[fruits.length -1]; // TS сам зрозумів, що це строка

// ===============2/6===============
// const fruits = ["apple", "plum", "pear", "orange"]; // TS сам зрозумів, що це масив рядків

// fruits[1] = "peach";
// fruits[3] = "banana";

// ===============2/7===============
// const fruits = ["apple", "peach", "pear", "banana"]; // TS сам зрозумів, що це масив рядків

// const fruitsArrayLength = fruits.length; // TS сам зрозумів, що це число

// ===============2/8===============
// const fruits = ["apple", "peach", "pear", "banana"]; // TS сам зрозумів, що це масив рядків

// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// ===============2/9===============
// function getExtremeElements(array: (number | string)[]): (number | string)[] {
//   const firstEl = array[0];
//   const lastEl = array[array.length - 1];
//   const newArr = [firstEl, lastEl];
//   return newArr;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// ===============2/10===============
// function splitMessage(message: string, delimeter: string): string[] {
//   const words = message.split(delimeter);

//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("best_for_week", "_"));
// console.log(splitMessage("best-for-week", "-"));

// ===============2/11===============
// function calculateEngravingPrice(
//   message: string,
//   pricePerWord: number
// ): number {
//   const msgLength = message.split(" ").length;
//   const totalPrice = msgLength * pricePerWord;

//   return totalPrice;
// }

// ===============2/12===============
// const makeStringFromArray = (array: string[], delimeter: string): string => {
//   let string: string;

//   string = array.join(delimeter);

//   return string;
// };

// ===============2/13===============
// const slugify = (title: string): string => {
//   const slug = title.toLowerCase().split(" ").join("-");
//   return slug;
// };

// ===============2/14===============
// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, -1);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// ===============2/15===============
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// ===============2/16===============
// function makeArray(
//   firstArray: (number | string)[],
//   secondArray: (number | string)[],
//   maxLength: number
// ): (number | string)[] {
//   const newArray = firstArray.concat(secondArray).slice(0, maxLength);
//   return newArray;
// }

// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 4));
// console.log(makeArray([4], [6, 12, 10, 3], 3));

// ===============2/17===============
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// ===============2/18===============
// function calculateTotal(number: number): number {
//   let totalNumber = 0;
//   for (let i = 0; i <= number; i += 1) {
//     totalNumber += i;
//   }
//   return totalNumber;
// }

// ===============2/19===============
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// ===============2/20===============
// function calculateTotalPrice(order: number[]): number {
//   let total = 0;

//   for (const number of order) {
//     total += number;
//   }

//   return total;
// }

// ===============2/21===============
// const findLongestWord = (string: string): string => {
//   const stringArr = string.split(" ");
//   let longestWord = stringArr[0];

//   for (const word of stringArr) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

// ===============2/22===============
// function createArrayOfNumbers(min: number, max: number): number[] {
//   const numbers: number[] = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// createArrayOfNumbers(1, 3);

// ===============2/23===============
// function filterArray(numbers: number[], value: number): number[] {
//   const newArr: number[] = [];

//   for (const number of numbers) {
//     if (number > value) {
//       newArr.push(number);
//     }
//   }
//   return newArr;
// }

// ===============2/24===============
// function checkFruit(fruit: string): boolean {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }

// ===============2/25===============
// function getCommonElements(array1: number[], array2: number[]): number[] {
//   const newArr: number[] = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }
//   return newArr;
// }

// ===============2/26===============
// function calculateTotalPrice(order: number[]): number {
//   let total = 0;

//     for (const number of order) {
//       total += number;
//     }
// //   for (let i = 0; i < order.length; i += 1) {
// //     total += order[i];
// //   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ===============2/27===============
// function filterArray(numbers: number[], value: number): number[] {
//   const filteredNumbers: number[] = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// ===============2/28===============
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// ===============2/29===============
// function getEvenNumbers(start: number, end: number): number[] {
//   const newArr: number[] = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArr.push(i);
//     }
//   }

//   return newArr;
// }

// ===============2/30===============
// const start = 6;
// const end = 27;
// let number: number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// ===============2/31===============
// const findNumber = (start: number, end: number, divisor: number): number => {
//   let result: number = 0;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       result = i;
//       break;
//     }
//   }
//   return result;
// };

// console.log(findNumber(2, 12, 5));

// ===============2/32===============
// function includes(array: (string | number)[], value: string | number): boolean {
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
