'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh, you are millenial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT'
//     }

//     // console.log(str);
//     console.log(millenial);

//     console.log(output);

//     // console.log(add(2, 3));
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Dima';
// calcAge(1991);

// Hoisting with variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Dima';
// let job = 'teacher';
// const year = 2004;

// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

// // Functions
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example

//

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1996);

const dima = {
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
  },
};

// dima.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = dima.calcAge
matilda.calcAge()

const f = dima.calcAge;
f();
