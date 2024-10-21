'use strict';

// console.log(name1); //Get Undefined
// // console.log(job);//Get refernce Eror
// // console.log(year);

// var name1 = 'pavan';
// let job = 'student';
// const year = 1999;

// console.log(addDec(2, 3)); //We can get functin beore declaration
// // console.log(addExp(2, 3));//We cant accesed
// // console.log(addArr(2, 3));//We cant accesed
// function addDec(a, b) {
//   return a + b;
// }
// var addExp = function (a, b) {
//   return a + b;
// };
// var addArr = (a, b) => a * b;

// //Example
// console.log(productscount);
// if (!productscount) shopping();

// var productscount = 10;
// function shopping() {
//   console.log('deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// //This Key Word

// console.log(this); //it will defined global scoe in window bject

// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);
//   // console.log(this);
// };
// calcAge(1999);

// const calcAgeArr = birthYear => {
//   console.log(2032 - birthYear);
//   // console.log(this);// it will point global object
// };
// calcAgeArr(1999);

// const jonas = {
//   year: 1999,
//   calcAge: function () {
//     // console.log(this)
//     console.log(2052-this.year);//inthis this keyword point year
//   },
// };

// jonas.calcAge();

// const mate = {
//   year: 1998
// }

// mate.calcAge = jonas.calcAge //we copied data from calage to mate
// mate.calcAge() // here it wil point year in mate

// const f = jonas.calcAge
// // f() // it doent have any object and ge refence error

//98
// //Regular vs Arrow functions

// var firstName ='Pavan'

// const jonas = {
//   year: 1999,
//   firstName: 'pavan',
//   calcAge: function () {
//     // console.log(this)
//     // console.log(this.year);
//     console.log(2052 - this.year); //inthis this keyword point year
//     // const self = this; // we can use self for reeclare this insde the function
//     // const isPavan = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1999 && self.year <= 2000);
//     // };

//     //2nd
//     const isPavan = () => {
//       console.log(this);
//       console.log(this.year >= 1999 && this.year <= 2000);
//     };
//     isPavan();
//   },
//   greet: () => {
//     //We cant use Arrow method in object
//     console.log(`this is ${this.firstName}`); //We get Undefined
//   },
// };
// // jonas.greet();
// jonas.calcAge();

// Arguments Key Word

// const addExp = function (a, b) {
//   console.log(arguments); //It is only in Normal Functions
//   return a + b;
// };
// addExp(2, 3);
// addExp(2, 3, 4, 5, 6);
// var addArr = (a, b) => {
//   console.log(arguments);
//   return a * b;
// };
// addArr(2, 3);



// 99
//Premitives are Number,Str,Boo,Undef,Null,Symb,BiInt is stored in call stack
//Objects Obj let,array , Functions  is stored in HEAP
//Call Stack

// let age = 25; // it will genrate new address 001
// let oldAge = age; // it address 002
// age = 22;
// console.log(age);
// console.log(oldAge);

// //Heap
// const me = { // the HEAP addr D001F
//   name1: 'Pavan',
//   age: 22,
// };

// const friend = me;//Pointing Same addr D001F
// friend.age = 25;

// console.log(friend);
// console.log(me);

//100
//Premitive
let lastName = 'Pavan';
let currentName = lastName;
lastName = 'sai';
console.log(lastName, currentName);

//refernce
const pavan = {
  firstName: 'Pavan',
  lastName: 'sai',
  age: 22,
};

const sai = pavan;
pavan.age = 25;
console.log(pavan, sai);

const pavan2 = {
  firstName: 'Pavan',
  lastName: 'sai',
  age: 22,
  year: [1999], // when we add here it will also add in copy
};

const pavancopied = Object.assign({}, pavan2);
pavancopied.age = 20;
pavancopied.year.push(1998); // it will pushed the data in both
console.log(pavan2, pavancopied);
//so wee need Deep Clone
