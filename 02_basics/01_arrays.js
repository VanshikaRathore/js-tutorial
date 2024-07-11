// const colors = ["red", "yellow", "blue"];
// colors[4]="pink";
// colors[5] = "purple";
// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });

// colors.reverse(); 
// console.log(colors);

 const myArr =[0,1,2,3,4,5];
// const myHeros =["shakiman" , "naagraj"];

// const myArr1 = new Array(1,2,3,4)
// console.log(myArr1[2]);

// myArr.push(8);
// console.log(myArr);

// myArr.pop(8);
// console.log(myArr);
// myArr.unshift(0);
// console.log(myArr);
// myArr.shift(2);
// myArr.shift(0);
// console.log(myArr);

//includes and indexof 
// console.log(myArr.includes(3));  //boolean type object always answer in true and false
// console.log(myArr.includes(8));

// console.log(myArr.indexOf(2));   //show the index number of a given value
// //slice and splice
// console.log("A", myArr);

// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log("c",myArr);

//slice original array ko manipulate nahi krta but splice original array ko change kr deta hai!!'


//Array second part

let fruits = ["apple ", "Banana" , "pineapple"];

let heros = ["superman" , "spider", "flash"];

// fruits.push(heros);

// console.log(fruits);

// fruits.concat(heros);
// console.log(fruits[3][1]);

// const mergeAll = fruits.concat(heros);
// console.log(mergeAll);

// let lang = ["HTML","css", "javascript"];
//  const merge = console.log(...fruits, ...heros, ...lang);
// console.log(merge);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Vanshika"));
console.log(Array.from("Vanshika"));
console.log(Array.from({name:"Vanshi"})) 

let score1=100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3));
