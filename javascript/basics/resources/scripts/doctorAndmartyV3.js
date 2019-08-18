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
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * */
function Observer() {
    this.update = function (message) {
        console.log("I've been notified with message: ", message);
        console.log("My full name is: ", this.getFirstName() + " " + this.getLastName());

    }
}

function Observable() {
    var listenerArray = [];
    this.addListener = function (listener) {
        listenerArray.push(listener);
    };

    this.notifyAll = function (message) {
        for (var i = 0; i < listenerArray.length; i++) {
            listenerArray[i].update(message);
        }
    };
}


function MachineCreator() {

    Observable.call(this);
    this.createMachine = function () {
        var created = "Machine created";
        console.log(created);
        this.notifyAll(created);
    }

}

function Electritian() {
    Observer.call(this);
    Observable.call(this);
    this.update = function (message) {
        var connected = "Electricity connected";
        if (message==="Machine created"){
            console.log(connected);
            this.notifyAll(connected);
        }
        else{
            throw new Error("There is an issue with something");
        }
    }

}
function Driver() {
    Observer.call(this);
    Observable.call(this);
    this.update = function (message) {
        var available = "I can drive it";
        if (message==="Electricity connected"){
            console.log(available);
            this.notifyAll(available)
        }
        else {
            throw new Error("There is an issue with something");
        }
    }

}
function User() {
    Observer.call(this);
    Observable.call(this);
    this.update = function (message) {
        var capable = "I can drive it in this part of time!";
        if (message==="I can drive it"){
            console.log(capable);
            this.notifyAll(capable)
        }
        else {
            throw new Error("There is an issue with something");
        }
    }

}


var creator = new MachineCreator();
var electrician = new Electritian();
var driver = new Driver();
var user = new User();
creator.addListener(electrician);
electrician.addListener(driver);
driver.addListener(user);
creator.createMachine();


