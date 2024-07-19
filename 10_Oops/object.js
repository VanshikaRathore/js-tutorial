function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username= username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);

}
const chai= new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe()
tea.printMe()


//A new object is created: The new keyword initiates the creation of a new javascript object
//A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.this means that it has access to properties and methods define on the constructor prototype.
//The constructor is called
//The new object is returned