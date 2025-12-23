'use strict';

// const bookingArr = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
// ES5
// numPassengers = numPassengers ||
// price = price || 199

//   const bookingObj = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(bookingObj);
//   bookingArr.push(bookingObj);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LM123', undefined, 1000);

// const flight = 'LH234';
// const dima = {
//   name: 'Dima Burdeniuk',
//   passport: 2323213,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 2323213) {
//     alert('Check in');
//   } else alert('Wrong passport');

// 	console.log(passenger.passport);
// };

// checkIn(flight, dima);

// // console.log(flight);
// // console.log(dima);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(dima);
// checkIn(flight, dima);

// // JS is passing by value

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log('Original string:', str);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformer by: ${fn.name}`);
// };

// transformer('javascript is the best', upperFirstWord);
// transformer('JavaS crip t', oneWord);

// const high5 = function (str) {
//   console.log(str);
// };

// document.body.addEventListener('click', high5);

// ['Dima', 'Martha', 'Adam'].forEach(high5);

const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Dima');
greeterHey('Vlad');

greet('Hello')('Jonas')

