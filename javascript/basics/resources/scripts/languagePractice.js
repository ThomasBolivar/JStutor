/**
 *
 *
 * */



a.doSomething = function (value, value2, value3) {
    console.log(value);
    console.log(value2);
    console.log(value3);

};

var user = {
    fullName: function (value, value2) {
        var message = "Here's the message from caller " + value + " " + value2;
        return this.firstName + " " + this.lastName + " " + message;
    }

};

var user1 = {
    firstName: "John",
    lastName: "Doe",
};

console.log(user.fullName.call(user1, "hello", "world"));
console.log(typeof a);


var newArray = [2, 3, 4, 5, 6, 7, 1, 2];
var s = newArray.join();
console.log(s);


var person = {
    name: "John",

};

function callIt() {
    console.log(this.name);
}

var callitVar = callIt.bind(person);
callitVar;

