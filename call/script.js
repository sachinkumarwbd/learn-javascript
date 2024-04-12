function addusername (username) {  
   this.username = username;


}

function createusername(username,id,name){
    addusername.call(this,username)  // call is  current exucution contest kisi or funtion ko pass kar deta hai
    this.id = id;
    this.name = name;
    
}

let user = new createusername("sachin1234","1234","sachin");

console.log(user);
   