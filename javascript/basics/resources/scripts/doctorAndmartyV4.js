/**
 *
 *
 *
 *1.MachineCreator
 *2.Electrician
 *3.Driver
 *4.Users
 *
 *
 *
 * */
function Listener() {

}

Listener.prototype.update = function (message) {
    console.log("I've been notified with message: ", message);


};

function Target() {
    this._listenerArray = [];


}

Target.prototype.addListener = function (listener)  {

    this._listenerArray.push(listener);
};

Target.prototype.notifyAll = function(message) {

    for (var i = 0; i < this._listenerArray.length; i++) {
        this._listenerArray[i].update(message);
    }
};

function MachineCreator() {
    Target.apply(this);

    this.createMachine = function () {
        var created = "Machine created";
        console.log(created);
        this.notifyAll(created);
    }

}

MachineCreator.prototype = Object.create(Target.prototype);


function Electrician() {
    Listener.apply(this);
    this.update = function (message) {
        var connected = "Electricity connected";
        if (message === "Machine created") {
            console.log(connected);
            this.notifyAll(connected);
        } else {
            throw new Error("There is an issue with something");
        }
    }

}


Electrician.prototype = Object.create(Target.prototype);

function Driver() {
    Listener.apply(this);
    Driver.prototype.update = function (message) {
        var available = "I can drive it";
        if (message === "Electricity connected") {
            console.log(available);
            this.notifyAll(available)
        } else {
            throw new Error("There is an issue with something");
        }
    }
}

Driver.prototype = Object.create(Listener.prototype);
Driver.prototype = Object.create(Target.prototype);

function User() {
    Listener.apply(this);
    this.update = function (message) {
        var capable = "I can drive it in this part of time!";
        if (message === "I can drive it") {
            console.log(capable);
            this.notifyAll(capable)
        } else {
            throw new Error("There is an issue with something");
        }
    }

}

User.prototype = Object.create(Listener.prototype);
User.prototype = Object.create(Target.prototype);


var creator = new MachineCreator();
var electrician = new Electrician();
var driver = new Driver();
var user = new User();
creator.addListener(electrician);
electrician.addListener(driver);
driver.addListener(user);
creator.createMachine();

console.dir([1, 2, 3, 4]);
