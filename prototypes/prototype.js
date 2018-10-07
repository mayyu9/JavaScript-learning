// when a function is created JS engine adds a prototype prperty to the function, this prototype property
// has bydefault .constructor property which points to the function

function Human(first, last){
  this.first= first;
  this.last= last;
  this.getName = function(){
    return this.first + this.last;
  }
};

console.log(Human);

//To access prototype property of the Human constructor

console.log(Human.prototype);


//When an object is created in JavaScript, JavaScript engine adds a __proto__ property to the newly created object which is called as dunder proto. dunder proto or __proto__ points to the prototype object of the constructor function.

//person1 object which is created using the Human constructor function has a dunder proto or __proto__ property which points to the prototype object of the constructor function.

var person1 = new Human('ms', 'thakur');

console.log(person1);

//both person1's dunder proto or __proto__ property and Human.prototype property are equal let's check if they point at the some location using === operator

console.log(Human.prototype === person1.__proto__); //true


var person2 = new Human("Sachin", "Tendulkar");
console.log(person2);

console.log(Human.prototype === person2.__proto__); //true

//Let's verify if person1's dunder proto and person2's dunder proto points to the same oject

console.log(person1.__proto__ === person2.__proto__); //true
