const user={
    username:'vanshika',
    loginCount:8,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`username ${this.username}`)
        //console.log(this);
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(`username ${this.username}`)
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
        console.log(`welcom ${this.username}`)
    }
   return this
}
const userOne =  new User('vanshi',4,true)
const userTwo = new User('vanshika',8,)
//console.log(userOne.constructor);

console.log(userTwo instanceof Object);
