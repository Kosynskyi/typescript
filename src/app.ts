// ======================3/1======================
// interface IApartment {
//   imgUrl: string;
//   descr: string;
//   rating: number;
//   price: number;
//   tags: string[];
// }

// type apartmentType = {
//   imgUrl: string;
//   descr: string;
//   rating: number | string;
//   price: number;
//   tags?: string[];
// };

// const apt1: apartmentType = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const apt2: apartmentType = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: "4",
//   price: 2153,
// };

// ======================3/2======================

// interface IApartment {
//   imgUrl: string;
//   descr: string;
//   rating: number;
//   price: number;
//   tags: string[];
//   owner: {
//     name: string;
//     phone: string;
//     email: string;
//   };
// }

// type apartmentType = {
//   imgUrl: string;
//   descr: string;
//   rating: number;
//   price: number;
//   tags: string[];
//   owner: {
//     firstName: string;
//     lastName: string;
//     phone: string;
//     email: string;
//   };
// };

// const apartment1: apartmentType = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     firstName: "Henry",
//     lastName: "Pupkin",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const changeOwner = <T extends apartmentType, U extends string>(
//   apartment: T,
//   name: U
// ): T => {
//   console.log(111);

//   if ("firstName" in apartment.owner) {
//     console.log(222);
//     apartment.owner.firstName = name;
//     console.log(apartment.owner.firstName);
//   }
//   console.log(333);

//   return apartment;
// };

// console.log(changeOwner(apartment1, "Max"));

// ======================3/3======================

// type apartmentType = {
//   id: string | number;
//   imgUrl: string;
//   descr: string;
//   rating: number;
//   price: number;
//   tags: string[];
//   square?: number;
// };

// const apartment: apartmentType = {
//   id: 1,
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// ======================3/4======================
// interface IApartment {
//   imgUrl: string;
//   descr: string;
//   rating: 4;
//   price: 2153;
//   category: "cheap" | "medium cost" | "expensive";
//   tags: string[];
//   owner: {
//     name: string;
//     phone: string;
//     email?: string;
//   };
// }

// const apartment1: IApartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   category: "medium cost",
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     // email: "qweqwe@qwe.com",
//   },
// };

// const updateApartment = <
//   T extends IApartment,
//   U extends string,
//   V extends string
// >(
//   apartment: T,
//   tag: U,
//   email: V
// ): T => {
//   if ("owner" in apartment) {
//     // apartment.owner.email = email;
//     apartment.owner.email = email;
//   }
//   if ("tags" in apartment) {
//     apartment.tags.push(tag);
//     apartment.tags.shift();
//   }

//   return apartment;
// };

// console.log(updateApartment(apartment1, "trusted", "henry.carter@aptmail.com"));

// ======================3/5======================
