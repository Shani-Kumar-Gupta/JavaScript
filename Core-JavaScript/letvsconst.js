// What is a Temporal Dead Zone?? From hoisting till assign some value in it in case of let and const
// Are let & const declarations hoisted ?? Yes
// SyntaxError vs. ReferenceError vs. TypeError??

console.log(a); // Reference Error

let a = 10;
let c;
c = 20;
console.log(c);

// const d;
// d = 200;
//console.log(d); // Syntax error 

// const e = 100;
// e = 20;
// console.log(e); // Type Error
var b = 100;
