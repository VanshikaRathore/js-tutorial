// const user={
//     username: "vanshika",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username = 'vanshi';
// user.welcomeMessage();
// console.log(this);// direct to currect object

// const user1 = function(){
//     let username = " viny"
//     console.log(this.username);
// }
// user1();


//arrow function
// const user1 = ()=>{
//     let username = " viny"
//     console.log(this.username);
// }
// user1();

// const addTwo = (num1 , num2)=>{
//     return num1 +num2
// };
//console.log(addTwo(2,3));

//implicit method
// const addTwo = (num1 ,num2) =>num1 + num2;
// console.log(addTwo(6,3));

const addTwo = (num1 ,num2) =>({username: "vanshi"});
console.log(addTwo(2,1));


//Immediatary invoked function Expressions (IIFE)
(function users(){
    console.log('DB connected');
})();

((name)=>{
    console.log(`DB connected two ${name}`);
})("vanshi");


(()=>{
    console.log(`DB connected two `);
})()