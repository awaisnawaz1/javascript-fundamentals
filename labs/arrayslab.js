/* Task 1: == Create an array of ice cream flavors. Your array should contain a minimum of 10 flavors. Once you have
defined your array, write a function that will loop through the array and print out the values.  */

const IceCreamFlavors = ['Butter Peacan', 'Chocklate Fudge', 'Strawberry', 'Vanilla', 'Mango', 
                          'Carmel', 'Mint', 'Pistachio', 'Coffee', 'Coconut'];

    function IceCream() {
        for (let list = 0; list < IceCreamFlavors.length; list++)  {
            console.log(IceCreamFlavors[list]);
        }
    }
IceCream();


/* Task 2: ==  Using your array of ice cream flavors, write a function and use the array’s join method. The join method
should use the ‘ & ‘ as its parameter. Ensure the array is assigned to a variable. Using a console log, add
that variable to print out the result.  */

function joinFlavors() {

  let joinCream = IceCreamFlavors.join(" & ");

    console.log(joinCream);
}

joinFlavors();