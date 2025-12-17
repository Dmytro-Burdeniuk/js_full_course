'use strict';

// let hasDriversLicense = false; 
// const passTest = true; 


// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive')



// const interface = 'Audio'
// const private = 534


// function logger() {
//     console.log('func is working');
// }


// calling / running / invoking 
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }



// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// console.log(Number('23'));

// function describeCountry(country, population, capitalCity) {
//     console.log(`${country} has ${population} people and its capital city is ${capitalCity}`)
// }

// const country = prompt('Enter a country')
// const population = prompt('Enter a population')
// const capitalCity = prompt('Enter a capital city')

// describeCountry(country, population, capitalCity)

// const country2 = prompt('Enter a country')
// const population2 = prompt('Enter a population')
// const capitalCity2 = prompt('Enter a capital city')

// describeCountry(country2, population2, capitalCity2)

// const country3 = prompt('Enter a country')
// const population3 = prompt('Enter a population')
// const capitalCity3 = prompt('Enter a capital city')

// describeCountry(country3, population3, capitalCity3)

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
//
// const age1 = calcAge1(2004);
//
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
//
// const age2 = calcAge2(2004)
//
//
// console.log(age1, age2)


// const populationWorld = 7900
//
// function percantageOfWorld1 (population) {
//     console.log(`${((population / populationWorld) * 100).toFixed(2)}%`);
// }
//
// percantageOfWorld1(110)
// percantageOfWorld1(40)
// percantageOfWorld1(6)
//
// const calcPopulationPercentage = function (population) {
//     console.log(`${((population / populationWorld) * 100).toFixed(2)}%`);
// }
//
// calcPopulationPercentage(110)
// calcPopulationPercentage(40)
// calcPopulationPercentage(6)

// const calcAge3 = age => age * age;
// const age3 = calcAge3(100);
// console.log(age3);
//
// const yearsUntilRetire = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retire = 65 - age;
//     return `${firstName} retires at ${retire}`;
// }
//
// console.log(yearsUntilRetire(2004, 'Dima'));
// console.log(yearsUntilRetire(1992, 'Bob'));


// const percantageOfWorld3 = population => console.log(`${((population / populationWorld) * 100).toFixed(2)}%`);
//
// percantageOfWorld3(110)
// percantageOfWorld3(23)
// percantageOfWorld3(1111)

// function cutFruitPeices(fruit) {
//     return fruit * 4;
// }
//
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPeices(apples);
//     const orangesPieces = cutFruitPeices(oranges);
//
//     const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges`;
//     return juice;
// }
//
// console.log(fruitProcessor(2,3));

// const calcAge = function(year) {
//     return 2025 - year;
// }
//
// const yearsUntilRetire = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retire = 65 - age;
//
//     if (retire > 0) {
//         console.log(`${firstName} not retired`)
//         return `${firstName} retires in ${retire} years`;
//     } else {
//         console.log(`${firstName} already retired`)
//         return -1;
//     }
//
// }
//
// console.log(yearsUntilRetire(2004, 'Dima'));
// console.log(yearsUntilRetire(1942, 'Mike'));


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner (avgDolphins, avgKoalas) {
    if ((avgDolphins / 2) >= avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if ((avgKoalas / 2) >= avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins...')
    }
}

const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(65, 54, 49)


checkWinner(scoreDolphins, scoreKoalas);

