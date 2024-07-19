class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return '123'
    }
}
const vanshi = new User('vanshika')
//console.log(vanshi.createId())

class teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new teacher('iphone', 'iphonegmail.com')
console.log(iPhone.logMe());