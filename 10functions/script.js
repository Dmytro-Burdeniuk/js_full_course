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

// const greet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Dima');
// greeterHey('Vlad');

// greet('Hello')('Jonas')

// const luftHansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );

//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// luftHansa.book(239, 'Dima Burdeniuk');
// luftHansa.book(635, 'John Smith');

// console.log(luftHansa.bookings);

// const euroWings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = luftHansa.book;

// book.call(euroWings, 23, 'Sarah Williams');
// console.log(euroWings);

// book.call(luftHansa, 239, 'Mary Cooper');
// console.log(luftHansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 431, 'Vlad Kutsenko');
// console.log(swiss);

// Apply method
// const flightData = [583, 'Serhii Burdeniuk'];
// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);
// console.log(swiss);

// Bind method
// const bookEW = book.bind(euroWings);
// const bookLH = book.bind(luftHansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW454 = book.bind(euroWings, 454);
// bookEW454('Mark Patiuk');
// bookEW454('Alla Kutsenko');

// // With Event Listeners
// luftHansa.planes = 300;
// luftHansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// luftHansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', luftHansa.buyPlane.bind(luftHansa));

// Partial application
// const addTax = (rate, value) => value + value * rate;
// const addTax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(1500));

// console.log(addVAT(100));
// console.log(addVAT(23));

// Write a function that returns a function that does addTax functionality

// const addTax = function(rate){
//   return function(value){
//     return value + value + rate
//   }
// }

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log('This will ALSO never run again'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// console.log(notPrivate);

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++
    console.log(passengerCount);
  }
}

const booker = secureBooking();

booker();
booker();
booker();
booker();
booker();
booker();