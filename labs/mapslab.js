/*  Task 1: ==  Write a function with no parameters. You will use the return keyword with this function. Create a map
of colors. Each key should be unique. Add a total of 6 colors to this map. This map should be assigned to
a const variable. Using the return keyword, return the variable at the end of the function.  */

function ColorMap()  {
    const colorCode = new Map();

      colorCode.set("black", "#000000");
      colorCode.set("white", "#FFFFFF");
      colorCode.set("green", "#00FF00");
      colorCode.set("orange", "#FF5E00");
      colorCode.set("yellow", "#FFFF00");
      colorCode.set("red", "#FF0000");

      return colorCode;
} 
console.log(ColorMap());





/*  Task 2: ==  Write two functions for this task. The first function will have two parameters. Those parameters will be
the value and key. The body of this function will have a console log statement to print out the key and
value of the map.
The second function will have no parameters. The second function will use the function from task 1 and
its forEach method. It can use the forEach method because of the return keyword that was added as
part of task 1. The parameter in the forEach method should be the name of the first function.
Run the second function to ensure your results. */

function assignment(key, value)  {
      
      console.log(`${key} , ${value}`)
}

function able1() {

      ColorMap().forEach(assignment);
}
able1();