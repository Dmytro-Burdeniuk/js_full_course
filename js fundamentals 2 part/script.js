// // // // 'use strict';
// // // //
// // // // // let hasDriversLicense = false;
// // // // // const passTest = true;
// // // //
// // // //
// // // // // if (passTest) hasDriverLicense = true;
// // // // // if (hasDriversLicense) console.log('I can drive')
// // // //
// // // //
// // // //
// // // // // const interface = 'Audio'
// // // // // const private = 534
// // // //
// // // //
// // // // // function logger() {
// // // // //     console.log('func is working');
// // // // // }
// // // //
// // // //
// // // // // calling / running / invoking
// // // // // logger();
// // // // // logger();
// // // //
// // // // // function fruitProcessor(apples, oranges) {
// // // // //     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// // // // //     return juice;
// // // // // }
// // // //
// // // //
// // // //
// // // // // const appleJuice = fruitProcessor(5, 0);
// // // // // console.log(appleJuice);
// // // //
// // // // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // // // console.log(appleOrangeJuice);
// // // //
// // // // // console.log(Number('23'));
// // // //
// // // // // function describeCountry(country, population, capitalCity) {
// // // // //     console.log(`${country} has ${population} people and its capital city is ${capitalCity}`)
// // // // // }
// // // //
// // // // // const country = prompt('Enter a country')
// // // // // const population = prompt('Enter a population')
// // // // // const capitalCity = prompt('Enter a capital city')
// // // //
// // // // // describeCountry(country, population, capitalCity)
// // // //
// // // // // const country2 = prompt('Enter a country')
// // // // // const population2 = prompt('Enter a population')
// // // // // const capitalCity2 = prompt('Enter a capital city')
// // // //
// // // // // describeCountry(country2, population2, capitalCity2)
// // // //
// // // // // const country3 = prompt('Enter a country')
// // // // // const population3 = prompt('Enter a population')
// // // // // const capitalCity3 = prompt('Enter a capital city')
// // // //
// // // // // describeCountry(country3, population3, capitalCity3)
// // // //
// // // // // function calcAge1(birthYear) {
// // // // //     return 2037 - birthYear;
// // // // // }
// // // // //
// // // // // const age1 = calcAge1(2004);
// // // // //
// // // // // const calcAge2 = function (birthYear) {
// // // // //     return 2037 - birthYear;
// // // // // }
// // // // //
// // // // // const age2 = calcAge2(2004)
// // // // //
// // // // //
// // // // // console.log(age1, age2)
// // // //
// // // //
// // // // // const populationWorld = 7900
// // // // //
// // // // // function percantageOfWorld1 (population) {
// // // // //     console.log(`${((population / populationWorld) * 100).toFixed(2)}%`);
// // // // // }
// // // // //
// // // // // percantageOfWorld1(110)
// // // // // percantageOfWorld1(40)
// // // // // percantageOfWorld1(6)
// // // // //
// // // // // const calcPopulationPercentage = function (population) {
// // // // //     console.log(`${((population / populationWorld) * 100).toFixed(2)}%`);
// // // // // }
// // // // //
// // // // // calcPopulationPercentage(110)
// // // // // calcPopulationPercentage(40)
// // // // // calcPopulationPercentage(6)
// // // //
// // // // // const calcAge3 = age => age * age;
// // // // // const age3 = calcAge3(100);
// // // // // console.log(age3);
// // // // //
// // // // // const yearsUntilRetire = (birthYear, firstName) => {
// // // // //     const age = 2025 - birthYear;
// // // // //     const retire = 65 - age;
// // // // //     return `${firstName} retires at ${retire}`;
// // // // // }
// // // // //
// // // // // console.log(yearsUntilRetire(2004, 'Dima'));
// // // // // console.log(yearsUntilRetire(1992, 'Bob'));
// // // //
// // // //
// // // // // const percantageOfWorld3 = population => console.log(`${((population / populationWorld) * 100).toFixed(2)}%`);
// // // // //
// // // // // percantageOfWorld3(110)
// // // // // percantageOfWorld3(23)
// // // // // percantageOfWorld3(1111)
// // // //
// // // // // function cutFruitPeices(fruit) {
// // // // //     return fruit * 4;
// // // // // }
// // // // //
// // // // // function fruitProcessor(apples, oranges) {
// // // // //     const applePieces = cutFruitPeices(apples);
// // // // //     const orangesPieces = cutFruitPeices(oranges);
// // // // //
// // // // //     const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges`;
// // // // //     return juice;
// // // // // }
// // // // //
// // // // // console.log(fruitProcessor(2,3));
// // // //
// // // // // const calcAge = function(year) {
// // // // //     return 2025 - year;
// // // // // }
// // // // // //
// // // // // const yearsUntilRetire = function (birthYear, firstName) {
// // // // //     const age = calcAge(birthYear);
// // // // //     const retire = 65 - age;
// // // // //
// // // // //     if (retire > 0) {
// // // // //         console.log(`${firstName} not retired`)
// // // // //         return `${firstName} retires in ${retire} years`;
// // // // //     } else {
// // // // //         console.log(`${firstName} already retired`)
// // // // //         return -1;
// // // // //     }
// // // // //
// // // // // }
// // // // //
// // // // // console.log(yearsUntilRetire(2004, 'Dima'));
// // // // // console.log(yearsUntilRetire(1942, 'Mike'));
// // // //
// // // //
// // // // // const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// // // // //
// // // // // function checkWinner (avgDolphins, avgKoalas) {
// // // // //     if ((avgDolphins / 2) >= avgKoalas) {
// // // // //         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
// // // // //     } else if ((avgKoalas / 2) >= avgDolphins) {
// // // // //         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
// // // // //     } else {
// // // // //         console.log('No team wins...')
// // // // //     }
// // // // // }
// // // // //
// // // // // const scoreDolphins = calcAverage(44, 23, 71)
// // // // // const scoreKoalas = calcAverage(65, 54, 49)
// // // // //
// // // // //
// // // // // checkWinner(scoreDolphins, scoreKoalas);
// // // //
// // // //
// // // // const friend1 = 'Michael'
// // // // const friend2 = 'Steven'
// // // // const friend3 = 'Peter'
// // // //
// // // console.log(friends);
// // // //
// // // // // const years = Array(1991, 1984, 2008, 2020);
// // // //
// // // // console.log(friends[0]);
// // // // console.log(friends[1]);
// // // //
// // // // console.log(friends.length);
// // // // console.log(friends[friends.length - 1]);
// // // //
// // // // friends[2] = 'Jay';
// // // // console.log(friends);
// // // //
// // // // // friends = ['Bob', 'Michael'];
// // // //
// // // // const firstName = 'Dima';
// // // //
// // // // const dima = [firstName, 'Burdeniuk', 2025-2004, friends]
// // // //
// // // // const calcAge = function(year) {
// // // //     return 2025 - year;
// // // // }
// // // //
// // // // const years = [1990, 1967, 2002, 2010, 2018]
// // // //
// // // // const age1 = calcAge(years[0]);
// // // // const age2 = calcAge(years[1]);
// // // // const age3 = calcAge(years[years.length - 1]);
// // // //
// // // // console.log(age1, age2, age3);
// // // //
// // // // const ages = [calcAge(years[0]), calcAge(years[1]), age2];
// // // //
// // // // console.log(ages);
// // // //
// // // //
// // // const populations = [10_000_000, 6_000_000, 40_000_000, 132_000_000];
// // //
// // // console.log(populations.length === 4);
// // //
// // // function percantageOfWorld(population) {
// // //     return ((population / 7_900_000_000) * 100)
// // // }
// // //
// // // const percentages = [percantageOfWorld(populations[0]), percantageOfWorld(populations[1]), percantageOfWorld(populations[2])]
// // // console.log(percentages);
// //
// // const friends = ['Michael', 'Steven', 'Peter'];
// //
// // friends.unshift('Alex');
// // friends.push('Dima');
// // const popped = friends.pop();
// // friends.pop();
// //
// // friends.shift();
// //
// // console.log(friends.indexOf('Steven'));
// // console.log(friends.includes('Dima'));
// //
// // console.log(friends, popped);
// //
// // if (friends.includes('Steven')) {
// //     console.log('Good')
// // }
// //
// //
//
// // const neighbours = ['France', 'Portugal', 'Spain',]
// // neighbours.push('Utopia')
// // neighbours.pop();
// //
// // console.log(neighbours)
// //
// // if (!neighbours.includes('Germany')) {
// //     console.log('Probably not a central european country :D')
// // }
// //
// // const indexPortugal = neighbours.indexOf('Portugal');
// // neighbours[indexPortugal] = 'New Portugal';
// //
// // console.log(neighbours);
//
// function calcTip (bill) {
//     if (bill > 50 && bill <= 300) {
//         return bill * 0.15
//     } else {
//         return bill * 0.20
//     }
// }
//
// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])]
//
// console.log(tips)
// console.log(totals)

const dima = {
    firstName: 'Dima',
    lastName: 'Burdeniuk',
    age: 21,
    job: 'Programmer',
    friends: ['France', 'Portugal', 'Spain']
};

const myCountry = {
    country: 'Ukraine',
    capital: 'Kyiv',
    language: 'Ukrainian',
    population: 40_000_000,
    neighbors: ['France', 'Portugal', 'Spain'],
};

// console.log(dima['lastName']);

const nameKey = 'Name'
// console.log(dima['first' + nameKey]);
// console.log(dima['last' + nameKey]);

const interest = prompt('What is your name?')

if (dima[interest]) {
    console.log(dima[interest])
} else {
    console.log('Wrong request!')
}

dima.location = 'United Kingdom';
dima['twitter'] = nameKey;

console.log(dima)

const sentence = `${dima.firstName} has ${dima.friends.length} friends and his best friend ${dima.friends[0]}`



