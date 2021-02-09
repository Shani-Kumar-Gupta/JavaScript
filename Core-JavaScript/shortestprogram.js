/* Whenever run this JS file JS Engine creates GEC which consists window object 
and this which points to grobal window object */

// this === window : true

var a = 10;
function b(){
    var x = 10;
}

console.log(window.a);
console.log(a);
// console.log(x)
console.log(this.a);