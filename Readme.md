JavaScript

Lenguaje de programación que utiliza esta especificación (ECMAScript), para trabajar con estas características que van siendo agregadas anualmente a partir del año 2015, en el cual se lanzó la versión 6.Estuvo sin sacar ninguna nueva version (16 años, 1996 - 2001)

ECMAScript

ECMAScript es la especificación del lenguaje propuesto por ECAM internacional una institución encargada de los estándares. JS es el lenguaje que esta especificación usa para trabajar sobre las características que son añadidas año con año. Iniciando en el 2015 con la versión 6.


¿Qué se implementó en ES6?

- Default params
    
    ```jsx
    functionmyFunction(param1 = 'default', param2) { ... }
    ```
    
- Concatenación
    
    ```jsx
    let hello = 'welcome';
    let world = 'to the jungle!';
    let guns = `${hello} ${world}` // Welcome to the jungle!
    ```

   Let, const, multilínea, spread and destructuration

    let variable1; // Block scope
const constant1; // Block scope and constant
const stringmultiline = `this is a multi
line string`;

const array = ['item1', 'item2'];
const array2 = ['item3', 'item4'];
const allArrays = [...array, ...array2] // ['item1', 'item2' , 'item3', 'item4']

const object = {
	name: 'manuel',
	age: 24,
	country: 'PE',
};

const { name, age } = object; // 'manuel', 24

## Arrow Functions, Promesas y Parámetros en objetos

- composicion - `newPromise()`
    - `resolve()` - comportamiento al cumplir la promesa
    - `reject()` - comportamiento al fallar la promesa
    - `.then (⇒)` - obtener el valor del resolve
    - `.error(⇒)` - obtener el valor del reject()