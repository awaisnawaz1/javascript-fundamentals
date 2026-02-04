/* Lesson 3 - All about Strings */

// Declare a string using double quotes
let carType = "Camero";
let carAction = "They move fast";

// Declare a string using a single quotes
let truckType = 'Silverado';
let truckAction = 'They haul stuff';

// Use bracket notation on a variable of string
// brack notation is a zero-based index
console.log(carType[6]);
// Output: Undefined

console.log(truckAction[5]);
// Output: h

// A long sentence using the + operator 
let longExample1 = 'It is a long established ' +
'fact that a reader will be distracted by the.'+
'readable content of a page when looking at.'+
'its layout. The point of using Lorem Ipsum ' +
'is that it has a more-or-less normal distribution ' +
'of letters, as opposed to using Content here.'+ 
'content her.'

// A long sentence using the \ backslash

let longExample2 = 'Contrary to popular belief, \
Lorem Ipsum is not simply random text. It has roots \
in a piece of classical Latin literature from 45 BC, \
making it over 2000 years old';

/* Using the + operator to concatenate mutiple strings
or other primitives together to create a new string. */
let con1 = 'Hello ';
let con2 = 'World';

let combine1 = con1 + con2;
let combine2 = con2 + 52;
let combine3 = 'The ' + con2 + ' is vast';

console.log(longExample2);
console.log(combine2);
console.log(combine3);  

// Template string Interpolation
// Uses backtick instead of quotations
console.log(`Vestibulum lacinia elit
    leo, ut hendrerit purus mollis non.`);

// Template string with placeholders
// Uses $ dollar sign and {} curly braces
const VALUE1 = 10;
const VALUE2 = 20;

// Concatenation with expression
console.log('Thirty is ' +
  (VALUE1 + VALUE2) +
  ' and not ' + (2 * VALUE1 + VALUE2)
);

// Placeholder syntax with expression
let place1 = `Thirty is ${VALUE1 + VALUE2}
and not ${2 * VALUE1 + VALUE2}`;
console.log(place1);

// Escape Sequence 
let phrase = 'My name Roger O\'Dell. \tHow are\n you doing toady';
console.log(phrase)

// Instance Property 
// This type doesn't use () as part of its declaration
// It does use the primitive to access it.
let example_length = 'Lorem ipsum doloz sit amet';
console.log(example_length.length);

/* Instance methods
These methods are accessible from the primitive and 
return a whole new type rather than changing the 
existing one. */

let example = 'Lorem ipsum doloz sit amet';
console.log(example_length);

// at() Returns a character at a specified index
console.log(example.at(3)) // output is e 
console.log(example.at(-4))  // output is m

// charAt returns character at a specified index
console.log(example.charAt(6)); // output is i

// concat combines strings of 1 or more
console.log(example.concat(' ','JavaScript'));
console.log(example.concat(' Hello'));

// includes determines if a searched value is in the statement 
// Will returns true or false

console.log(example.includes('olo')); // output is ture

// indexOf returns the index number of the 
// first occurrence of a searched value.
console.log(example.indexOf('o')); // output is 1

// slice returns a new string based on an index range
console.log(example.slice(2,5));
console.log(example.slice(10));

// split divides a string in to a list 
// of substrings based on a pattern
let exampleSplit = 'Lorem*ipsum*doloz*sit*amet';
let word = exampleSplit.split('*');
console.log(word[3]);

// toLowerCase returns the string in
// lower case letters
console.log(example.toLowerCase());

// to UpperCase returns the string in
// upper case letters
console.log(example.toUpperCase());

// trim removes the empty space from
// the beginning and end of a string
console.log(example.trim());

