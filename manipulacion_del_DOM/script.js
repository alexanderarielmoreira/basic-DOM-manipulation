
//Probando conexión con html;
const helloWorld = console.log('Hello world!')

//Capturando elementos HTML;
const h1 = document.querySelector('h1');
const h1Bis = document.querySelector('.manidom');
const p = document.querySelector('p');
const p1 = document.querySelector('.p1');
const pID = document.querySelector('#p2');
const input = document.querySelector('input');
const imagenInsertada = document.getElementById('imagen');

/**
 * Probando propiedades;
console.log(h1);
console.log(input.value);
console.log({
    h1,
    p,
    p1,
    pID,
    input
});

 * Insertando HTML dinamicamente;
h1.innerHTML = 'TÍTULO PRINCIPAL CAMBIADO'; //Convierte todo a HTML;
h1Bis.innerText = 'SEGUNDO TÍTULO INSERTADO'; //Convierte todo a texto (este protege contra cyber ataques);

 * Accediendo y modificando atributos (propiedades) de los elementos HTML;
console.log(h1.getAttribute('atributo xxx'));
console.log(h1.setAttribute('class','red'));

 * Funciones JS exclusivas para clases;
h1.classList.add('verde');
h1.classList.remove('verde');
h1.classList.toggle('verde');
h1.classList.contains('verde');

input.value = 'Escrito desde JS'; 
*/

//Creando elementos HTML;
console.log(document.createElement('img'));
const img = document.createElement('img');
img.setAttribute('src','./cohete.jfif');
imagenInsertada.replaceWith(img);

//Escuchando eventos;

//Constantes para escuchar eventos;
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const result = document.querySelector('#result');
const form = document.getElementById('form');

//Función para escuchar eventos con onClick, que va como una propiedad dentro del HTML;

/*
function btnOnClick(){
    console.log('Escuchando el evento click');
    const suma = Number(input1.value) + Number(input2.value); 
    result.innerText = "Resultado: " + suma; 
};
*/

function sumarInputsValues(event){
    console.log('Escuchando el evento click');
    console.log({event});
    event.preventDefault();
    const suma = Number(input1.value) + Number(input2.value); 
    result.innerText = "Resultado: " + suma; 
};

//Función para escuchar eventos con addEventListener, que es una función;
// * Recibe dos (2) parámetros: (a) un eventos y (b) un código que se ejecuta
// * cada vez que ocurre dicho evento;

/**
 * Hay dos formas de prevenir eventos (evitar que una página web se recargue) en HTML;
 * 1) Desde JS llamar a la propiedad 'preventDefault' de 'event', de esta forma: event.preventDefault();
 * 2) La segunda forma es cambiar dentro del formulario HTML, el tipo del último boton a 'button', que por defecto
 * es 'type=submit', provocando la recarga automática para enviar los datos;
*/

//btn.addEventListener('click', btnOnClick); 
form.addEventListener('submit', sumarInputsValues);


















