class user{
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age =age;
    }
    myId(){
      return (`${this.id}abc`);
    }
    myName(){
       return (`${this.name}kumar`);
    }
    myAge(){
      return  (`my age:${this.age}`);
    }
}
const newuser = new user(1234,"sachin",12);//new keyword is used to create an object
newuser.myId();
newuser.myName();
newuser.myAge();
console.log(newuser.myAge());
console.log(newuser.myName());
console.log(newuser.myId());



// without classes

function User (id, name, age) {    //object tipe brhave karta hai
    this.id = id;
    this.name = name;
    this.age =age;
 }
 User.prototype.myId = function () {
    return (`${this.id}abc`);
 }
 User.prototype.myName = function () {
    return (`${this.name}kumar`);
 }
 User.prototype.myAge = function () {
    return  (`my age:${this.age}`);
 }

 const newuser1 = new User(1234,"sachin",12);
 console.log(newuser1.myAge());
 console.log(newuser1.myName());

 console.log(newuser1.myId());