const Foo = function() {
  this.greet = 'Hello world!';
}


Foo.prototype.greeting = function() {
  console.log(' I want to say '+ this.greet);
}


const bar = new Foo();

console.log(bar.__proto__ === Foo.prototype);

const baz = Object.create(Foo.prototype);

console.log(baz.__proto__ === Foo.prototype);

// whe we create object using new keyword. object gets created and gets linked with the function prototype object
// it calls the constructor, which makes this.greet initialized with "hello Wolrd".
//therefore output of bar.greeting()-I want to say Hello world!

bar.greeting();

// when we create object using the Object.create function, it gets linked with the  function prototype
// but it wont get call the constructor, hence the this.greet won't get initialized. therefore output of
// baz.greeting()- I want to say undefined

baz.greeting();
