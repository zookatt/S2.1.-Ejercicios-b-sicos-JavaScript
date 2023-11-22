//Ejercicio 1.1: Arrow functions
//Ejercicio 1
let add = (a, b) => a + b;
document.getElementById("flecha").innerHTML = add(4, 5);
console.log(add(4, 5));

//Ejercicio 2
let randomNumber = () => Math.floor((Math.random() * 100) + 1);
document.getElementById("randomNumber").innerHTML = randomNumber();


//Ejercicio 3
class Person {
  constructor(name) {
    this.name = name;
    this.greet = () => {
      const greeting = `Hola, ${this.name}`;
      console.log(greeting);
      document.getElementById("this").innerHTML = greeting;
    };
  }
}

const myPerson = new Person("Katia");
myPerson.greet();

//Ejercicio 4
let printNumbers = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    console.log("Array de numeros:", numbers[i]);
  }
}
const numbers = [1, 2, 3, 4, 5];
printNumbers(numbers);

//Ejercicio 5
function myFunction() {
  console.log('Imprimi este mensaje al pasar 3 segundos!');
}