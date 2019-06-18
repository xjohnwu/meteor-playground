const helloWorld = {
    hello: 1,
    world: 'helloWorld',
    nested: {
      hello: 2
    }
  };

hw = { ... helloWorld }; // Shallow copy
hw.test = "I'm new!";
hw.nested.hello=3;
console.log(helloWorld);
console.log(hw);