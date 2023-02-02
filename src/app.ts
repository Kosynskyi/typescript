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

// type apartmentType = {
//   descr: string;
//   rating: number;
//   price: number;
// };

// const apartment: apartmentType = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const foo = <T extends apartmentType>(apartment: T): void => {
//   console.log(apartment);
//   // ==================Object.keys and Object.values==================
//   //   const objKeys = Object.keys(apartment);
//   //   console.log(objKeys);
//   //   const objValues = Object.values(apartment);
//   //   console.log(objValues);
//   // =====================for in=====================
//   const keys: string[] = [];
//   const values: any[] = [];
//   for (let key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   console.log(keys);
//   console.log(values);
// };

// foo(apartment);

// ======================3/6======================
// type advertType = {
//   service: string;
//   [x: string]: any;
// };

// const keys: string[] = [];
// const values: string[] = [];

// const advert: advertType = {
//   service: "apt",
//   sex: "man",
// };

// const apartment: advertType = Object.create(advert);

// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

// console.log(keys);
// console.log(values);

// ======================3/7======================
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   // Change code above this line
//   return propCount;
// }

// ======================3/8======================
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// interface ITags {
//   id: string;
//   likes: number;
//   tags: string[];
// }

// interface ITagsObj {
//   [key: string]: number;
// }

// const arrOfTags = tweets.reduce(
//   (acc: string[], item: ITags): string[] => [...acc, ...item.tags],
//   []
// );
// console.log(arrOfTags);
// const tagsObj = arrOfTags.reduce((acc: ITagsObj, item: string): ITagsObj => {
//   acc[item] ? (acc[item] += 1) : (acc[item] = 1);
//   return acc;
// }, {});
// console.log(tagsObj);
// ======================3/9======================
