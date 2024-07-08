// let name ="vanshika";
// let age = 22
// console.log(name + age);

// console.log(`my name is ${name} and age is ${age}`);

const gameName = new String('rathore')

// console.log(gameName[0]);
// console.log(gameName[5]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));
// console.log(gameName.lastIndexOf('o'));

const newString = gameName.substring(0,3)
console.log(console.log(newString));
const newString1 = gameName.slice(-6,4)
console.log(console.log(newString1));

const userName = "    Vanshi    ";
console.log(userName);

console.log(userName.trim());
console.log(userName.trimEnd());
console.log(userName.trimStart());


const url="https://www.w3school688.com"
console.log(url.replace('688', '*'));

console.log(url.includes('www'));

console.log(gameName.split('t'));