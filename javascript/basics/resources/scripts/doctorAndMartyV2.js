function machineCreator(name, mission) {
    this.name = name;
    this.mission = mission;
}

function Electrician(name, mission) {
    this.name = name;
    this.mission = mission;

}

function MachineDriver(name, mission) {
    this.name = name;
    this.mission = mission;
}

function MordRider(name, mission) {
    this.name = name;
    this.mission = mission;

}

function Observer(name) {
    this.name = name;
    this.update = function (message) {
        console.log("I just did my job!" + "Message is: " + message);
    }

}

function Observable(procedure) { // target - observer admin = new Observable(user) --> goes to Array (addobserver)
    const states = ["PENDING", "COMPLETED"];
    var currentStatus = states[0];
    var observers = [];

    //var observableContent = new Map();

    function addObserver(observer) {
        observers.push(observer);
        console.log("observer added");
    }



    this.showMeObservers = function () {
        observers.forEach(function (value, key) {
            console.log(value, key);
        })
    };
    this.continueProcedure = function () {

    };
    this.notify = function (messageFromObservable) {

        observers.forEach(function (value, key) {

            observers[key].update("I did it!" + messageFromObservable);
            observers[key].name;

        });
        currentStatus = states[1];

    };


    this.next = function () {
        if (currentStatus !== states[1]) {
            return new Observable(function (complete) {

            });
        } else {
            throw new Error("Current status is not: " + states[1]);
        }

    };
    procedure(addObserver);
}


var creator = new Observer("John");
var driver = new Observer("Thomas");
var executor = new Observable(function (procedure) {
    procedure(creator);
});
executor.showMeObservers();
creator = executor.next(function (procedure) {
    procedure(driver);
});
creator.notify("notified");
creator.showMeObservers();

function proceed() {

}

