import slugify from "slugify";
import Topla  from "moduldersi.mjs";
//var slugify = require('slugify'); 
// bu kode package json içine "type":"module",
// // eklendiği için çalışmaz eski versiyonlarda import işlemi yoktu 
const title = slugify('some string');
console.log(title);

// const title2 = slugify('some string dfsf sfsfs', '*');
// console.log(title2);


// import topla from "./myModul";

// console.log(topla(2,4));

console.log("hello");
console.log(Topla(2,4));
