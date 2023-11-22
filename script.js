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

  /*________________________________________________________________*/

//Ejercicio 1.3: Callbacks
//Ejercicio 1
let procesar = (num3, callback) => {
    callback(num3);
  }
  let callback = (num3) => {
    console.log("El número recibido es:", num3);
    document.getElementById("callback").innerHTML = "El número recibido es: " + num3;
  };
  
  procesar(33, callback);
  
  //Ejercicio 2
  let calculadora = (a, b, callback2) => {
    callback2(a, b);
  }
  let sumaCallback2 = (a, b) => {
    let suma = a + b;
    console.log("La suma de dos numeros es:", suma);
  }
  calculadora(3, 4, sumaCallback2)
  
  //Ejercicio 3
  function esperarISaludar(nombre, callback) {
    setTimeout(function () {
      callback(nombre);
    }, 2000);
  }
  
  esperarISaludar("Katia", function (nombre) {
    console.log("Hola", nombre);
  });
  
  //Ejercicio 4
  function procesarElements(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
  let miCallback = (el) => {
    console.log("Procesando elemento:", el);
  };
  const miArray = [2, 4, 6, 8];
  procesarElements(miArray, miCallback);
  
  //Ejercicio 5
  function procesarCadena(cadena, callback) {
    const cadenaMayusculas = cadena.toUpperCase();
    callback(cadenaMayusculas);
  }
  const myCallback = (cadena) => {
    console.log("Cadena mayusculas:", cadena);
  };
  
  const myCadena = "Hola, mundo!";
  procesarCadena(myCadena, myCallback);

  