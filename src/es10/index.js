let array = [1,2,3, [1,2,3, [1,2,3]]];

// desvolver una matriz con cualquier submatriz aplanada con flat
// util para aplanar arreglos

console.log(array.flat(2))


// Array.prototype.flatMap() lo mismo que flat con el beneficio 
// de que primero manipular la data para luego poder aplanar.

let  arrays = [1,2,3,4,5];

console.log(arrays.flatMap(value => [value, value * 2]));


// String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios
//  al inicio o al final dependiendo de la funcionalidad.

let hello = '        hola mundo';
console.log(hello);
console.log(hello.trimStart());

let hellos= 'hola mundo    '
console.log(hellos);
console.log(hellos.trimEnd());

// try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) 
// sino directamente usarlo en el scope del catch.

try {

} catch {
    error
}


// fromEntries transformara en un objeto clave y valor

let entries = [['name', 'oscar'], ['age', 32]];

console.log(Object.fromEntries(entries));


// Symbol.prototype.description: permite regresar el descripcion opcional del Symbol

let Mysymbl = 'my symbol'
let symbol = Symbol(Mysymbl);
console.log(symbol.description);




