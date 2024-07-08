// 7 primitive data types --> number, string, null, undefined, Bigint, Boolean, symbol

let number = 5;
let string ="vanshi";
const value = 0;
let variable;
var boolean = true;
 const id= Symbol('123')
 const anotherId = Symbol('123')

  console.log(id=== anotherId);

  // reference(non -primitive ) --> array, objects, functions
  const fruits = ['apple', 'banana', 'grapes', 'papaya'];

  let myObj = {
    name:"vanshi",
    age:22,
    city:'indore'
  }

  const myFunction = function(){
      console.log("hello");
  }
  console.log(typeof myFunction);
