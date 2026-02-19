/* Task 1:
Write a function for this task. Write a while loop that will display all the numbers from 5 to 25. Ensure
you use the 3 key factors for a while loop. The body of this loop should have a log statement to display
your results.   */

function LabWork() { 
  let able = 5; 
   while (able <= 25) {
     console.log(able); 
     able++; 
     } 
  }
LabWork();

/*  Task 2:
Write a function for this task. Using a for loop, display all the numbers divisible by 3. Your starting
number is 0 and your total number is 30. Utilize a modulus to obtain your results. This task should
include an if statement.  */

function DivisibleBy3() { 
  for (let i = 0; i <= 30; i++) { 
    if (i % 3 === 0) {
       console.log(i); 
      } 
    }
   } DivisibleBy3();