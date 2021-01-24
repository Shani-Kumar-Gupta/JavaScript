// Spread Operator used in Object
let info = {
    firstName: "Shani",
    lastName: "Gupta",
    gender: "male",
    college: "GLA University"
}

let updatedInfo = { ...info, testing: false, lastName: "Garg" };

console.log("Updated Info : ", updatedInfo);

// Spread Operator used in Array
let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 7, 8];
let arr3 = [...arr1, arr2, 9, 10];
console.log(arr3);

// In case of array spread operator used to append if the value will be same.