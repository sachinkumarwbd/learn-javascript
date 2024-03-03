// dates/times;

let date = new Date();
console.log(date);

// method of date

console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toString());
console.log(date.toTimeString());
console.log(date.toISOString());

let indiadate = new Date("03-03-2024");
console.log(indiadate.toDateString());
console.log(indiadate.toLocaleString());
console.log(indiadate);

let newdates = new Date();
console.log(newdates.getMinutes());
