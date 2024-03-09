{
} //this is a scope
// nested scope and athor way of closer

function person1() {
  let username1 = "sachin";

  function person2() {
    let username2 = "sachin ji";
    console.log(username1);
    console.log(username2); // child function acess in parents function
  }
  // console.log(username2)  not acess
  person2();
}
person1();

if (true) {
  let username = "sachin here";
  if (username === "sachin here") {
    let username3 = "sachool";
    console.log(username + username3);
  }
}
// console.log(username); //not acess

// hoisting////

// addone(); //acess kar sakte hai
function addone(num) {
  return num + 1;
}
addone(5);

// addtwo();  not acessable
let addtwo = function addone(num) {
  // this is a hoisting
  return num + 2;
};
addtwo(5);
