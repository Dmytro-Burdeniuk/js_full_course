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

// dima.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = dima.calcAge
// matilda.calcAge()

// const f = dima.calcAge;
// f();

// var firstName = 'Matilda'

// const dima = {
//   firstName: 'Dima',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // Before ES6
//     // const isMill = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMill = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMill();
//   },

//   greet: () => console.log(this.firstName),
// };

// dima.greet();
// dima.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 7, 10);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b
// }

// addArrow(2, 5, 8)

// const jessica1 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// function marryPerson(originalPerson, newLastName) {
//   originalPerson.lastName = newLastName;
//   return originalPerson;
// }

// console.log('Before changing', jessica);

// const marriedJessica = marryPerson(jessica, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

// console.log('Original', jessica);
// console.log('New', marriedJessica);

// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };


// Shallow copy
// const jessicaCopy = { ...jessica2 };
// jessicaCopy.lastName = 'Davis';

// console.log('Original', jessica2);
// console.log('Copy', jessicaCopy);

// jessicaCopy.family.push('Mary')
// jessicaCopy.family.push('John')

// console.log('Original', jessica2);
// console.log('Copy', jessicaCopy);

// Deep copy
// const jessicaClone = structuredClone(jessica2)

// jessicaClone.family.push('Mary')
// jessicaClone.family.push('John')

// console.log('Original', jessica2);
// console.log('Copy', jessicaClone);

