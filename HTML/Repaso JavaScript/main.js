//Alertas
//alert("Hola soy Fany Palacios WEB");

// Variables
let nombre="Fany Palacios";
nombre="Fany Palacios WEB";

// Constantes
const apellido ="Palacios";
const altura=187;

//Mostrar por consola
console.log(nombre);
console.log(altura);

//Concatenacion
let concatenacion = nombre + " " + apellido;

//Seleccionar elemntos de la pagina
let datos = document.querySelector("#datos");
datos.innerHTML = `
       <hr/>
       <h1> Soy la caja de datos </h1>
       <h2> Mi nombre es: ${concatenacion}<h2>
       <h3> Mido: ${altura} cm</h3>
`;






