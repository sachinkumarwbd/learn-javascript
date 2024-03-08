let price = 23;
console.log(price); //400
console.log(price.toString()); //covert to string
console.log(price.toFixed(2)); //23.00 result

let prices = new Number(2344);
console.log(prices); //[Number: 2344] result

let balnce = 123.544;
console.log(balnce.toPrecision(3)); //124 result  presice value

let date = 200000;

console.log(date.toLocaleString("en-IN")); //indians standerd numbers and befault us

///////    maths  and methods   ////////////

console.log(Math.abs(-3)); // nagetive to chnage positive values
console.log(Math.round(4, 3)); //1 value print
console.log(Math.round(4, 9));
console.log(Math.ceil(1.4)); //top value print
console.log(Math.floor(7.7)); //botton value print

console.log(Math.random()); //random number genrate  0 and 1 range number
console.log(Math.random() * 5 + 1);
console.log(Math.random() * 5);
console.log(Math.floor(Math.random() * 8) + 1); //round up lowest value print

let max = 100;
let min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
