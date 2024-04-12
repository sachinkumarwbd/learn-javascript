class user {
     constructor(username){
     this.username = username;
    }
    logme(){
        console.log(`${this.username}`); 
    }
    static createid(){   //acess nahi dena chahte hun
      return `1233sachhin`  
    }
}
const newuser = new user("sachin kumar");
newuser.logme();
console.log(newuser.createid());