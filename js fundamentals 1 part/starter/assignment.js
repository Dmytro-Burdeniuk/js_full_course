const country = 'Ukraine'
const continent = 'Europe'
let populationUkraine = 40_000_000
let populationFinland = 6_000_000


// console.log(country)
// console.log(continent)
// console.log(population)

const isIsland = false;
const language = 'ukrainian';
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

let halfPopulation = populationUkraine > 6000000;


const description = `${country} is in ${continent}, and its ${populationUkraine} people speak ${language}`;
// console.log(description)


if ((language === 'english') && (populationUkraine < 50_000_000) && !isIsland) {
    console.log('You should live in Ukraine')
} else {
    console.log(`${country} does not meet your criteria`)
}
