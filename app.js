let myName = 'Warryn Evins';

const usStates = 50;

console.log(myName, usStates)

let x = 5 + 4; 
console.log(x)


//Now I just need to figure out how to get the meat of this if/then 

if (myName.charCodeAt(0) >= "L".charCodeAt(0) ) {
    alert('Back of the Line!');
} else {
    alert('Next!')
}

function sayHello() { 
    console.log('Hello World')
}

sayHello()

function checkAge(name, age) {
    if (age < 21) {
        console.log(`sorry, ${name}, you are not old enough to view this site.`)
    }
    else {
        console.log(`access granted. Welcome, ${name}!`)
    }
}

checkAge('karkat', 21)
checkAge('charles', 21)
checkAge('abby', 27)
checkAge('james', 18)
checkAge('john', 17)

let veggies = ["Broccoli", "Asparagus", "Cauliflower"]

for (let i= 0; i < veggies.length; i++) {
    console.log(veggies[i])
}

let people = [
    {
        name: "Noctis Lucis Caelum",
        age: 22
    },
     {
         name: "Ignis Scientia",
         age: 24
     },
     {
         name: "Prompto Argentum",
         age: 22
     },
     {
         name: "Gladiolus Amiticia",
         age: 25
     },
     {   
        name: "Nyx Ulrich",
        age: 27
     }
];

for (let i = 0; i < people.length; i++) {
checkAge(people[i].name, people[i].age) 
}

function getLength(inputString) {
    return inputString.length
}

let length = getLength('Hello World')

if (length % 2 === 0) {
    alert('The World is Nice and Even')
}
else {
    alert('The World is an Odd Place')
}