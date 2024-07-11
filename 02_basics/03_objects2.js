const instaUser = {}

instaUser.name = "Vanshi"
instaUser.id = "08.rathoreVanshi"
instaUser.loginIn = false

// console.log(instaUser);

// const regularName={
//     name:"vanshi",
//     email:"rathorevanshika235",
//       fullName:{
//         UserFullName:{
//             fullname: "Vanshika",
//             lastname: "rathore"
//         }
//       }
// }
// console.log(regularName.fullName.UserFullName);


const obj1 = { 1:"a", 2:"b"};
const obj2 = { 3: "c", 4: "d"};
const obj = { 6: "e", 7: "f"};
// const obj3 = {obj1 , obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1 , obj2 , obj)
// console.log(obj3);


// const obj3 ={...obj1 , ...obj2 ,...obj}
// console.log(obj3);

const users = [
    {
        name:'vanshi',
        email:"fdhhj.com"
    },
    {
        name:'vanshi',
        email:"fdhhj.com"
    },
    {
        name:'vanshi',
        email:"fdhhj.com"
    },
    {
        name:'vanshi',
        email:"fdhhj.com"
    },
]

users[1].email
console.log(instaUser);

console.log(Object.keys(instaUser));  //give keys
console.log(Object. values(instaUser));  // givevalues 
console.log(Object.entries(instaUser)); // give array inside array

console.log(instaUser.hasOwnProperty('isloginIn'));