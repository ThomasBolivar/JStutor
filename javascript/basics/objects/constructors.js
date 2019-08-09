
/**
 * Constructors in JavaScript have to look like this
 * 
 */

 function User(name,age){
     //this = {};

     //add properties to this
     this.name = name;
     this.age = age;
     this.isUser = true;
     //return this;
 }
 /** Now we declaired a constructor and we can assign it to object */
let user = new User("John",23);
for(let i in user){
    alert(i + " inside user, created via constructor");

}
alert(user.isUser);

// we can also declaire constructor via functions like this: 

let anotherUser = new function(){
    this.name = "Denis";
    this.age = 23;
    this.isAdmin = true;
    alert(new.target);
};
// but we cannot reuse it, cuz this function is not saved


function AnotherUser(){
    this.name = "Denis";
    return{name : "Den"};

}
alert(new AnotherUser().name);

// we can skip () after new cuz there is no arguments:  let user = new User;

function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );

  // we can store functions inside objects

  let something = {
      something : "something",
      doSomething : function(){
          alert("doing something");
      }
  }
  something.doSomething();