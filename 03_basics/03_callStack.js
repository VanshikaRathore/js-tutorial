// Global Execution context
//Function Execution Context
//Eval Execution Context

//two phases  -- Memory Allocation Phase
              //-- Execution phase

// function one(){
//     console.log("one");
//     two()
// }        
// function two(){
//     console.log("two");
//     three();
// }      
// function three(){
//     console.log("three");
// }

// one();
// two();
// three();

// //Falsy Value - false, 0, -0, BigInt, 0n , "" , null, undefined, NaN

// //Truthy Value - "0", 'false', " ", [], {}, function(){}
// const userEmail=[];
// if(userEmail.length === 0){
//     console.log("array is Empty");
// }


// const emptyObj = {}
// if(Object.keys(emptyObj.length===0)){
//     console.log("Obj is empty")
// }

//Nullish Coalescing Operator (??): null Undefined
let val1;
//val1 = 4 ?? 10
//val1 =  5 ?? undefined
val1 = null ??  20 ?? 220
console.log(val1);