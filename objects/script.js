// //singleton

// //literals object
let sym = Symbol("keye1");

let obj = {
  [sym]: "keyes1",
  name: "sachin",
  ful_name: "sachin kumar",
  age: 27,
  email: "sachin.com",
  isloggin: false,
  days: ["monday", "tuesday"],
};
console.log(obj.age);
console.log(obj["ful_name"]); //print is string format
console.log(obj[sym]); //key print

obj.greetings = function () {
  console.log("hello");
};
console.log(obj.greetings()); //undefine value
console.log(obj.greetings); //function refrence vlaue

obj.greetings2 = function () {
  console.log(`${this.name}`);
};
console.log(obj.greetings2());

// object crteate with constructor

let user = new Object(); // singleton objects

user.id = 6672;
user.name = "sachin";
user.age = 28;

console.log(user);

let user2 = {}; //none singleton objects

user2.id = 6672;
user2.name = "sachin";
user2.age = 28;

console.log(user2);

// two objects combindes

let objs1 = { 1: "sachin", 2: "manish" };
let objs2 = { 3: "kumar", 4: "kumar" };

// let objs3 = { objs1, objs2 };
let objs4 = Object.assign({}, objs1, objs2); //{}optaional perameter
console.log(objs4);

let objs5 = { ...objs1, ...objs2 };
console.log(objs5);

console.log(Object.keys(obj)); //keys prints
console.log(Object.values(obj)); //values prints
