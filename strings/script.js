let personname = "sachin";
let age = 27;
let id = 24567;

//console.log(personname + age + id);

console.log(`hello ${personname.toUpperCase()} age ${age}id ${id}`);

//second create strings method

let books = new String("sachin"); // strings is a objects

console.log(books);

//methods

console.log(books[4]); //keys check
console.log(books.__proto__); //emty objects
console.log(books.indexOf("h"));
console.log(books.toUpperCase()); //orignal strings not change

let allbooks = books.substring(0, 4);
console.log(allbooks); //last value not includes

let allbook = books.slice(0, -4);
console.log(allbook); //add negtive value and result revers value

let allinbooks = "   science  ";
console.log(allinbooks.trim()); // remove extra space

let name = "sachin1234@";
console.log(name.replace("3", "5")); // replace
