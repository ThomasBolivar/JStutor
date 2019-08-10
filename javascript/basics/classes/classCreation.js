
/**  Class in JS is a function, if more precice it's a constructor function in a User wrapper 
 * The difference between class and function is that class cannot be initialized without new as a function can
 * Also there is enumerable false flag inside, so you cannot enumarate it. You can't get properties with for..in
*/
/**
 *
 *
 * @class User
 * @function constructor creates user, insert values to properties
 * 
 */
class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    get getFirstName() {
        return this.firstName;
    }
    get getLastName() {
        return this.lastName;
    }
    

    set setFirstName(value) {
        if (value.length < 4) {
          alert("Insert the name with length more then 4");
          return;
        }
        this.firstName = value;
    }
    set setLastName(value) {
        if (value.length < 4) {
          alert("Insert the name with length more then 4");
          return;
        }
        this.lastName = value;
    }
    
    

    introduction(){
        console.log("Hello, my name is " + this.getFirstName + " " + this.getLastName + " I'm " + this.age +" years old");
    }

    

}

let firstName = prompt("Enter first name ","");
let lastName = prompt("Enter last name ","");
let age = prompt("Enter your age ","");
var user = new  User(firstName,lastName,age);
user.introduction();

/**
 * You can create class with Class Expression, same as Named Function Expressions 
 * 
 * 
 * 
 */
let Person = class MyPerson{
        speak(){
            console.log("Take a look inside: " + MyPerson);
        }
        //MyPerson can only be accesed within class
}

new Person().speak();