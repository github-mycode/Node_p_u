const fs = require('fs');

// const book ={
//     title: "Ego is the Enemy",
//     auther: 'Ryan Holiday'
// }
// const bookJson = JSON.stringify(book);
// console.log(bookJson);
// fs.writeFileSync('book.json', bookJson);


// const bookJsonBuffer = fs.readFileSync('book.json');
// console.log(bookJsonBuffer);
// const bookJsonstr = bookJsonBuffer.toString();
// console.log(bookJsonstr);
// const book1 = JSON.parse(bookJsonstr);
// console.log(book1.auther);
// const book = JSON.parse(bookJsonBuffer);
// console.log(book.auther);


const dataBuffer = fs.readFileSync('book.json');
const dataStr = dataBuffer.toString();
const book = JSON.parse(dataStr);
console.log("Name: " + book.name);
console.log("age: "+ book.age); 