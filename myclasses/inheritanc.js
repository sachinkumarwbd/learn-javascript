class user {
  constructor(id) {
    this.id = id;
  }
  loginme() {
   console.log( `${this.id}abc`);
  }
}
class user2 extends user {
  constructor(id, name, username) {
   super(id)
    this.name = name;
    this.username = username;
  }
  username1() {
    return console.log(`${this.id}`);
  }
}


const newuser1 = new user2("1234","sachin","sachin122");
newuser1.username1()
const newuser2 = new user("sachin")
newuser2.loginme()
console.log(newuser1 instanceof user2);