const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});


// BigInt permite trabajar con numeros mayores a 2^53
// 1- Añadiendo una "n" al final activas el big int en el valor

const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// 🤝 Promise All Settled
// El Promise.allSettled()método devuelve una promesa que se cumple
//  después de que todas las promesas dadas 
// se hayan cumplido o rechazado, con una matriz de 
// objetos que describen el resultado de cada promesa.
// Por lo general, se usa cuando tiene varias tareas 
// asincrónicas que no dependen unas de otras para completarse correctamente,
//  o si siempre desea saber el resultado de cada promesa.

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// 🌎 Global This

console.log(window);
console.log(globalThis);


// 🔍 Nuevo operador lógico: null operator
const fooo = null ?? 'default string';
console.log(fooo);


const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)

// ⛓ Optional chaining
// permite leer el valor de una propiedad ubicada dentro de una cadena de objetos
//  conectados sin tener que validar expresamente que cada referencia en la cadena sea válida.
//   El operador ?. funciona de manera similar a el operador de encadenamiento .,
//    excepto que en lugar de causar un error si una referencia es casi-nula (null o undefined), 
// la expresión hace una evaluación de circuito corto con un valor de retorno de undefined.


const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('faile')
}


