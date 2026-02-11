/* Lesson 7 - Conditional Statements */

// if statement 
/* A condition is checked. When false
the if block is ignored.  */
function ifExample(num) {
    console.log('Before if statement');
    if (num >= 10) {
      console.log(`Value of ${num} is larger than 10`);
    }
    console.log('After the if statement');
}

ifExample(10);

/* If with else will alow for a false condition
to also execute a block of code. */
function elseExample(value) {
  if(value == 'JavaScript')  {
    console.log(`${value} is true`);
  } else {
      console.log(`$(value} is false`);
  }
}
elseExample('JavaScript');

// Example 2 for if/else
function oddOrEven(num) {
    if (num % 2 == 0) {
      console.log(`${num} is even `);
    } else {
        console.log(`${num} is odd`);
    }

    }
oddOrEven(8);

// If/Else chain 
function elseIfExample(num5)  {
    if(num5 <= 5) {
      console.log(`${num5} is less than 5`)
    } else if(num5 <= 10) {
        console.log(`${num5} is less than 10`);
    } else if(num5 <= 15)  {
        console.log(`${num5} is less than 15`);
    } else {
        console.log(`${num5} is more than 15`);
    }
}
elseIfExample(8);

// Using Logical Operator &&
function logicalAndExample(value1, value2) {
  if (value1 == 10 && value2 > 10) { 
    console.log('Both condition are true');
  } else {
      console.log('One or more condition is false');
}
}

logicalAndExample(11, 11);

// Using Logical Operator ||
function logicalOrExample(value3, value4) {
  if(value3 <= 9 || value4 > 20) {
    console.log('One of the condition is true');
  } else{
      console.log('Both condition are false');
   }
  }

  logicalOrExample(19, 21);

  // Using Logical Operator |
  function logicalNotExample(value5, value6) {
    if(!(value5 == 'Happy') || (value5 === 'Happy')) {
      console.log('I am happy');
  } else {
      console.log('I am not happy');
  }
}

logicalNotExample('Happy');

/* Ternary Operator ?: - A shorthand 
if/else statment. */
const example = (able) => (able > 10) ?
  `${able} is greater` : `${able} is less`;

  console.log(example(2));

// Switch statement 
function favoriteColor(color) {
    switch(color) {
      case 'Blue':
          console.log('My favorite color is Blue');
          break;
          case 'Red' .toLowerCase(): 
            console.log('My favorite color is Red');
            break;
          case 'Green':
            console.log('My favorite color is Green');
            break;
          default:
            console.log(`My fav color is ${color}`);
            break;
    }
}

favoriteColor('red');

const favoriteColor2 = (color) => {
  switch(color) {
  case 'Blue':
      return 'My favorite color is Blue';
  case 'Red':
      return 'My favorite color is Red';
  case 'Green':
      return 'My favorite color is Green';
  defalut:
      return `My fav color is $(color)`;
  }
}

console.log(favoriteColor2('Red'));
