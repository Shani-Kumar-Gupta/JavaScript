class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person1 {
    firstName: string;
    lastName: string;
}

function greetPerson(person: Person){
    return "Hello " + person.firstName + " " + person.lastName;
}

let userGreet = new Student('Shani','Kumar','Gupta');

let Greet = greetPerson(userGreet);