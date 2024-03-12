//for loops

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("hello world");
  }
  console.log(element);
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`${j},${i}`);
    console.log(i + "*" + j + "=" + i * j); // tables print
  }
}

let array = ["superman", "batman", "flash"];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  // console.log(element);
}

// two keyword break and continue

for (let index = 0; index < 10; index++) {
  // console.log(`${index}`);
  if (index == 5) {
    console.log("hello");
    break; //break jumb to outer
  }
  console.log(`${index}`);
}

for (let index = 0; index < 10; index++) {
  if (index == 5) {
    console.log("hello");
    continue; // one time skip and continue loop
  }
  console.log(`${index}`);
}

// while loops

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let myarray = ["superman", "batman", "flash"];
let arr = 0;
while (arr < myarray.length) {
  console.log(myarray[arr]);
  arr++;
  // arr = arr + 1;
}

// while loops

let index = 0;

do {
  console.log(index);
  index++;
} while (index <= 10);
{
  console.log("hello");
}

//for of loops  only array usable

let arrs = [2, 43, 45, 5, 6, 6];
for (const sum of arrs) {
  console.log(sum);
  // console.log(arrs);
}

//maps

let map1 = new Map();
map1.set("in", "india");
console.log(map1); //print Map(1) { 'ind' => 'mdia' }  duplicate not print

for (const [key, value] of map1) {
  console.log(key); //array print [ 'ind', 'mdia' ]
  console.log(value); // value print
}

//for in loops  in objects

let obj = {
  name: "sachin",
  age: 27,
  id: "cvsghcjhcj",
};

for (const key in obj) {
  console.log(`${key} value of ${obj[key]}`);
}

// foreach loops

let numbs = [2, 5, 7, 8, 9, 8, 8];
numbs.forEach((items, index, arr) => {
  // console.log(numbs); // array print
  console.log(items, index, arr); // value print
});
