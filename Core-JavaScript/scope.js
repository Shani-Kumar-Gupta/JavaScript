// Scope in JS: Lexical Environment // Scope Chain : Execution context
// Scope means where you can access a specific variable or a function in a code.
// Lexical Enviornment: Whenever the EXecution context created a lexical environment is also created.
// Lexical(In a sequence) environment is a local memory along with a lexical env of it's parent.
// Example: 1
// function a(){
//     console.log(b); // What will be the output??
// }

// var b = 10;


function b(){
    c();
    function c(){
        console.log(x); // What will be the output??
    }
}

var x = 100;
b();

// Example 2:
// function d(){
//     var t = 20;
// }

// d();
// console.log(t);