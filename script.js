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

/*________________________________________________________________*/

//Ejercicio 1.2: Operador ternario
//Ejercicio 1
function puedeConducir(edad) {
    return edad >= 18 ? 'Puedes conducir' : 'No puedes conducir';
  }
  
  let edadUsuario = 20;
  console.log("Edad de usuario es:", edadUsuario);
  let respuesta = puedeConducir(edadUsuario);
  console.log(respuesta);
  document.getElementById("ternario").innerHTML = respuesta;
  
  //Ejercicio 2
  let num1 = 10;
  console.log("Numero1 es:", num1);
  let num2 = 500;
  console.log("Numero1 es:", num2);
  
  let mensaje = num1 > num2 ? 'num1 es mayor' : 'num2 es mayor';
  console.log(mensaje);
  document.getElementById("comparacion").innerHTML = mensaje;
  
  //Ejercicio 3 - Uso enlazado de operadores ternarios
  let num = -10;
  console.log("Numero es:", num);
  
  let resultado = num > 0 ? "positivo" : (num < 0 ? "negativo" : "cero");
  console.log("El numero ", num, " es ", resultado);
  document.getElementById("enlazado").innerHTML = "El numero " + num + " es " + resultado;
  
  //Ejercicio 3 - Operador ternario con funciones
  let encontrarMaximo = (a, b, c) => {
    console.log("Cual es el valor maximo?", a, b, c)
    let maximo = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    return maximo;
  }
  
  let resultadoMaximo = encontrarMaximo(4, 6, 11);
  console.log("El valor máximo es:", resultadoMaximo);
  document.getElementById("maximo").innerHTML = "El valor máximo es: " + resultadoMaximo;
  
  //Ejercicio 4
  let parOImpar = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
      let mensaje = numeros[i] % 2 === 0 ? "es par" : "es impar";
      console.log("Numero", numeros[i], mensaje);
    }
  }
  
  const numeros = [6, 7, 8, 9, 10];
  console.log("Array de numeros:", numeros);
  parOImpar(numeros);