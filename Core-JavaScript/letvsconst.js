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

// Block Scope and Shadowing
// What is Block
{
    // Compound Statements
    var a = 10;
    console.log(a); 
}

// Whenever we want to use multiple statement as s single result we have to use block
// Example:::::::
if(true) true;
if (true) {
    // Multiple Statement
}

// Block Scope: What all variable and function we can use or axcess inside a particular block
// Example :::::::
{
    var x = 10; // Global Scope
    let y = 20; // Block Scope
    const z = 30; // Block Scope
    console.log(x);
    console.log(y);
    console.log(z);
}
console.log(x);
console.log(y);
console.log(z); // What is expected output??

// Shadowing
var m = 100;
let n = 200;
const p = 300;
{
    var m = 10;
    let n = 20;
    const p = 30;
    console.log(m);
    console.log(n);
    console.log(p);
}
console.log(m);
console.log(n);
console.log(p);

const s = 100;
function x() {
    const s = 20;
    console.log(s);
}
x();
console.log(s);

// INvalid Shadowing
let as = 20;

// Global Space, Local Space , Script, Block Space 
const v = 20;
{
    const v = 40;
    {
        const v = 50;
        console.log(v);
    }
}