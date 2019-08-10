/* You cannot create a name like this in object "doing something".
For example:

//error
user.doing something = ture;

you can create it, with using $ and _ like so: 

user.doing_something = true; // ok

but there is another efficient way to do that

you can use [] to declare it.

Example:
user = {}; // creating an object with name user

user ["doing something"]=true; // declaration works!
alert(user["doing something"]); // returns true!

you can also delete that kind of property;

delete user["doing something"];

We can even declare property by variable like this:

let key = "doing something"; // variable declaration!

user[key] = true; // this is the same as - user["doing something"];

There is also a way to declare property for object with functions

function makeUser(name,age){
    //then we have to return something, in our case it's a name and age
    return{
        name:name,
        age:age,

    };

}
Since this function returns needed information we can paste it to object:

let user = makeUser("Denis",23); 

at this moment user object looks like this:

user{
    name : "Denis",
    age : 23,
}
we can write the same function (makeUser()), but a lot easier:

function makeUser(name,age){
    return{
        name,
        age,
        // same as name : name
    };
}



Lets try this out


*/

// Creating an object

let user = {};
alert("Object contains " + user); // there is no properties inside object at this moment

// creating a function for user creation

function makeUser(firstName,lastName,age){
    return{
        firstName,
        lastName,
        age,
    };
}

user =  makeUser("Denis","Lashtur",23);

alert("Object contains " + user.firstName + " " + user.lastName + " " + user.age);

// we can check property existence 

alert ("Does this property exist ? " + "age" in user); // returns true because age property is in user object

// let's check this one

// now i'll create a list of users with String key
let userListSorted = {
 "1" : "John",
 "4" : "Oliver",
 "2" : "Denis",
 "3" : "Clause",
}

for(let tmp in userListSorted){
    alert(tmp);
}
/**
 * Output is gonna be:
 * _____
 * 1
 * 2
 * 3
 * 4
 * _____
 * so the output is in sorted order
 * if we need to get information as it is in object, we can add + befor key like this "+1"
 * let's create another object but at this time we will input additional information to key
 */
let userListNotSorted = {
    "+1" : "John",
    "+4" : "Oliver",
    "+2" : "Denis",
    "+3" : "Clause",
}

// looping 

for(let tmp in userListNotSorted){
    alert(+tmp);
}

/**
 * reference works the same as in Java
 */

 a = {};
 b = {};
 alert(a==b); // false - two different objects

 a=b;
 alert(a==b); // true - same object

 // Now let's take a look how you can clone an object

 let person = {
     name : "John",
     age : 33,
 }
 for (let i in person){
     alert(i);
 }

 let personClone = {}; // empty object undifiend

 for(let cloneVar in person){
     personClone[cloneVar] = person[cloneVar];
 }

 // now we can oppirate with person clone, we can change his name 

 personClone.name = "Oliver";

 // now we have object with name John and object which contains name Oliver. Let's add another property to personClone

 personClone.language = "English";
 for(let i in personClone){
     alert(i)
 }

 // we can combine objects

 Object.assign(person,{language : "French"});

 for(let i in person){
     alert(i);
 }
 /**
  * Now person contains property language with declared name French :)
  * We can create our own properties and assign it to our person object
  */
 let genderM = {
    isMale : true
 }
 let genderF = {
     isFemale : true
 }
 Object.assign(person, genderM);

 for(let i in person){
    console.log(i + " in person");
 }
 // we can use assign for clonning purposes

 let personSecondClone = Object.assign({},person);

 for(let i in person) {
    console.log(i + " in personSecondClone");
 }

  