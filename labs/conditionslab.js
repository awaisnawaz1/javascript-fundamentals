/*  Task 1:
Write a function that takes two parameters. Using an if else statement, compare the two parameters
together using the == operator. Use a console log statement for the if block and else block that outputs
whether these two parameters are equal to each other. Test this function using both number and string
values.    */

function labwork(able1, able2) {
  if (able1 == 25) { 
    console.log('They are equal to each other');
  } else {
      console.log('They are not equal to each other');
}
}

labwork("25", "25");


/*   Task 2:
Write a function that takes 1 parameter. Using a switch statement that takes the parameter, and the
below table, output the description using a console log statement. Ensure that a default message
outputs ‘Not a valid grade’ in the switch. Test this function using different parameters.
Grade Description
E Excellent
V Very Good
G Good
A Average
F Fail    */

function Description(Grades) {
    switch(Grades) {
      case 'E':
          console.log('My grade is Excellent');
          break;
          case 'V': 
            console.log('My grade is Very Good');
            break;
          case 'G':
            console.log('My grade is Good');
            break;
            case 'A':
            console.log('My grade is Average');
            break;
            case 'F':
            console.log('My grade is Fail');
            break;
          default:
            console.log(`Not a valid grade ${Grades}`);
            break;
    }
}
Description('o');
