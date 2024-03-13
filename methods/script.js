//foreach
let mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let allnums = [];
mynums.forEach((nums) => {
  if (nums > 4) {
    allnums.push(nums);
  }
});
console.log(allnums);

//filter methods

// let allnum = mynums.filter((num) => num > 5); //no return
console.log(allnums);
let allnum = mynums.filter((num) => {
  return num > 5;
});
console.log(allnum);

let car = [
  { name: "suzuki", date: 1990, company: "suzuki" },
  { name: "splender", date: 1999, company: "hero" },
  { name: "pilsur", date: 2000, company: "bajaj" },
  { name: "pilsur", date: 2000, company: "bajaj" },
];

let cars = car.filter((check) => check.name == "splender");
// let cars = car.filter((check) => check.name);

console.log(cars);

//map method

let mynumbers = [2, 5, 7, 8, 89, 6, 4, 3, 3];
// let allmynumbs = mynumbers.map((my) => my + 10);

// chaning;
let allmynumbs = mynumbers
  .map((my) => my + 10) //operations
  .map((my) => my + 1)
  .filter((my) => my >= 17); // true aur false

console.log(allmynumbs);

//reduce methods

let array1 = [1, 2, 3, 4];

// let ini = 0;
let sum = array1.reduce((acc, curr) => {
  console.log(`acc: ${acc} and curr : ${curr}`);
  return acc + curr;
}, 0);

console.log(sum);
