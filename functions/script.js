function addnumb() {
  console.log("hello");
}
addnumb(); //exucation
addnumb; // refrences

function twonumbersadd(num1, num2) {
  // console.log(num1 + num2);

  let prints = num1 + num2;
  return prints;

  return num1 + num2;
}
twonumbersadd(1, 3);

let add = twonumbersadd(3, 4);
// console.log(add); //value undefined

function person(username) {
  return `${username}`;
}
console.log(person("sachin"));
console.log(person()); // undefine value

function person1(username = "sachin kumar") {
  // value pass
  return `${username}`;
}
console.log(person1());

//functions with objects and array

function shoping(...shop) {
  //rest operaters

  return shop;
}
console.log(shoping(100, 200, 300));

function shoping(val1, val2, ...shop) {
  // [ 300 ] result
  //rest operaters

  return shop;
}
// console.log(shoping(5)); // one value print
console.log(shoping(100, 200, 300)); // print [ 100, 200, 300 ] array return value

let details = {
  usernamer: "sachin",
  rollname: 27,
};

function user(obj) {
  console.log(`${obj.usernamer} ${obj.rollname}`);
}
user(details);
