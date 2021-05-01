/* variables: var, let & const
 var is redundant - use let & const
 let - re-assign values, const - value set once, cannot be reassigned.

let score = 10;
console.log(score); */

// data types

const firstName = 'John'; //string
const age = 54; // number
const rating = 4.5; //number(float)
const isCool = true; //boolean
const x = null; //object
const y = undefined; //undefined

console.log(typeof y);

//Concatenation - OLD way.
console.log('My name is ' + firstName + ' and I am ' + age);

// NEW, IMPROVED concatenation
// template strings aka template literals.
console.log(`My name is ${firstName} and I am ${age} years old.`)

const hello = `My name is ${firstName} and I am ${age} years old.`

console.log(hello);

const s = 'Hello World';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5));
console.log(s.split(''));

// producing array from string
const a = 'technology, computers, IT, code, mum';
const myArray = a.split(', ');
console.log(a.split(', '));
console.log(myArray);



// chaining
console.log(s.substring(0,5).toUpperCase());

// Arrays

const numbers = new Array('1,2,3,4,5');
console.log(numbers);

const fruits = ['apples', 'oranges', 'nectarines'];

// add to an array
fruits.push('pears');
// add to start of array
fruits.unshift('mangoes');

fruits.unshift('strawberries');

console.log(fruits);

fruits.forEach(fruit => {
  console.log(`I love ${fruit}`)
});

// interogate array
console.log(fruits.indexOf('apples'));





// objects
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['skating', 'calligraphy', 'film-production'],
  address: {
    street: '21 Main Street',
    city: 'Lower Hutt',
    country: 'NZ'
  }
}

console.log(person.address.city);

person.email = 'john.doe@company.com';
console.log(person);

// object literal
const toWatches = [
  {
    id: 1,
    name: 'Mortal Combat Remake',
    watched: false,
    rating: 1
  },
  {
    id: 2,
    name: 'BS Marvel Movie 1 ',
    watched: false,
    rating: 2
  },{
    id: 3,
    name: 'Chick Flick 1',
    watched: true,
    rating: 4
  }
];

console.log(toWatches);
console.log(toWatches[1].name);


// JSON
const toWatchesJSON = JSON.stringify(toWatches);
console.log(toWatchesJSON);

// for loops
for(let i = 0; i < 10; i++){
  console.log(i);
}

// while loops - yeah NAH.

// looping through arrays
for(let i = 0; i < toWatches.length; i++){
  console.log(toWatches[i].name);
}

// better ..
for(let toWatch of toWatches) {
  console.log(toWatch.name);
}

// high order array methods: forEach, map, filter
toWatches.forEach(function(toWatch){
  console.log('Name: ' + toWatch.name + ', rating: ' + toWatch.rating)
});
//better ..
toWatches.forEach(function(toWatch){
  console.log(`Name: ${toWatch.name}, rating: ${toWatch.rating}`);
});


