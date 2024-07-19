// let myName = 'vanshi   '
// let myname = "hitakshi  "

// console.log(myName.trim().length);
// console.log(myName.truelength);




// heroPower.vanshi()
// myHeros.vanshi()

//heroPower.heyVanshi()  // only get access to myHeroes not to heroPower
//myHeros.heyVanshi()

const user={
    name:'vanshika',
    email:'vanshigmail.com'
}
const teacher = {
    makeVideo : true
}
const teachingSupport={
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime:true,
    __proto__: teachingSupport
}
teacher.__proto__ = user

//modern syntax
//Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = 'coding   '
String.prototype.trueLength = function(){
console.log(`${this}`);
//console.log(`${this.name}`);
console.log(`True length is:${this.trim().length}`);
}
anotherUsername.trueLength()
"tea".trueLength()

"vanshika   ".trueLength()