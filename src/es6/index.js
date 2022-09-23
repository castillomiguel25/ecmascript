
// parametros por defecto

// ejemplo 1

function newFunction (name, age, country) {
    var name = name || 'miguel';
    var age = age || 25;
    var country = country || 'Venezuela';
    console.log(name, age, country);
}



// Es6
function newFunction2(name = 'miguel', age = 25, country = 'venezuela' ) {
    console.log(name, age, country);
}

newFunction2()
newFunction2('castillo', '0', 'Ven');

// ejemplo 2 template literals


let hello = 'hello';
let word = 'word';
let complete = hello + ' ' + word;
console.log(complete)

// Es6
let completes = `${hello} ${word}`
console.log(completes)



// multilineas string

// ejemplo

let lorem = 'hola este. es un ejemplo. \n'
+ 'otra frase'

// Es6
let lorem2 = `esta es otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

// destructuracion de elementos
// ejemplo 

let person = {
    'name': 'miguel',
    'age': 25,
    'country': 'ven'
}

console.log(person.name, person.age, person.country)
// Es6
let { name, age } = person;
console.log( name, age);



// valores de propagacion

let team1 = ['miguel', 'francisco', 'yurisma','madeleine'];
let team2 = ['Rosella', 'diuenexy', 'angelo'];

let education = ['francisco jose', ...team1, ...team2];

console.log(education)


// propiedad de objeto mejorada
// ejemplo
// Es5

let names = 'miguel';
let ages = 25;

obj = {name: name, ages: ages};

// Es6
obj2 = {names, ages};

console.log(obj2)


// Arrow Fuctions
//util para una sintasis mas reducida y un this no vinculado
// ejemplo

const namess = [
    {name: 'miguel', age: 25},
    {name: 'diunexy', age: 24}
]


let Listofname = namess.map(function (item) {
    console.log(item.name)
})

// Es6

let Listofname2 = namess.map(item => console.log(item.name))


// promesas
// ejemplo

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



    // class

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


    // modulos import export
    
import hello from './module.js'; 

console.log(hello())

function* helloword() {
    if (true) {
     yield 'hello, ';
    }
    if (true) {
     yield 'world';
    }
   }
 
   const generatorhello = helloword();
   console.log(generatorhello.next().value)
   console.log(generatorhello.next().value)
 