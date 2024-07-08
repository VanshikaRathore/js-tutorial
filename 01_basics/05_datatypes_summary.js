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


  /* ==================================================================*/
  //stack (primitive), heap (nn-primitive)
      
//   myName = "vanshika"
//  let anotherName = myName
//  anotherName = 'vanshi'
//  console.log(myName);
//  console.log(anotherName);  // all values store in stack.

 myObj={
    name:'vanshika',
    age:22,         // myObj make memory in stack buttake refrence from memory
    city:'indore'
 }
 console.log(myObj)
  let userTwo = myObj;
  userTwo.city = 'Barwani'    
  console.log(myObj.city);
  console.log(userTwo.city);


