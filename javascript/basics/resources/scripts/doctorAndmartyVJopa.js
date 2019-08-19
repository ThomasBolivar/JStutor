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
console.log("Listener created");
}

Listener.prototype.update = function (message) {
    console.log("I've been notified with message: ", message);
};

function Target() {
    console.log('Target created');
    this._listenerArray = [];

}

Target.prototype.addListener = function (listener) {
    this._listenerArray.push(listener);
};

Target.prototype.notifyAll = function (message) {
    for (var i = 0; i < this._listenerArray.length; i++) {
        this._listenerArray[i].update(message);
    }
};


function MachineCreator() {
    Target.call(this);
    console.log('MachineCreator');
    this.createMachine = function () {
        var created = "Machine created";
        console.log("_______________");
        console.log(created);
        this.notifyAll(created);
    }
}


MachineCreator.prototype = Object.assign({},Target.prototype);


function Electrician() {
    Listener.call(this);
    Target.call(this);
    console.log("Electrician created");
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

Electrician.prototype = Object.assign({}, Listener.prototype, Target.prototype);


function Driver() {
    Listener.apply(this, arguments);
    Target.apply(this, arguments);
    console.log("Driver created");
    this.update = function (message) {
        var available = "I can drive it";
        if (message === "Electricity connected") {
            console.log(available);
            this.notifyAll(available)
        } else {
            throw new Error("There is an issue with something");
        }
    }

}

Driver.prototype = Object.assign({}, Listener.prototype, Target.prototype);

function User() {
    Listener.call(this,arguments);
    Target.call(this,arguments);
    console.log("User created");
    this.update = function (message) {
        var capable = "I can drive it in this part of time!";
        if (message === "I can drive it") {
            console.log(capable);
            this.notifyAll(capable)
        } else {
            throw new Error("There is an issue with something").stack;
        }
    }

}

User.prototype = Object.assign({}, Listener.prototype, Target.prototype);

var jopaCreator = new MachineCreator();
var jopaElectrician = new Electrician();
var jopaDriver = new Driver();
var jopaUser = new User();
jopaCreator.addListener(jopaElectrician);
jopaElectrician.addListener(jopaDriver);
jopaDriver.addListener(jopaUser);
jopaCreator.createMachine();