console.log("Hola Mundo!");

//Esto es un comentario
/* 
Esta es la primera linea
Esta es la segunda

adfadsg

asfad

console.log()

*/

//Variables
var color; //Declaracion de variable
color = "azul"; //Asignacion de valor al variable

console.log(color);

var edad = 10;
let numero = 6;
const nombre = "Walther";

const a = 1,
  b = 2,
  c = 3;
// const a = 1;
// const b = 2;
// const c = 3;

let nombreCompleto = "Walther" + " " + "Carrasco";
console.log(nombreCompleto);

var nombreCompleto2 = nombre + " " + "Carrasco";
console.log(nombreCompleto2);

//Data types

var data;
typeof data; //undefined

data = "Hola Mundo!";
typeof data; //string

data = 10;
typeof data; //number

data = true;
data = false;
typeof data; //boolean

data = null;
typeof data; //object

data = undefined;
typeof data; //undefined

data = {
  nombre: "Walther",
  edad: 26,
  trabajo: {
    trabajo1: "Core Code",
    trabajo2: "Paypal",
  },
};
typeof data; //object

data = [1, 2, 3, 4, 5];
data = ["hola", 1, { nombre: "Walther" }, nombreCompleto];
typeof data; //object
