/* == Task 1:
Write a function that takes one argument. Return the result of a new Promise. Inside the promise will be
a setTimeout function that will contain the resolve instance. Resolve the Promise with texts that says :
`This task was ran ${arg} times` The arg is your function argument. Set the timeout interval to 2 seconds. */

function runTask(arg)  {
    return new Promise(function(resolve) {
        setTimeout(function()  {
          resolve("This task was ran " + arg + " times");
        }, 2000);
    });
}

/* == Task 2:
Write an asynchronous function that has one argument. Have a console log saying ‘Lets start the task’
above the function. Create a variable to capture the returned resolve value from the await function
from Task 1. Pass the argument from this function into the await function. Create another console log
statement to print out that variable. */

console.log('Lets start the task');

async function startTask(value)  {
    console.log("Lets start the task");

    let result = await runTask(value);
    console.log(result);

}
startTask(2);

/* == Task 3:
Write a for loop to iterate 5 times. Call the async method inside the loop and pass in the for loop
increment value as the parameter. Run the file and observe the results.
Expected output should look something like the following:
Lets start the task
This task was ran 0 times
This task was ran 1 times
... */

for(let i = 0; i < 5; i++)  {
  startTask(i);
}