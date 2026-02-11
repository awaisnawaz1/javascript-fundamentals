// Task 1

let value = function(num1=5,num2=10)
{
    return num1+num2;
}
console.log(value(3,6));

    // Task 2

function assignment(a ,b =15){
  return a + b
}

console.log(assignment(4, 7));
console.log(assignment(8, 11));

// Task 3

{
  let value50Arrow = value => value + 50;

  console.log(value50Arrow(10));
}