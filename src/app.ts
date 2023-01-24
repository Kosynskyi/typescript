// type AdminType = {
//   type: "admin";
//   name: string;
// };

// type UserType = {
//   type: "user";
//   name: string;
// };

// function checkUser(name: string, type: "admin"): AdminType;
// function checkUser(name: string, type: "user"): UserType;
// function checkUser(name: string, type: "admin" | "user") {
//   if (type === "admin") {
//     return {
//       name,
//       type: "admin",
//     };
//   } else {
//     return {
//       name,
//       type: "user",
//     };
//   }
// }

// const user = checkUser("Nikita", "user");
// const admin = checkUser("Tonya", "admin");
// console.log(checkUser("Nikita", "user"));
// console.log(checkUser("Tonya", "admin"));
// ======================================================
// abstract class Guy {
//   constructor(public name: string) {}
// }

// class Good extends Guy {
//   advice() {
//     console.log(this.name);

//     console.log("this is advice");
//   }
// }

// class Bad extends Guy {
//   insult() {
//     console.log(this.name);
//     console.log("this is insult");
//   }
// }

// function guys(user: Guy) {
//   user.name;
//   console.log("user.name ", user.name);

//   if (user instanceof Good) {
//     user.advice();
//   }
//   if (user instanceof Bad) {
//     user.insult();
//   }
// }

// const good = new Good("Dan");
// const bad = new Bad("Max");
// console.log(guys(bad));
// ======================================================
// const arr: Array<number | string> = [];
// arr.push(2);
// console.log(arr);
// arr.push("qweqwe");
// console.log(arr);
// // arr.push(true);
// ======================================================
// const obj1 = {
//   a: 1,
//   name: {
//     first: "max",
//     last: "kjdfhgjkds",
//   },
// };
// const obj2 = { b: 5 };
// const obj3 = { c: 10 };
// const qwe = Object.assign({}, obj1, obj2, obj3);

// console.log(obj1 === qwe);

// console.log("obj1 ", obj1);
// console.log("obj2 ", obj2);
// console.log("obj3 ", obj3);

// console.log(qwe);
// ======================================================
