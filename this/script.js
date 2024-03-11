// this keyword use only object

let obj = {
  username: "sachin",
  age: 25,
  details: function () {
    console.log(`${this.username}`); // current contest refere
    console.log(this.username);
    console.log(username); // not define
    console.log(this);
  },
};

obj.details();
obj.username = "sachin kumar"; //value / contest change
obj.details();
console.log(this.username); //undefined value
console.log(this); // node envirement empty object  but browser  ke ander hai wo windows object hota hai

// arroy function

function person() {
  console.log(this); //some values print
}

let objects1 = function () {
  console.log(this.username); //only objects can this keyword and undefine
};
objects1();

let objects = () => {
  console.log(this); //  empty objects
};
objects();

let addnum = (num1, num2) => {
  return num1 + num2; // return importand
};
console.log(addnum(2, 3));

let addnums = (num1, num2) => num1 + num2; // return nahi lagenaka
console.log(addnums(2, 3));

let persons = (num1, num2) => ({
  name: "sachin",
});
console.log(persons());
