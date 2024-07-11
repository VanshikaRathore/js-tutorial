
const MySym = Symbol("key1");


const jsUser = {
   name : "Vanshi",
   "full Name" : "Vanshika Rathore",
   age : 22,
  // MySym : "MyKey1",  in string format
   [MySym] : "Mykey1",
   city: 'Barwani',
   email: 'vanshikagmail.com',
   isLogin:false,
   lastLoginDays: ['Monday','Tuesday']
};


// console.log(jsUser.full Name);
// console.log(jsUser["city"]);
// console.log(jsUser["full Name"]);
// console.log(typeof jsUser.MySym);  //string
// console.log(jsUser[MySym]);

jsUser.email = "rathorevanshikagmail.com";
// console.log(jsUser);
// Object.freeze(jsUser);
jsUser.email = "abhjn.com"
// console.log(jsUser);

jsUser.greeting = function(){
   console.log("Hello User");
}
 jsUser.greetingtwo = function(){
   console.log(`Hello user , ${this.name}`); // taking refrence by this keyword
 }

console.log(jsUser.greetingtwo()); 

console.log(jsUser.greeting());