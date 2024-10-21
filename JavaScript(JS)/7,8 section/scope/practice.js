{
  // // const name="Pavan"
  // // var name="sai"
  // // let name ="Ande"
  // const firstName = 'Pavan';
  // //In Const We cant Redeclare & update
  // function data(){
  //     console.log(firstName)
  // }
  // data()
  // // firstName = 'sai';
  // var name = 'sai';
  // {
  //     console.log(name)
  // }
  // // let name = 'Ande';
  // SCOPING
  // //Global Scope  Outside of any function
  // //It is accesable in any function or Block
  // const gobalScope = 'Hi';
  // //Function Scope
  // //It is only used inside of function
  // function calcAge(birthYear) {
  //   const age = 25;
  //   console.log(age);
  //   return age;
  // }
  // calcAge();
  // //Block Scope
  // //It is only used Inside of function
  // if (true) {
  //   const age1 = '23';
  //   console.log(age1);
  // }
  // // SCOPES FUNCTION AND BLOCK AND GLOBAL
  // const name = 'Pavan'; // Global SCope
  // // It Uses Lexical Scoping
  // function first() {
  //   const age = 30;
  //   if (age >= 30) {
  //     const decode = 25;
  //     var data = true;
  //     //var is function Scoped
  //     //Let and const are block Scope
  //   }
  //   function second() {
  //     const job = 'teacher';
  //     console.log(`Name ${name} is ${age} , ${job}`);
  //   }
  //   second();
  // }
  // first();
}


{
  // //SCOPES FUNCTION AND BLOCK AND GLOBAL
  // const name = 'Pavan'; // Global SCope
  // // It Uses Lexical Scoping
  // function first() {
  //   const age = 30;
  //   if (age >= 30) {
  //     const decode = 25;
  //     var data = true;
  //     //var is function Scoped
  //     //Let and const are block Scope
  //   }
  //   function second() {
  //     const job = 'teacher';
  //     console.log(`Name ${name} is ${age} , ${job}`);
  //   }
  //   second();
  // }
  // first();
  // }
}

{

  //Let and const are Block Scope
  //const We cant redeclre,update
  //let we cant redeclare but we can update
  //var we can do redeclare and update

  //LET VS VAR VS CONST
  // VAR Are globally scoped or function/locally scoped.
  // console.log(tester) //Hoisting get Undefined
  //  var tester = "hey hi";
  //     function newFunction() {
  //         var hello = "hello";
  //         tester = "Changed var Varible"
  //     }
  //     newFunction()
  //     console.log(tester);
  //     // console.log(hello); // error: hello is not defined
}

{
  // //Scope
  // function calcAge(birthyear) {
  //   const age = 2023 - birthyear;
  //   console.log(age);
  //   console.log(firstName);
  //   //Function Inside the function
  //   function printAge() {
  //     let opt = `${birthyear},${age}`;
  //     console.log(opt);
  //     if (birthyear > 22) {
  //       var vardata = true;
  //       const firstName = 'Sai'; // This will be look for only Current Scope
  //       const str = `${firstName} Name`;
  //       console.log(str);
  //       //This function will called after remove strict Mode
  //       // function add(a, b) {
  //       //   console.log(a + b);
  //       // }
  //       // opt = 'newData'; // we can change data in parent Scope
  //     }
  //     // console.log(opt);
  //     // add(1, 2);
  //     console.log(vardata);
  //     // console.log(str); // const varible is not accesd in outside of function
  //   }
  //   printAge();
  //   return age;
  // }
  // const firstName = 'pavan'; // this two are global Scope
  // calcAge(1999);
}
{
  //Hoisting
  // const name =true
  // if(name){
  //   // console.log(age)  //we cant access age
  //   // let age = 2022-1999
  //   // console.log(age)
}