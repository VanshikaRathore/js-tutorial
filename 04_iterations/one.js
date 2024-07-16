// for(let index = 0; index<=10;index++){
//     const element = index;
//     //console.log(element);
// }
// //Higher Order Function
// const arr = [1,2,3,4,5]

// for (const num of arr) {
//    // console.log(num);

// }
// const greet= "Vanshi";
// for (const greeting of greet) {
//     //console.log(greeting);
//     console.log(`Each char is ${greeting}`);
// }


// //Maps
//  const map = new Map()
//   map.set('IN' , 'INDIA')
//   map.set('USA', "united state of america")
//   map.set("FR", 'France')
//   //map.set('IN', "INDIA") // only contain unique element

//   //console.log(map);

//   for (const [key , value] of map) {
//     console.log(key, ':' , value);
//   }


//   //for in loop
//   const myObject ={
//     JS : 'javascript ',
//     CPP : 'C++',
//     rb : 'ruby'
//   }

//   for (const key in myObject) {
//    console.log(`${key} shortcut for ${myObject[key]}`);
//   }

  const coding =['js', 'ruby', 'java', 'python', 'cpp']

//   coding.forEach(function (val){
//     console.log(val);
//   })

  // function printMe(item){
  //   console.log(item);
  // }
  // coding.forEach(printMe);
  // coding.forEach((item,index,arr)=>{
  //   console.log(item, index, arr);
  // })


  const myCoding = [
    {
    languageName : "javascript",
    languageFileName : "js"
  },
  {
    languageName : "java",
    languageFileName : "java"
  },
  {
    languageName : "python",
    languageFileName : "py"
  }
]

myCoding.forEach((item)=>{
  console.log(item.languageName);
})
