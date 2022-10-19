/*
3) Traduce a código JavaScript las variables del ejemplo anterior y deja 
tu código en los comentarios.
*/

let nombre = "Alexander Ariel";
let apellido = "Moreira";
let platziUser = "alexarielmor";
let edad = 34;
let correoElectronico = "alarmoreira@gmail.com";
let mayorDeEdad = true;
let dineroAhorrado = 24500.34;
let deudas = 20000;

/*
4) Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
 - Nombre completo (nombre y apellido)
 - Dinero real (dinero ahorrado menos deudas)
*/ 

let nombreCompleto = nombre + " " + apellido;
let dineroReal = dineroAhorrado - deudas;

console.log("El nombre completo es: ", nombreCompleto)
console.log("El dinero real es: ",dineroReal)

/*
5) Convierte el siguiente código en una función, pero, cambiando cuando sea necesario 
las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
*/ 

function printCompleteName(nombre, apellido, apodo){
    const name = nombre;
    const lastname = apellido;
    const completeName = name + " " + lastname;
    const nickname = apodo;

    return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
};

/*
6) Replica el comportamiento del siguiente código que usa la sentencia switch 
utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
};
*/

let tipoDeSuscripcion3 = "";

if (tipoDeSuscripcion3 === "Free"){
    console.log("Solo puedes tomar los cursos gratis.");
} else if (tipoDeSuscripcion3 === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscripcion3 === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
};

/*
7) Replica el comportamiento de tu condicional anterior con if, else y else if, pero 
ahora solo con if (sin else ni else if).
*/ 

let tipoDeSuscripcion4="Expert Plus";

