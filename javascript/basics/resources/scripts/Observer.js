function Observer() {
    this.update = function (message) {
        console.log("I've been notified with message: ", message);
        console.log("My full name is: ",this.getFirstName() + " " + this.getLastName());

    }
}

function Observable() {
    var listenerArray = [];
    this.addListener = function (listener) {
        listenerArray.push(listener);
    };

    this.notify = function (message) {
        console.log(this.getFirstName()+ " " + this.getLastName() + " notified observers");
        for (var i = 0; i < listenerArray.length; i++) {
            listenerArray[i].update(message);
        }
    }

}

function Admin(firstName,lastName) {
    Observable.call(this);
    var _firstName = firstName;
    var _lastName = lastName;
    this.setFirstName = function (firstName) {
        this._firstName = firstName;
    };

    this.getFirstName = function () {
        return _firstName;
    };
    this.setLastName = function (lastName) {
        this._lastName = lastName;
    };

    this.getLastName = function () {
        return _lastName;
    };
}

function User(firstName,lastName){
    Observer.call(this);
    var _firstName =firstName;
    var _lastName = lastName;
    this.setFirstName = function (firstName) {
        this._firstName = firstName;
    };

    this.getFirstName = function () {
        return _firstName;
    };
    this.setLastName = function (lastName) {
        this._lastName = lastName;
    };

    this.getLastName = function () {
        return _lastName;
    };


}


var user1  = new User("John","Doe");
var user2  = new User("Thomas","Bolivar");
var admin = new Admin("Elichar","Lostre");

admin.addListener(user1);
admin.addListener(user2);

admin.notify("Hello!");

