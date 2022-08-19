const hello = () => {
    return "Hello";
  };
  
  export default hello;


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
