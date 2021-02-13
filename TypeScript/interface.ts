interface Person {
    firstName : string,
    lastName : string
}

function greetUser(person : Person){
    console.log("Welcome" + person.firstName + " " + person.lastName);
}

let greet = greetUser({firstName: "Shani", lastName: "Gupta"});