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
