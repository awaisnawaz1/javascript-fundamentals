/*  Task 1: ==  Write an object initializer about cats. This initializer object should have 4 parameters that make up
attributes of a cat object. Also include 1 method inside of this object initializer that is based on a cat
behavior.
Write console log statements to verify your object attributes and its method once you have your object
initializer created. */

let cat={
    name: "Kitty",
    color: "White",
    age: 2, 
    breed: "Persian",

      meow: function()  {
        return "Meow Meow!";
      }
};

console.log(cat.name);
console.log(cat.color);
console.log(cat.age);
console.log(cat.breed);
console.log(cat.meow());





/*  Task 2:  ==  Write a Person class. Write 4 attributes that belong to the person. They should include the #
to make them private. The constructor should have the same attributes as 4 arguments (parameters).
Include the ‘this’ keyword and # inside your constructor. Your class should have getter and setter
methods for each attribute. Include one method within your person class as a behavior of the class.  */

class Person {
    #name;
    #age;
    #city;
    #profession;

    constructor(name, age, city, profession) {
      this.#name = name;
      this.#age = age;
      this.#city = city;
      this.#profession = profession;
    }

    getName() {
        return this.#name;
      }
    getAge()  {
      return this.#age;
    }
    getCity() {
      return this.#city;
    }
    getProfession() {
      return this.#profession;
    }
    setName(name) {
      this.#name = name;
    }
    setAge(age) {
      this.#age = age;
    }
    setCity(city)  {
      this.#city = city;
    }
    setProfession(profession) {
      this.#profession = profession;
    }
    introduce()  {
      return "hi, my name is" + this.#name + "and I am a" + this.#profession;
    }
    }

let person1 = new Person(" Ali ",25,"Warren", " Engineer");

console.log(person1.getName());
console.log(person1.getAge());
console.log(person1.getCity());
console.log(person1.getProfession());
console.log(person1.introduce());
