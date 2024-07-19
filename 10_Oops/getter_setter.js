class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email= value;
    }
    get password(){
       // return this._password.toUpperCase()
      return `${this._password}vanshi`
    }
    set password(value){
        this._password = value
    }
}

const vanshi = new User("vanshigmail.com", "abdgj")
console.log(vanshi.password);
console.log(vanshi.email);