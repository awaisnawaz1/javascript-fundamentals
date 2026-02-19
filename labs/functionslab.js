/* Task 1  ==  Write a function expression for adding two strings together. This expression should take 2 parameters.
This function expression should return both strings using the + sign. Be sure to test the function
expression using a console.log statement. */

    const expression = function(able1, able2) {
    return able1 + able2; 
};
      console.log(expression("Lab ", "Assignment"));



    /* Task 2  == Write a function that will have 2 parameters. One of the parameters will have a default value of 15. This
function should have a return that adds both parameters together. Be sure to test this function using 2
console.log statements */

function assignment(a ,b =15){
  return a + b;
}

console.log(assignment(4, 7));
console.log(assignment(12));

/* Task 3 ==  Write an arrow function based on Task 1. Be sure to test this function
 using a console.log statement.  */


const dive3Arrow = (able1, able2) => 10 + 5;


console.log(dive3Arrow());

