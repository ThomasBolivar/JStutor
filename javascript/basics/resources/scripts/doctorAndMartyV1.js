function Doctor() {
    const states = ["PENDING", "CREATION", "CONNECTION", "DRIVING"]; // an array with existing statuses
    var mcFlysArray = []; // holding inside a bunch of Mc Fly's
    var currentStatus = states[0]; // current statues (May change - depends on situation
    this.addMcFly = function (mcFly) {
        mcFlysArray.push(mcFly); // pushing value to array as last element
    };
    this.createTimeTravelMachine = function () {
        currentStatus = states[1];
        console.log("Current status: " + currentStatus);
        console.log("I just made a time travel machine", "\nNow I can proceed to electricity part");
        connectElectricity();

    };
     function connectElectricity () {
        if (currentStatus !== states[1]) {
            throw new Error("I did nothing at this moment" + "\nMy status is not " + states[1] + "\nMy status: " + currentStatus);
        } else {
            currentStatus = states[2];
            console.log("I just connect everything and I'm ready for traveling!" + "\nMy status: " + currentStatus);
            letMcFlyKnow();
        }
    }

    function letMcFlyKnow() {
        if (currentStatus !== states[2]) {
            throw new Error("My status is not " + states[2] + "\nMy status: " + currentStatus);
        } else {
            currentStatus = states[3];
            mcFlysArray.forEach(function (value, key) {

                console.log(currentStatus);
                mcFlysArray[key].update("I did it!");
                currentStatus = states[0];
            });
        }

    }

}

function McFly() {

    this.update = function (message) {
        console.log("Doctor created board in the past, so I can ride it now!" + "\nHe even send me a message: " + message);

    }


}

var doc = new Doctor();
var marty = new McFly();
var marty2 = new McFly();
doc.addMcFly(marty);
doc.addMcFly(marty2);

function proceedWithTimeTravel() {
  doc.createTimeTravelMachine();

}

