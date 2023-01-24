// interface State<T> {}

// type State2<T> = {};

// class State3<T> {}

// function state4<T>() {}

// function identity<T>(arg: T): T {
//   return arg;
// }

// const s = "string";
// const n = 333;
// console.log(identity(n));

// ============================================================

// interface User {
//   name: string;
//   age: number;
// }

// interface Message {
//   id: number;
//   text: string;
// }

// interface State<T> {
//   loading: boolean;
//   error: Error | null;
//   data: T;
// }

// type UserState = State<User>;
// type MessageState = State<Message>;

// const state: UserState = {
//   loading: false,
//   error: null,
//   data: {
//     name: "Max",
//     age: 12,
//   },
// };

// ============================================================

// function getRandomElement<T>(items: T[]): T {
//   const randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }

// const el1 = getRandomElement([2, 4, 8, 2, 5, 7, 4]);
// const el2 = getRandomElement(["2", "4", "8", " 2", "5", "7", "4"]);

// console.log(el1);
// ============================================================
// ===========================ДЖЕНЕРИКИ В ARROW FUNCTION=================================

// const calculateTotalPrice1 = <T, U>(quantity: T, pricePerItem: U): number =>
//   Number(quantity) * Number(pricePerItem);

// ===========================ДЖЕНЕРИКИ В FUNCTION DECLARATION=================================
// function calculateTotalPrice2<T, U>(quantity: T, pricePerItem: U) {
//   return Number(quantity) * Number(pricePerItem);
// }

// const qwe1 = calculateTotalPrice1(5, 100);
// const qwe2 = calculateTotalPrice2(5, 100);

// console.log(qwe1);
// console.log(qwe2);
// ============================================================

// const mergeObjects = <T, U>(obj1: T, obj2: U): T & U => {
//   return {
//     ...obj1,
//     ...obj2,
//   };
// };

// const example1 = mergeObjects({ a: 10, b: 15 }, { c: 13, d: 14 });
// console.log(example1);
// ============================================================
// дженерики могут расширять другие типы

// function len<T extends { length: number }>(collection: T) {
//   return collection.length;
// }

// const r1 = len("Hello");
// const r2 = len([1, 3, 6, 8]);
// const r3 = len(3)
