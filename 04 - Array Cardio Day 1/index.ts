
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
interface Name {
    first: string;
    last: string;
}
// Some data we can work with
interface Person extends Name {
    year: number;
    passed: number;
}

const inventors: Person[] = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventors1500s: Person[] = inventors.filter(person => {
    return person.year >= 1500 && person.year <= 1599;
})
console.log("1. Inventors born in the 1500s")
console.log(inventors1500s)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const names: Name[] = inventors.map(person => {
    return {
        first: person.first,
        last: person.last,
    }
});
console.log("2. Inventors' names")
console.log(names)


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((a, b) => a.year - b.year)
console.log("3. Inventors sorted by birthdate")
console.log(sortedInventors)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = sortedInventors
    .map(person => person.passed-person.year)
    .reduce((total, current) => total+current, 0);
console.log("4. Total Years: " + totalYears);

// 5. Sort the inventors by years lived
const sortedByLifespan = inventors.sort((a, b) => (a.passed-a.year) - (b.passed-b.year))
console.log("5. Sorted By lifespan")
console.log(sortedByLifespan);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

fetch("https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris")
    .then(response => response.text())
    .then(text => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(text, "text/html");
        const div = htmlDocument.getElementById("mw-pages");
        // @ts-ignore
        const links = Array.from(div.querySelectorAll("a"));
        const namesWithDe = links.filter(link => /\sde\s/.test(link.title)).map(link => link.title);
        console.log("6. I only want to get names that have the preposition 'de':")
        namesWithDe.forEach(name => {
            console.log(name);
        })
    })



// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedNames = people.sort((a, b) => {
    const nameA = a.split(",");
    const nameB = b.split(",");
    if (nameA < nameB){
        return -1;
    } else if (nameA > nameB){
        return 1;
    } else {
        return 0;
    }
})
console.log("7. Names sorted alphabetically by last name");
console.log(sortedNames);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
// forEach seems more natural?

let counter = {};
data.forEach(name => {
    if(counter.hasOwnProperty(name)){
        counter[name]+= 1;
    } else {
        counter[name] = 1;
    }
})
console.log("8. A counter for occurrences of different means of transportation");
console.log(counter);