//Math Operations
const suma = 1 + 2;
const resta = 3 - 2; // 1
const multiplicacion = 5 * 2;
const division = 10 / 2;

const concatenar = "Hola " + "Mundo";

const numero = suma + 1; //4

const numero2 = suma++;
const numero3 = suma--;

// Booleans y operadores !, && (and), || (or)

const verdadero = true;
const falso = false;

const opuestoVerdadero = !true; //false
const opuestoFalse = !false; //true

const and = true && falso; //false
const or = true || false; //true

const anidadoBoolean = (true && false) || false;

const compare = "Hola" == "Hola "; //false
const compareStrict = "Hola" === "Hola "; //false
const compare2 = 1 == "1"; //true
const compare3 = 1 === "1"; //false

const a = "hola";
const compare4 = a === "hola"; //true

// String
const hola = "Hola Mundo!";
const holaComillaSimple = "Hola Mundo!";
const meLlamo = "Me llamo Walther.";
const holaConcat = hola + meLlamo; //Hola Mundo! Me llamo Walther.
const templateString = `Hola Mundo! ${meLlamo}`; //Hola Mundo! Me llamo Walther.

//String Properties
const length = hola.length; //11
const charAt = hola.charAt(3); //a
const brakets = hola[3]; //a
const extracto = hola.substring(0, 3); //Hola
const extracto2 = hola.substring(0, 4); //Hola
