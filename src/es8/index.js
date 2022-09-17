//Object entries devuelve los valores de una matriz.

const data = {
    frontend: 'miguel',
    backend: 'angel',
    edad: 25,
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object values devuelve los valores de un Objecto a un arreglo

const datas = {
    frontend: 'miguel',
    backend: 'angel',
    edad: 25,
}

const values = Object.values(datas)
console.log(datas)

// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.
const string = 'hello' 

console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(11, 'yessss'))