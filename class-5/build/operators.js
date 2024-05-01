"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let add = 2 ** 4;
console.log(add);
// assignment operators
let pizzaPrice = 1000;
let tax = 150;
// let total = pizzaPrice + tax; // long way
// console.log(total);
pizzaPrice += tax; // short way pizzaPrice = pizzaPrice + tax
console.log("pizza price = ", pizzaPrice); // 1000 + 150 = 1150
let dataBasePassword = "12345"; // when i created my account i set this password
let maraPasswordJoMaDaalRhaHo = 12345;
console.log("line no 19", dataBasePassword == maraPasswordJoMaDaalRhaHo); // boolean
console.log("line no 20", dataBasePassword === maraPasswordJoMaDaalRhaHo); // boolean
// not equal
let password = "12345";
let confirmPassword = "12345";
console.log("line no 27", password != confirmPassword); // boolean
console.log("line no 28", password !== confirmPassword); // boolean
console.log(!true);
console.log(!false);
// string comparison
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log("line no 37 = ", result);
