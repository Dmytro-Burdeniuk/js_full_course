'use strict';

const bookingArr = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers ||
  // price = price || 199

  const bookingObj = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(bookingObj);
  bookingArr.push(bookingObj);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LM123', undefined, 1000);
