/* Task 1  == Write a function for this task. Assign the below math problem to two different variables. Using PEMDAS
and parenthesis, update 1 or both variables to get an output answer below.
10 + 32 * 12 / 3
Expected Output
138
168   */

function work() {

const able = 10 + 32 * 12 / 3;
const able2 = (10 + 32) * 12 / 3;
console.log(able + " and " + able2);
} 

work();

/* Task 2  ==  Write a function that takes 2 parameters. Using console log statements, 
utilize the below assignment operators with your parameters.
+=
*=
%=  
    */

function plustimemodulus(task1, task2) {
        task2 += task1;
        console.log(task2);

        task2 *= task1;
        console.log(task2);

        task2 %= task1;
        console.log(task2);
}
plustimemodulus(3,9);


/* Task 3 ==   Write a function that takes 2 parameters. Using the below comparison operators, assign each to a const
variable. Write a console log statement using placeholders along with strings that describe each
operators followed by their output.
==
!=
===
*/


function comparisonOperators(a, b) {
      let equal = a == b
      let notEqual = a != b
      let exactEqual = a === b

      console.log(`Using == : ${equal}`)
      console.log(`Using != : ${notEqual}`)
      console.log(`Using === :${exactEqual}`)
}
comparisonOperators(10, "10");