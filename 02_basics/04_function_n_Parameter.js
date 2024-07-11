// function MyName(){
//     console.log("V");
//     console.log("A");
//     console.log("N");
// }
// MyName();

// function addTwoNum(num1 , num2){
//     // let result = (num1 + num2);
//     // return result;
//     return num1 + num2;
// }
// const result = addTwoNum(3,5);
// console.log(result);


// function LoginUserMessage(username){
//     if(username === undefined){
//         console.log('please enter a username');
//      }else{
//      return `${username} just logged in`
//      }
// }
// console.log(LoginUserMessage()); //when no valus passed it return undefined not null



function calculateCartPrice(val1,  ...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000,4562));




// const user = {
//     username :"vanshika",
//     price :200
// }
// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
//  }
// // handleObject(user);

// handleObject({
//     username :"vanshika",
//     price :200
// })

const myNewArray = [200,400,60,2000,300]
function returnSecondValue(getArr){
    return getArr[3];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,0,20]));