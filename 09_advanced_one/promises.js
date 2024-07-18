//fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"code",email:"codeexample.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"vanshika",password:"123"})
        }else{
            reject('Error:Something went wrong')
        }
     },1000)
})
promiseFour.then((user,pass)=>{
    console.log(user,pass);
    return user.password
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = true
       if(!error){
           resolve({username:"Javascript",password:"123"})
       }else{
           reject('Error:JS went wrong')
       }
    },1000)
})
async function consumerPromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumerPromiseFive()

// async function getAllUsers(){
//     try{
//         const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//         //console.log(response);
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E:",error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
})