
//
let animal = {

    walk(){
        console.log("I can walk" + " im a " + this.name);
    },
    eat(){
        console.log("I can eat");
    },
    sleep(){
        console.log("I can sleep");
    }

 
}
let dog = {
    name : "Doggy",
    type : "Buldog",
    
   }
   Object.setPrototypeOf(dog,animal);
dog.sleep = ()=>{console.log("i'm sleep like a Dog")};
dog.walk();
dog.sleep();

// Object.keys returns only dog properties
console.log(Object.keys(dog)); // name,type, sleep

// for..in iterating through prototype 
for(let prop in dog) console.log(prop); // name,type,walk,eat,sleep

//We can override functions from prototype, or add different one
Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  // check it
  function f(a, b) {
    console.log( a + b );
  }

  f.defer(1000)(1, 2); // 3 every 1 second
  
  console.log("creating new Object..");
  //we can create object and type in properties, like this 
  let rabbit = Object.create(animal, {
    jumps: {
      value: true
    }
  });
  
  alert(rabbit.jumps); // true
  

