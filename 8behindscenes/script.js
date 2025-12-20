'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, you are millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT'
    }

    // console.log(str);
    console.log(millenial);

    console.log(output);

    // console.log(add(2, 3));
  }

  printAge();

  return age;
}

const firstName = 'Dima';
calcAge(1991);
