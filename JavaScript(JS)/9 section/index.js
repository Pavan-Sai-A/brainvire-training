'use strict';

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const numbers = [1, 2, 3, 4, 5];
// const a = numbers[0];
// const b = numbers[1];
// const c = numbers[2];

// const [d, e, f] = numbers;
// console.log(d, e, f);
const weekdays = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
const openinghours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

// // 103 Destructuring Arrays

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // order: function (stateIndex, mainIndex) {
  //   return [this.starterMenu[stateIndex], this.mainMenu[mainIndex]];
  // },
  // or
  order(stateIndex, mainIndex) {
    return [this.starterMenu[stateIndex], this.mainMenu[mainIndex]];
  },
  openingHours: openinghours, //ES6 Object litersa
  orderDelivery: function ({ time = 0, addres = 'none' }) {
    console.log(`the order will ${time} to ,${addres}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your Pasta with ${ing1} , ${ing2}, ${ing3}`);
  },
  orderPizza: function (main, ...sec) {
    console.log(main, sec);
  },
};

// restaurant.orderPizza('a', 'b', 'c');
// restaurant.orderPizza('a');
restaurant.orderDelivery({
  time: '12:30',
  addres: 'abc',
});

// //Switchin Two variables
let [main, , secondary] = restaurant.categories; //By this we can skip element in the middle
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Or
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [stater, mainitem] = restaurant.order(2, 0);
console.log(stater, mainitem);

//nested Array array inside array
const nested = [2, 3, [4, 5, 6]];
const [i, j, k] = nested;
// console.log(i,j,...k)
console.log(i);
console.log(nested[2][0]); // here we are accessing Array in array

//Default Values

const [p, q, r = 8] = [8, 9];
console.log(p, q, r);

//104  Destructuring Objects

const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

const { name: restaurantname, openingHours: hours } = restaurant;

console.log(restaurantname, hours, categories);

const { menu = [], starterMenu = [] } = restaurant; //assigning empty array as default value
console.log(menu, starterMenu);

let a = 111;
let b = 999;
const obj = { a: 23, b: 33, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close },
} = openingHours;
console.log(o, close);

//105 Spread Operator(...)

const arr = [7, 8, 9, 10, 11, 12];
const copiedArr = [1, 2, ...arr];
// console.log('SPREAD OPERATOR')
console.log(copiedArr);
// const [ab,bc,c,...arr1] = arr;
// console.log(arr1);

const newMenu = [...restaurant.mainMenu, 'Noodles'];
console.log(newMenu);
//Shallow Copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu2);

//iterabels are strings ,maps,sets but no objects
//iterating over string
const str = 'Pavan';
const iteral = [...str, ...'sai'];
console.log(iteral);
console.log(...iteral);

//Pasta Example
// const dataPasta = [
//   prompt(`let\'s make pasta ing1`),
//   prompt(`let\'s make pasta ing2`),
//   prompt(`let\'s make pasta ing3`),
// ];
// restaurant.orderPasta(dataPasta[0], dataPasta[1], dataPasta[2]);
// restaurant.orderPasta(...dataPasta)

//Objects

const newRestarent = { foundedIn: 2022, ...restaurant };
console.log(newRestarent);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'SAi';
console.log(restaurantCopy);

let data = {
  name1: 'sai',
  name2: 'pavan',
};

let data1 = [1, 2, 3, 4];
console;

// 106 Rest Pattern

// const arr = [1,2,...[3,4]]
// const [a,b,...others] = [1,2,3,4,5]
// console.log(others)

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherfood);
console.log(...otherfood);

//Objects

const { sat, ...week } = restaurant.openingHours;
console.log(week);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
// add(2, 3);
// add(2, 3, 4, 5, 6);
// add(4, 5, 6, 7, 8);
const x = [3, 5, 3, 5];
add(...x);

//107 SHORT CIRCUTING
console.log(false || null); // if both false last falsy
console.log(3 || 0);
console.log(4 || 3); //Or will show 1st true value
console.log(0 && 1); // it will show if false false value
console.log(4 && 1); //it will show last true value
console.log(false && null); //it both false it show 1st false value

// Nullish Coalescing
//Nullish value are null and undefined (Not 0 or '')
// restaurant.noOfGuest = 0;
const guessContact = restaurant.noOfGuest ?? 10; // it will get first non nullishg value
console.log(guessContact);

const res1 = {
  name2: 'pavan',
  noOfGuetes: 0,
};

const res2 = {
  name2: 'sai',
  owner: 'bvr',
};

// res1.noOfGuetes = res1.noOfGuetes || 50;
// res2.noOfGuetes = res2.noOfGuetes || 20;

// res1.noOfGuetes ||= 10;
// res2.noOfGuetes ||= 20;

//Nullish value are null and undefined (Not 0 or '')
res1.noOfGuetes ??= 10;
res2.noOfGuetes ??= 20;
res2.owner = res2.owner && '<ANONOMOUS>';
res1.owner &&= '<ANONOMOUS>';
//It will check the dat is in object or not
console.log(res1);
console.log(res2);

