const obj = {
    name : 'miguel',
    age : 25,
    country : 'venezuela'
}

let { name , ...all} = obj;
console.log(name, all);

/* results
miguel { age: 25, country: 'venezuela' } */

const obj1 = {
 name: 'miguel',
 age: 25
}

const obj2 = {
    ...obj1,
    country: 'venezuela'
   }


   console.log(obj2)

   /* 
   results
   { name: 'miguel', age: 25, country: 'venezuela' } 
   */


   const helloword = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('hello word'), 3000)
        : reject(new Error('text error'))
    });
   }

   helloword()
   .then(Response => console.log(Response))
   .catch(error => console.log(error))
   .finally(() => console.log('finalizo'))



   const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
   const match = regexData.exec('2022-09-01');
   const year = match[1];
   const month = match[2];
   const day = match[3];

   console.log(year,month,day)