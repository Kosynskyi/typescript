//Задайте правильные ts типы, для классических js;
let age: number;
age = 50;

let name1: string;
name1 = "Max";

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

// let callback = (a) => { return 100 + a };
let callback: (a: number) => number;
callback = (a) => {
  return 100 + a;
};
//==========
//Задавайте тип для переменной в которую можно сохранить любое значение.
let anything: any;

anything = -20;
anything = "Text";
anything = {};
//==========
//Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}
//==========

//Сделайте неизменяемый массив со строго описанными типами. Массив для примера: let person = ['Max', 21];
let person: [string, number] = ["Max", 21];

//==========

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
enum Load {
  LOADING,
  READY,
}

const page = {
  load: Load.READY,
};

if (page.load === Load.LOADING) {
  console.log("Страница загружается");
}

if (page.load === Load.READY) {
  console.log("Страница загружена");
}
// Сделайте переменную, которая может принимать или строку или число.
let qwe: string | number;

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let union: "enable" | "disable";

//========================================
// Укажите типы для следующих функций
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}
//========================================
//Создайте свой тип данных на основе имеющихся данных.
type Page1 = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: Page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

type Page2 = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
};

const page2: Page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
