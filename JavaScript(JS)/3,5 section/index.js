'use strict';

// // 33 FUNCTIONS:

// function data(){
//      console.log("Pavan")
// }
// data()

// function data(lastname){
//     let name =`Pavan ${lastname}`
//     return name
// }

// console.log(data("sai"));
// console.log(data("Kumar"));

// // 34 Function Declarations vs Expressions

// // Function Declaration

// function age1(year){
//     const age = 2023-year
//     return
// }
// console.log(age1(1998))

// // Function Expressiom

// let data = function (year){
//     return 2023-year
// }
// console.log(data(1999))

// // 35 ARROW FUNCTIONS

// const data = year => 2023 - year;
// console.log(data(1999))

// const data = (year,name) =>{
//     const age = 2022 - year;
//     const retirementage = 60 - age
//     return `${name} has ${retirementage} years to get retired`
// }
// console.log(data(1999,"Pavan"))

// // 36 Calling on function in another function

// function machine(fruit){
//     return fruit*3
// }

// function total(apple,mango){
//     const Juice =`juice with ${machine(apple)*2} apple pieces and ${machine(mango)*2} mango pieces`
//     return Juice
// }
// console.log(total(2,3))

// function age(year){
//     return 2023-year
// }

// const age = function (year){
//     return 2023-year
// }

// const age = year => 2023 -year;

// // 39 ARRAYS

// let data1 = "one"
// let data2 = "Two"
// let data3= "Three"

// const example= ["one","two","three"]
// console.log(example)

// const example1 = new Array(1,2,3)

// console.log(example.length)
// example1[0] = 4
// console.log(example1[0])

// const age = function(years){
//     return 2023 - years
// }

// const year = [1999,1998,2000]
// const age1 = age(year[0])
// console.log(age1)
// const age2 = [age(year[0]),age(year[1]),age(year[2])]
// console.log(age2)

//  // 40 Array Methods
// const year = [1999,1998,2000]
// year.push(1997) // it will add a he end of array
// year.unshift(2001) // it will add front
// console.log(year)
// year.pop()  // it will remove last element of array
// year.shift() // it will remove first element
// console.log(year)
// console.log(year.indexOf(1998))
// console.log(year.includes(1999)) // it will give true or false

// // 42 OBJECTS

// const arrayinarray = [
//     "pavan",
//     "sai",
//     2022-1999,
//     ["pavan","sai"]
// ]
// console.log(arrayinarray)

// const obje = {
//     firstname:"pavan",
//     lastname:"sai",
//     age :1999,
//     fulname:["pavan","sai"],
//     isTrue : true,
//     agecalu : function(){
//         return (2022- this.age)
//     }
// }

// console.log(obje.agecalu)
// // obje["mail"] = '@gmail.com'

// // how to change or update Object
// obje.lastname="SAI"
// console.log(obje.lastname)
// console.log(obje["first" +"name"])
// console.log(obje)
// // let daa = prompt()
// // console.log(obje[daa])

// OBJECT Methods

// const obje = {
//     firstname:"pavan",
//     lastname:"sai",
//     age :1999,
//     fulname:["pavan","sai"],
//     isTrue : true,
//     agecalu : function(){
//         this.age1 = (2022- this.age);
//         return this.age1
//     },
//     getsumm : function(){
//         return `${this.firstname} is ${this.agecalu()} years old`
//     }
// };

// console.log(obje.agecalu())
// console.log(obje.age1)
// console.log(obje.getsumm())

// //46 FOR LOOP

// for (let i=1;i<=10;i++){
//     console.log(`this is ${i}`)
// }

// //47 Looping Arrays

// let data= [10,22.5,21,22,"22",true]
// const types=[]
// for (let i=0;i<data.length;i++){
//     types[i] = data[i]
//     types.push(data[i])
//     // console.log(data[i],typeof(data[i]))
// }
// console.log(types)

// // Continue and break Statement

// let data= [10,22.5,21,22,"22",true]

// for (let i=0;i<data.length;i++){
//     if(typeof(data[i]) !== "number" ) continue;
//     console.log(data[i])
// }

// // 48 Looping Backwards

// let data= [10,22.5,21,22,"22",true]

// for (let i = data.length-1;i>=0;i--){
//     console.log(data[i])
// }

// for (let i = 1;i<=10;i++){
//     console.log(`start of ${i}`)
//     for(let j=1;j<=5;j++){
//         console.log(i)
//     }
// }

// // 49 WHILE LOOP

// let i = 1
// while(i<=10){
//     console.log(i)
//     i++
// }

// let dice = Math.trunc(Math.random()*6)+1
// while (dice!==6){
//     console.log(dice)
//     dice = Math.trunc(Math.random()*6)+1
// }

// for (let dice = Math.trunc(Math.random()*6)+1;dice!==6;dice = Math.trunc(Math.random()*6)+1){
//     console.log(dice)
// }

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

// const calcTip = function(bills){
//     return bills>=50 && bills<=300 ? bills*0.15 : bills*0.2
// }

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100,86,52]
// const totals = []
// for (let data= 0 ; data<bills.length;data++){

//     totals.push(bills[data]+(calcTip(bills[data])))
// }


// console.log(totals)

// const calcAvg = function (totalsum) {
//   let sum = 0;
//   for (let data = 0; data < totalsum.length; data++) {
//     sum += totalsum[data];
//   }
//   return sum / totalsum.length;
// };
// console.log(calcAvg(totals));
