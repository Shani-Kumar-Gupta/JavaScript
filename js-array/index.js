// declare and assign
var list = ["Book", "Pen", "Mobile", "Guitar"]
console.log("list = ", list);

// Another Method to declare and assign value to array using new keyword
var cars = new Array("Volvo", "Hyundai", "Honda");
console.log("cars = ", cars);

// Access the element of an array // Index starts from 0
var firstCarName = cars[0]
console.log("firstCarName = ", firstCarName);

var namelist = list[2]
console.log("namelist = ", namelist);

const arr = ["Samsung", "Redmi", "Oppo", "Vivo"]
console.log("arr = ", arr);

arr[1] = "Mi";
console.log("Modified Arr = ", arr); 
console.log(typeof(arr)); // Array is treated as object in JS

// Array with multiple data types
var arr1 = ["Information", {"Name" : "Shani Kumar Gupta", "Age" : 21, "College" : "GLA University"}, 34, 34.56]
console.log("Array Objects = ", arr1);
console.log("Info = ", arr1[1].Name);

// Looping Array Element
var arrLoop = ["HTML", "CSS", "JS", "Bootstrap", "ReactJS", "Angular", "NextJS", "NodeJS", "Express", "MongoDB", "SQL"];
// 1. Using for loop
console.log("Array looping using for loop::::::")
for(var i=0; i<arrLoop.length; i++){
    console.log(i,"." ,arrLoop[i]);
}

// 2. Using foreach()
console.log("Array looping using foreach ")
arrLoop.forEach((number) => {
    console.log(number);
})

// Array method
// 1. length : used to get the number of element present in an array
console.log("length = ", arr1.length);

// 2. Sort
console.log("sort = ", arr1.sort());