//111 LOOPING for of loop

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu1);
// for (const item of menu1) console.log(item);

for (const [i, el] of menu1.entries()) {
  console.log(`${i + 1} :${el}`);
}

// console.log(...menu1.entries());

//112 Enhanced Object Literals

console.log(restaurant.openingHours?.fri?.open);
const days = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat'];

for (const daysData of days) {
  // const open = restaurant.openingHours[daysData]?.open || 'closed';
  //In saturday it will show is closed

  const open = restaurant.openingHours[daysData]?.open ?? 'closed';
  console.log(open);
}

//Methods

console.log(restaurant?.jjjj ?? 'method not exit');

//looping
//Keys and value Pairs
const day = Object.keys(openingHours);
console.log(day);
for (const day1 of day) {
  console.log(day1);
}

console.log(Object.keys(restaurant));

for (const [key, { open, close }] of Object.entries(openingHours)) {
  console.log(`${key}, is ${open}`);
}
console.log(Object.entries(openingHours));

// //SETS

const orderset = new Set(['p', 'a', 'v', 'a']);
console.log(orderset);

console.log(new Set(['Sai']));

console.log(orderset.has('p'));
console.log(orderset.has('s'));
//add an element
orderset.add('n');
console.log(orderset);
// Delete an element in set
orderset.delete('v');
console.log(orderset);
// orderset.clear(); //It will clear all the value in set
for (const order of orderset) console.log(order);
const staff = ['Mang', 'wait', 'cook', 'wait', 'cook'];
const staffSet = [...new Set(staff)];
console.log(new Set(['p', 'a', 'v', 'a']).size);
console.log(staffSet);

//Maps

const rest = new Map();

rest.set('name', 'Name2');
rest
  .set('name2', ['a', 'b', 'c'])
  .set('name3', 'a')
  .set(true, 'Wecan get bool');
console.log(rest);
//to get map key
console.log(rest.get('name'));

const time = 21;
// rest.clear();
console.log(rest.has('name'));
rest.delete('name3');
console.log(rest.size);
const arr2 = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr));

//Maps Iteration

const question = new Map([
  ['question', '1'],
  [1, 'c'],
  [2, 'pyt'],
  ['correct', 2],
  [true, 'Correct'],
  [false, 'try'],
]);
console.log(question);
//Convert Obj to map
console.log(Object.entries(openinghours));
const hoursmap = new Map(Object.entries(openinghours));
console.log(hoursmap);

//Iteration

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(` ${key} :  ${value}`);
}

// const answer = Number(prompt('Your Answer '));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));
//Map to array

console.log([...question]);
console.log([...question.keys()]);

//Strings part 1

const airlines = 'Air 10 11 10';
const plane = 'Plane 1';
console.log(plane[0]);
console.log('ABCDE'[0]);
console.log(airlines.length);
console.log(airlines.indexOf('11'));
console.log(airlines.lastIndexOf('10'));
//SLice
console.log(airlines.slice(4)); //Remove Beging Parameter
console.log(airlines.slice(1, 5));
console.log(airlines.slice(-2)); //last index
console.log(airlines.slice(0, airlines.lastIndexOf('10')));
console.log(airlines.slice(1, -2));

// const checkMiddle = function (seat) {};

console.log(new String('Pavan')); // It wil show n array
//122
const airlines1 = 'Air India';
console.log(airlines1.toLowerCase()); // to lower
console.log(airlines1.toUpperCase()); // to upper case

const passenger = 'pAvAn sAI';
const passengerlower = passenger.toLowerCase();
const passengerCorrect =
  passengerlower[0].toUpperCase() + passengerlower.slice(1);
console.log(passengerCorrect);

// Email

const email = 'hello@gmail.com';
const loginemial = '  Hello@gmail.com \n';
const lowerEmail = loginemial.toLowerCase().trim(); // trim will remove space in start
console.log(lowerEmail);
// console.log(email.slice(0, -10));

//replace

const prce = '288,9$';
const price = prce.replace('$', '#').replace(',', '/');
console.log(price);
//replaceall
const passengerDet = 'All Details are'.replaceAll(' ', '');
console.log(passengerDet);
console.log('All Details are'.replaceAll(/ /g, ''));

//Boolean

const planeData = 'AirZone';
console.log(planeData.includes('Zone'));
console.log(planeData.startsWith('Air'));
console.log(planeData.endsWith('one'));

//123 Part 3
//Spit

const splitData = 'Amit';
console.log(splitData.split(''));
console.log('a+b+c+d+e'.split('+'));
const [firstName, lastName] = 'Pavan sai'.split(' ');
const newName = ['mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
console.log(newName.split(' '));

//padding
//It will add numberr of data between string
const message = 'Go to gate 222';
console.log(message.padStart(25, '*').padEnd(30, '+'));

//Repeat
//It will repeate the data N Times
const message1 = 'Weather of data ';
console.log(message1.repeat(3));
