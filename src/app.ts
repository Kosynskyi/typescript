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
