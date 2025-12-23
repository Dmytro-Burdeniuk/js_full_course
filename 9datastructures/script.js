'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIng, ...otherIngs) {
    console.log(mainIng, otherIngs);
  },
};

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const question = new Map([
  ['question', 'What is the best language'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

// console.log(question);

// console.log(Object.entries(openingHours));

// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;

// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else console.log(question.get(false));

// console.log(...question);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

const airLine = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airLine.toLowerCase());
// console.log(airLine.toUpperCase());

// const passenger = 'jOnAs'
// const passengerCorrect = passenger[0].toUpperCase() + passenger.slice(1).toLowerCase()

// console.log(passengerCorrect);

// Check email

// const email = 'hello@dima.io'
// const loginEmail = '  Hello@Dima.iO '

// const checkEmail = loginEmail.toLowerCase().trim()
// console.log(checkEmail);

// const normalEmail = log

// Replacing

// const priceGB = '288,97'
// const priceUS = priceGB.replace(',', '.')
// console.log(priceUS);

// const announce = 'All passengers come to boarding door 32'
// console.log(announce.replace('door', 'gate'));

// console.log(announce.replace(/door/g, 'gate'));

// Bool

// const plane = 'A320neo';
// // console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('A'));

// if(plane.startsWith('A') && plane.endsWith('neo')) console.log('New plane');

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase()
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed');
//   } else {
//     console.log('Welcome on board');
//   }
// }

// checkBaggage('I have a laptop, some Food and a pocket Knife')
// checkBaggage('Socks and camera')
// checkBaggage('Got some snacks and a gun for protection')

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airLine.length);

// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));

// console.log(airLine.indexOf('portugal'));
// console.log(airLine.slice(4));
// console.log(airLine.slice(4, 7));

// console.log(airLine.slice(0, airLine.indexOf(' ')));
// console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -1));

// const checkMiddleSeat = function(seat) {
//   const s = seat.slice(-1)
//   if (s === 'B' || s === 'E') console.log('Middle seat');
//   else console.log('Not middle seat');
// }

// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')

// console.log(typeof new String('Dima'));

// console.log('a+very+nice+string'.split('+'));
// console.log('Dima Burdeniuk'.split(' '));

const [firstName, lastName] = 'Dima Burdeniuk'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

const capitizeName = function (name) {
  const names = name.split(' ');
  let namesArray = [];

  for (const word of names) {
    // namesArray.push(word[0].toUpperCase() + word.slice(1))
    namesArray.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesArray.join(' '));
};

// capitizeName('jessica ann smith davis')
// capitizeName('dima burdeniuk')

const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '-'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '-'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4)
  return last.padStart(str.length, '*')

};

// console.log(maskCreditCard(141414141414141));
// console.log(maskCreditCard('2131421414122141'));

const message2 = 'Bad weather... All Departures Delayed... '
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInLine(6)