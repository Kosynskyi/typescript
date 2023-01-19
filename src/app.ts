// ===============1/1===============
// let productName: string;
// let price: number;

// productName = "Droid";
// price = 2000;

// ===============1/2===============
// let isLoggedIn: boolean;
// let arrOfString: string[];
// let arrOfNumbers: number[];

// isLoggedIn = true;
// arrOfString = ["mango", "poly", "ajax"];
// arrOfNumbers = [2, 4, 5];

// ===============1/3===============
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;

// ===============1/4===============
// const product = "Droid";
// const pricePerOne = 3500;

// const message = `You picked ${product}, price per item is ${pricePerOne} credits`;

// ===============1/5===============
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// ===============1/6===============
// function sayHi(name: string): void {
//   console.log(`Hello ${name}, this is my first function!`);
// }
// sayHi("Stepan");

// ===============1/7===============
// function add(a: number, b: number, c: number): number {
//   console.log(`Addition result equals ${a + b + c}`);
//   const result = a + b + c;
//   return result;
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// ===============1/8===============
// function add(name: string, a: number, b: number): number {
//   console.log(`${name} сожрал ${a} яблок и ${b} сникерсов`);

//   return a + b;
// }

// add("Stepan", 5, 8);
// console.log(add("Stepan", 27, 10));

// ===============1/9===============
// const makeMessage = (name: string, price: number): string =>
//   `You picked ${name}, price per item is ${price} credits`;

// console.log(makeMessage("Stepan", 10));

// ===============1/10===============
// function calculateTotalPrice (orderedQuantity: number, pricePerItem: number): number {

//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// };
// ===============1/11===============
// function makeOrderMessage(
//   orderedQuantity: number,
//   pricePerDroid: number,
//   deliveryFee: number
// ): string {
//   const totasPrice: number = orderedQuantity * pricePerDroid + deliveryFee + 2;
//   const message = `You ordered droids worth ${totasPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   return message;
// }
// ===============1/12===============
// function isAdult(age: number, name?: string): boolean {
//   const passed = age >= 18;

//   return passed;
// }
// ===============1/13===============
// const isValidPassword = (password: string | number): boolean => {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   const isMatch = SAVED_PASSWORD === password;

//   return isMatch;
// };

// console.log(isValidPassword("sdgasdgdasfgs"));

// ===============1/14===============
// const checkAge = (age: number): string => {
//   let message: string;

//   messag = age >= 18 ? ("You are an adult") : ("You are a minor");

//   return message;
// };

// console.log(checkAge(23));

// ===============1/15===============
// const checkStorage = (available: number, ordered: number): string => {
//   let message: string;
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   return message;
// };

// console.log(checkStorage(10, 13));

// ===============1/16===============
// const makeTransaction = (
//   pricePerDroid: number,
//   orderedQuantity: number,
//   customerCredits: number
// ): string => {
//   let message: string;
//   const totalPrice = pricePerDroid * orderedQuantity;

//   message =
//     totalPrice > customerCredits
//       ? (message = "Insufficient funds!")
//       : (message = `You ordered ${orderedQuantity} droids, you have ${
//           customerCredits - totalPrice
//         } credits left`);

//   return message;
// };

// makeTransaction(10, 500, 5000);

// ===============1/17===============
// const checkPassword = (password: string | number): string => {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message: string;

//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// };

// console.log(checkPassword(15451514));

// ===============1/18===============
// function isNumberInRange(start: number, end: number, number: number): boolean {
//   const isInRange = number >= start && number <= end;

//   return isInRange;
// }
// console.log(isNumberInRange(5, 16, 10));

// ===============1/19===============
// function checkIfCanAccessContent(subType: "pro" | "vip"): boolean {
//   const canAccessContent = subType === "pro" || subType === "vip";

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("vip"));

// ===============1/20===============
// function isNumberNotInRange(
//   start: number,
//   end: number,
//   number: number
// ): boolean {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(4, 17, 8));

// ===============1/21===============
// const checkStorage = (available: number, ordered: number): string => {
//   let message: string;

//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";

//   return message;
// };

// console.log(checkStorage(20, 15));

// ===============1/22===============
// const getSubscriptionPrice = (
//   type: "starter" | "professional" | "organization"
// ): number => {
//   let price: number;

//   switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//     default:
//       return 0;
//   }

//   return price;
// };

// console.log(getSubscriptionPrice("professional"));

// ===============1/23===============
// const getShippingCost = (country: string): string => {
//   let message: string;
//   let price: number;

//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//   }

//   return message;
// };

// console.log(getShippingCost("Australia"));

// ===============1/24===============
// const getNameLength = (name: string): string =>
//   `Name ${name} is ${name.length} characters long`;

// console.log(getNameLength("Volodymyr"));

// ===============1/25===============
// const calc = (a: number, b: number): number => a * b;

// console.log(calc(12, 3));

// ===============1/26===============
// const courseTopic = "JavaScript essentials"; // при ініціалізації змінної не потрібно вказувати її тип, так як typeScript - сам його визначає

// const courseTopicLength = courseTopic.length; // а тут сам визначив, що це number
// const firstElement = courseTopic[0]; // тут сам визначив, що це string
// const lastElement = courseTopic[courseTopic.length-1]; // тут сам визначив, що це string

// ===============1/27===============
// const getSubstring = (string: string, length: number): string => {
//   const substring = string.slice(0, length);

//   return substring;
// };

// console.log(getSubstring("abcdefg", 4));

// ===============1/28===============
// const formatMessage = (message: string, maxLength: number): string => {
//   let result: string;

//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     result = message.slice(0, maxLength) + "...";
//   }

//   return result;
// };

// console.log(formatMessage("typeScript is something interesting", 13));

// ===============1/29===============
// const normalizeInput = (input: string): string => input.toLowerCase();

// console.log(normalizeInput("typeScript"));

// ===============1/30===============
// const checkForName = (fullName: string, name: string): boolean => {
//   const result = fullName.toLowerCase().includes(name.toLowerCase());
//   return result;
// };

// console.log(checkForName("Dan Abramov", "dan"));

// ===============1/31===============
// const checkForSpam = (message: string): boolean => {
//   let result: boolean;

//   result =
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
//       ? true
//       : false;

//   return result;
// };

// console.log(checkForSpam("Spam"));
