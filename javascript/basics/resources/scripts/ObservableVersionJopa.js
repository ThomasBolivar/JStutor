function Listener() {

}

Listener.prototype.update = function (message) {
    console.log("Notified", message);
};

function Target() {
    this.listenersArray = [];

}

Target.prototype.addListener = function (listener) {
    this.listenersArray.push(listener);
    console.log("Listener has been added to array");
};

Target.prototype.notifyAll = function (message) {

    for (var i = 0; i < this.listenersArray.length; i++) {
        this.listenersArray[i].update(message);
    }
};

var jopa1 = new Target();
var jopa2 = new Listener();

jopa1.addListener(jopa2);
jopa1.notifyAll("Hello");