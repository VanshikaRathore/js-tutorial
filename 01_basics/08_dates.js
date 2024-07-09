//  let myDate = new Date()
//  console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleString());
//  console.log(typeof myDate);

//  let createdDate = new Date(2024, 6 , 11 , 5,3)
//  console.log(createdDate);
//  console.log(createdDate.toDateString());
//  console.log(createdDate.toLocaleString());
// let created = new Date("8-20-2002")
//  console.log(created.toString());
//  let myTimeStamp = (Math.floor(Date.now()/1000));
//  console.log(myTimeStamp);

//  console.log(created.getTime());

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})

