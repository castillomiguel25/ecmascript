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
  let hello = "welcome";
  let world = "to the jungle!";
  let guns = `${hello} ${world}`; // Welcome to the jungle!
  ```

- Let, const, multilínea 

- destructuration de elementos

- operador de propagacion

- propiedad de objeto mejorada
 ```jsx
  let names = 'miguel';
  let ages = 25;

  obj2 = {names, ages};

  console.log(obj2)
  ```

- arrow function 
    ```jsx
    const namess = [
    {name: 'miguel', age: 25},
    {name: 'diunexy', age: 24}
    ]

    let Listofname2 = namess.map(item => console.log(item.name))
    ```


- promesas
      ```jsx
      const helloPromises = () => {
          return new Promise((resolve, reject) => {
              if (true) {
                  resolve('heyy')
              }else {
                  reject('problemaa')
              }
          });
      }


      helloPromises()
          .then(response => console.log(response))
          .catch(error => console.log(error))
      ```

-  class
  ```jsx
  class Calculator {
  constructor() {
  this.valueA = 0
  this.valueB = 0
  }
        
  suma(num1, num2){
  this.valueA = num1
  this.valueB = num2
  return this.valueA + this.valueB
  }
    }
    
    // Instancia
    const calc = new Calculator()
    console.log(calc.suma(2,2))
    ```


- modulos import export
    
