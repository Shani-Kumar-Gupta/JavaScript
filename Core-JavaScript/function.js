// How function work in JS using Execution context

var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 7;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}