if (tipoDeSuscripcion4 === "Free"){
    console.log("Solo puedes tomar los cursos gratis.");
} else if (tipoDeSuscripcion4 === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscripcion4 === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if(tipoDeSuscripcion4 === "Expert Plus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}; 

/*
Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
};

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
};
*/ 

let i = 0;
while(i < 5){
    console.log("El valor de i es: ", i);
    i++
};

let i2 = 10;
while(i2 >= 2){
    console.log("El valor de i es: ", i2);
    i2--
}; 

/*
Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
Pista: puedes usar la función prompt de JavaScript.
*/ 

function esIgualA4(){ 
    while(preguntaUsuario !== 4){
        //Uso var para que el hoisting pueda llevar su ejecución hasta la linea del while; 
        var preguntaUsuario = prompt("¿Cuánto es 2 + 2?");
        preguntaUsuario = Number(preguntaUsuario);
        if(preguntaUsuario === 4){
            console.log("¡Felicitaciones, respondiste correctamente!")
            alert("¡Felicitaciones, respondiste correctamente!");
        } else {
            console.log("Inténtalo de nuevo")
    };
    };
}; 

/*
Funcionamiento de forEach();
*/

let paisesLatinos = ['Argentina','Brasil','Chile','Peru','Bolivia','Venezuela'];

paisesLatinos.forEach(
    (elemento)=>{
        console.log(elemento);
    }
);

paisesLatinos.forEach(
//  Recibe como argumento una arrow function (función flecha), y dentro de ella 
//  se alojan: 1)Elemento; 2) Índice; 3) Array;     
    (elemento,index,paisesLatinos)=>{
        console.log(elemento,index,paisesLatinos);
    }
);

/*
Objetos en JS;

Se pueden crear de dos formas:

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

------------------------------

var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};
*/
var arielMoreira = {
    edad: 34,
    cumpleaños: '07/11/1987',
    dni: 36197352,
    //esta variable contiene un array; 
    profesion: ['Programador', 'Abogado','Mediador','Técnico Legislativo','Asesor legal'],
    empleoActual: 'asesor legal en Mun. de Rcia.'
};

console.log('Las profesiones de Ariel son: ',arielMoreira.profesion.forEach(
    (e,i)=>{
        console.log('Profesión: ',e,';','Indice: ',i);
    }
));

//Este array contine un objeto y otros elementos;
let arrayConObjetos = [
    arielMoreira,1,2,3,'Moreira' 
];

arrayConObjetos.forEach(
    (e,i)=>{
        console.log('Los elementos contenidos son: ',e,i);
    }
);

/*
Crea una función que pueda recibir cualquier array como parámetro e 
imprima su primer elemento.
*/

arrayDePruebaUno = ['Manzana','Banana','Naranja','Limon','Frutilla'];

function printPrimerElemento(lista){ 
    console.log(`El primer elemento de la lista es ${lista[0]}.`);
}; 

printPrimerElemento(arrayDePruebaUno);

/*
Crea una función que pueda recibir cualquier array como parámetro e 
imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
*/ 

arrayDePruebaDos = ['Argentina','Brasil','Paraguay','Uruguay','Bolivia','Venezuela'];

function printCadaElemento(lista){
    console.log('Imprime cada elemento del array'); 
    lista.forEach(
        (elemento,index)=>{
            console.log(`Elemento: ${elemento}, Índice: ${index}`);
        }
        );
};

printCadaElemento(arrayDePruebaDos);

/* 
Crea una función que pueda recibir cualquier objeto como parámetro e 
imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
*/

//A partir del ECMAScript 5, esto se puede hacer nativamente de tres (3) formas:

// 1) Bucle for ... in; 

function iterarCualquierObjeto(unObjetoCualquiera){
    for(unObj in unObjetoCualquiera){
        console.log(unObj);
    };
};

let testFunction1 = iterarCualquierObjeto(miAuto); 

// 2) Object.keys(o)

function iterarCualquierObjeto2(unObjetoCualquiera2){
    console.log(Object.keys(unObjetoCualquiera2));
};

let testFunction2 = iterarCualquierObjeto2(miAuto); 

// 3) Object.getOwnPropertyNames(o)

function iterarCualquierObjeto3(unObjetoCualquiera3){
    console.log(Object.getOwnPropertyNames(unObjetoCualquiera3));
};

let testFunction3 = iterarCualquierObjeto3(miAuto); 

/**
 * Antes del ECMAScript 5, el recorrido de los elementos de 
 * un objeto no se podia realizar a través de un método nativo. 
 * Entonces ello se conseguia mediante la siguiente función:
*/

function listAllProperties(o){
    var objectToInspect;
    var result = [];

    for(objectToInspect = o; objectToInspect !== null;
        objectToInspect = Object.getPrototypeOf(objectToInspect)){
     result = result.concat(
         Object.getOwnPropertyNames(objectToInspect)
     );
 }
     return result;
};

/**
 * Pregunta Bonus:  
 * Si ya eres un experto en el lenguaje, te desafío a comentar como resplicar
 * el comportamiento de if, else if, etc., con arrays y objetos, y además, un solo condicional.
*/

const tiposDeSuscripciones = {
    free:'Solo puedes tomar los cursos gratis.',
    basic:'Puedes tomar casi todos los cursos de Platzi durante un mes.',
    expert:'Puedes tomar casi todos los cursos de Platzi durante un año.',
    expertduo:'Tu y alguien más pueden tomar TODOS los cursos de Platzi durante un año.'
};

function mostrarSuscripcion(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
        console.log(`MENSAJE: ${tiposDeSuscripciones[suscripcion]}`);
        alert(`MENSAJE: ${tiposDeSuscripciones[suscripcion]}`);
        return;
    };
    console.warn('Tipo de suscripción inexistente.');
};

mostrarSuscripcion('expertduo'); 

/*----------------------------------------------------------------------------*/

//¿Cómo construir un objeto en JS?
const miAuto ={
    marca:'Toyota',
    modelo:'Corolla',
    año:2022,
    detalleDelAuto: ()=>{
        console.log(`Automovil: ${this.modelo}, ${this.año}.`)
    }
};

//Para traer un elemento del objeto, lo hacemos con la notacion del punto;
console.log(miAuto.marca);

//¿Cómo ingresar al método de un objeto?
miAuto.detalleDelAuto(); //Como se trata de un método, lo invocamos como tal; 

//Función constructora: para construir objetos desde un 'molde'; 
function auto(marca, modelo, año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año; 

}; 

//¿Cómo instanciamos un nuevo objeto desde su super objeto?
let auto1 = new auto('Tesla', 'Model 3', 2020);
let auto2 = new auto('VW','Trend',2017); 
let auto3 = new auto('Ford','Focus',2018);

function persona(nombre,apellido,dni,domicilio,ocupacion){
    this.nombre = nombre;
    this.apellido=apellido;
    this.dni=dni;
    this.domicilio=domicilio;
    this.ocupacion=ocupacion;
};

let ariel = new persona('Alexander Ariel','Moreira',36197352,'J.P Duarte 1413','Programador')

console.log(ariel); 

