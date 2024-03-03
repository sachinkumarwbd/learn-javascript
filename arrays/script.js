const array = [2, 3, 43, 5, 5, 6, 7, 7, 1];
console.log(array);
console.log(array[4]);

// arrays methode

array.push(6);
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift(300);
console.log(array);

console.log(array.includes(1));
console.log(array.indexOf(9));

let newarr = array.join();
console.log(array);
console.log(newarr); //new array are covert to string

// slice/splice

const newarrays = array.slice(1, 3); // this is a no effect of orignal array but last includes not includes
console.log(array);
console.log(newarrays);

const spl = array.splice(1, 3); // this is a orignal array effect and last strange print
console.log(spl);

let sci_books = ["physices", "chemestry", "math"];
let arts_books = ["giography", "history", "civices"];

sci_books.push(arts_books); //arts_books as a data includes
console.log(sci_books);

concat;

let allbooks = sci_books.concat(arts_books);
console.log(allbooks);

// spread method

let all_books = [...sci_books, ...arts_books];
console.log(all_books);

let allarraynum = [4, 3, 4, 5, 6, [5, 3, 3, 32, 3], 4, 5, 5];

// flat method

let allarraynums = allarraynum.flat(Infinity);
console.log(allarraynums);

console.log(Array.isArray("sachinkumar"));
console.log(Array.from("sachinkumar")); //convert to array
console.log(Array.from({ name: "sachin" })); //result is empty array
