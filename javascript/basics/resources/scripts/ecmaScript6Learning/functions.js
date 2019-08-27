/**
 * You can now get values from functions as a default values for another function
 */

function getName() {
    return "John";
}


function showMeName(name = getName(), ...rest) {
    console.log(name);
    console.log("The rest part of arguments ", rest);
}

showMeName();

let user = {
    firstName: "John",
    lastName: "Doe",
};

function showMenu({firstName, lastName}) {
    console.log(firstName + " " + lastName);
}

showMenu(user);

var add = (arg)=>10+arg;
console.log(add(13));

var simpleFunction = ()=>{
    console.log("I'm the simple function");
};
simpleFunction();