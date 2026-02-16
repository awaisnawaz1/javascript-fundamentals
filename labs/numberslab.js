/* Task 1 == Task 1:
Using the below literal values, assign them to variables. Use numeric separators to make them more
readable. Use a console log statement with each of the variables to display the output.
a. 34038
b. 45838.8734
c. 0b011000101011
d. 0x174C0
e. -895612  */

let a = 34_038;
let b = 45_838.8734;
let c = 0b0110_0010_1011;
let d = 0x17_4C0;
let e = -895_612;

console.log("a="+a);
console.log("b="+b);
console.log("c="+c);
console.log("d="+d);
console.log("e="+e);


/* Tast 2  == With the literal value of 29 as a reference, write literals that represent the Numeric systems:
Hexadecimal, Binary and Octal. Assign them to variables and verify that they all display 29 using console
log statements. You can get this information from the programmer calculator in Windows, or visit the
following website. https://www.rapidtables.com/math/number/Numeral_system.html#numeral
   */

let binaryValue = 0b011101;
console.log(` ${binaryValue}`);

let octalValue = 0o35;
console.log(` ${octalValue}`);

let hexValue = 0x1d;
console.log(` ${hexValue}`);