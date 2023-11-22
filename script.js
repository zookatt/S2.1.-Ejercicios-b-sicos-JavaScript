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

  /*________________________________________________________________*/

//Ejercicio 1.4: Rest & Spread operators
//Ejercicio 1
const array1 = [10, 20, 30, 40];
console.log("Array 1", array1);
const array2 = [50, 60, 70, 80];
console.log("Array 2", array2);
const arraySpread = [...array1, ...array2];
console.log("Array combinado", arraySpread);

//Ejercicio 2
function suma(...numeros) {
  let resultado2 = 0;
  let i = 0;

  do {
    resultado2 += numeros[i];
    i++;
  } while (i < numeros.length);
  console.log("Array para sumar", numeros);
  return resultado2;
}

const resultado2 = suma(3, 5, 7, 9);
console.log("La suma es:", resultado2);

//Ejercicio 3
const objeto1 = { prop1: "Hello", prop2: "World" };
const objeto2 = { ...objeto1 };
console.log(objeto2);

objeto2.prop1 = 'Hola';
console.log(objeto2);
console.log(objeto1);

//Ejercicio 4
const myArray = [5, 10, 15, 20, 25];

const [first, second, ...rest] = myArray;

console.log("Primero", first);
console.log("Segundo", second);
console.log("Rest", rest);

//Ejercicio 5
function miFuncion(arg1, arg2, arg3) {
  console.log("arg1", arg1);
  console.log("arg2", arg2);
  console.log("arg3", arg3);
}
const newArray = [3, 4, 5];
miFuncion(...newArray);

//Ejercicio 6
const object1 = { one: 1, two: 2, three: 3 };
console.log("Objeto 1", object1);
const object2 = { four: 4, five: 5, six: 6 };
console.log("Objeto 2", object2);
const object3 = { ...object1, ...object2 };
console.log("Objeto 3 fusionado", object3);

/*________________________________________________________________*/


//Ejercicio 1.5: Array transformations
//Ejercicio 1
const arr = [1, 2, 3, 4];
console.log(arr);
const arrMap = arr.map(Math.sqrt);
console.log("Numero cuadrado", arrMap);

//Ejercicio 2
const arr2 = [1, 2, 3, 4];
console.log(arr2);
const arrPar = arr2.filter(el => el % 2 === 0);
console.log(arrPar);

//Ejercicio 3
const arr3 = [1, 10, 8, 11];
console.log(arr3);
const arrMayor = arr3.find(el => el > 10);
console.log(arrMayor);

//Ejercicio 4
const arr4 = [13, 7, 8, 21];
console.log(arr4);
const arrSuma = arr4.reduce((acumulador, el) => acumulador + el, 0);
console.log(arrSuma);

//Ejercicio 5
const arr5 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];
console.log(arr5);
const allInOne = (arr5)=> arr5.filter(el => el>=10).map(el=>el*2).reduce((acumulador, el) => acumulador + el, 0);
const resultado5 = allInOne(arr5);
console.log(resultado5);

//Ejercicio 6
const arr6 = [11, 12, 13, 14];
console.log(arr6);
const todos = (arr6) => arr6 > 10;
console.log("Todos numeros son mayores que 10", arr6.every(todos));

const alguno= (el) => el > 10;
console.log("Algun numero es mayor que 10", arr6.some(alguno));

/*________________________________________________________________*/


//Ejercicio 1.6: Array loops
//Ejercicio 1
let nombres = ['Anna', 'Bernat', 'Clara'];
nombres.forEach((element) => console.log(element));

//Ejercicio 2
let noms = ['Anna', 'Bernat', 'Clara'];

for (const nombre of noms) {
  console.log(nombre);
}

//Ejercicio 3
let numeros1 = [1, 2, 3, 4, 5, 6];
console.log(numeros1);
let numeros1Pares = numeros1.filter(el => el % 2 === 0);
console.log(numeros1Pares);

//Ejercicio 4
let obj = { nombre: 'Ola', edad: 25, ciudad: 'Barcelona' };
for (const property in obj) {
  console.log(`${property}: ${obj[property]}`);
}

//Ejercicio 5
let numeros2 = [1, 2, 3, 4, 5, 6];
console.log(numeros2);
for (const numero of numeros2) {
  console.log(numero);
  if (numero === 5) {
    break;
  }
}

//Ejercicio 6
let noms1 = ['Anna', 'Bernat', 'Clara'];
console.log(noms1);
for (const [index, nombre] of noms1.entries() ) {
  console.log(`Index: ${index}, Valor: ${nombre}`);
}
