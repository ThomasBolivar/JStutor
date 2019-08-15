function Subject() {
    var arrayOfListeners = [];
    this.addListener = function (listener) {
        arrayOfListeners.push(listener);
    };
    this.showAllListener = function () {
        arrayOfListeners.forEach(function (value, key) {
            console.log(value, key);
        });
    };
    this.deleteListener = function (listener) {
        for (let i = 0; i < arrayOfListeners.length; i++) {
            if (arrayOfListeners[i] === listener) {
                arrayOfListeners.splice(i, 1);
            }
        }
    };
    this.notify = function (message) {
        for (let i = 0; i < arrayOfListeners.length; i++) {
            arrayOfListeners[i].update(message);
        }
    };
}

function Listener() {
    this.update = function (message) {
        console.log("I have been updated", `with message ` + message + "\nI have a name " + `${this.firstName} ${this.lastName}`);
    }
}

class User extends Listener {
    constructor(firstName, lastName) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

var user = new User("John", "Doe");
admin = new Subject();
admin.addListener(user);
var user2 = new User("Thomas", "Bolivar");
admin.addListener(user2);

function starter() {
    admin.notify("hello");
    admin.showAllListener();
}