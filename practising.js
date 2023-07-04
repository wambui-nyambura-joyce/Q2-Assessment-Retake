let age = 26;
let beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); 

let greeting = (person) => {
    let name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
  };
  
  console.log(greeting({ name: "Alice" }));
  console.log(greeting(null)); 
  


  // Write a function createHelloWorld. It should return a new function that 
  // always returns "Hello World".
  function createHelloWorld(){
    return function(){
      return "Hello world"
    }
  } 
let create = createHelloWorld();
console.log(create());

// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.
function digits()


const  name  = "John Doe";
console.log(name.substring(0, 4));