/**
 * Executor function have to call one of those: resolve or reject, they both is callbacks
 *
 *
 * */
const statusValues = {
    PENDING: 'PENDING',
    RESOLVED: 'RESOLVED',
    REJECTED: 'REJECTED',
};

function MyPromise(executor) {
    let status = statusValues.PENDING;
    let value;
    let deferred = null;// this line of code contains result on the operation resolve, reject


    function resolve(newValue) {
            status = statusValues.RESOLVED; // trying to set value to status 'resolved'
            value = newValue; // setting up new Value
            if (deferred) {       // now we need to send our deferred to handle function which is going to proceed checking, either promise resolved or not
                handle(deferred); // jumping into handle function
            }

    }

/*    function reject(rejectionValue) {
        status = statusValues.REJECTED;
        value = rejectionValue;
        if (deferred) {
            handle(deferred);
        }
    }*/

    function handle(handler) {

        setTimeout(function(){
            let handlerCallBack;
            if (status === statusValues.RESOLVED) {
                deferred=handler;
                handlerCallBack=handler.onResolved;
            }
            if (handlerCallBack) {
                let returningData;
                returningData = handlerCallBack(value);

                if (state === 'resolved') {
                    handler.resolve(returningData);
                }
            }
        })


    }

    this.then = function (onResolved) {
        return new MyPromise(function (resolve) {
            handle({
                onResolved: onResolved,
                resolve: resolve
            });
        });
    };

    executor(resolve);
}

const promise = new MyPromise((resolve) => {
        console.log("preparing data...");
        const backendData = {
            name: "User Information",
            port: 8080,
            status: 200
        };
        resolve(backendData);
    });

promise.then(data => {
    console.log('first then', data);
            data.isModified = true;
            return data;
        }
    ).then(clientData => {
    console.log('Data recieved', clientData)
    clientData.modifiedByPromise = true;
    return clientData;

}).then(clientData => {
    console.log("Here's modified by promsie Data: ", clientData);
    return clientData;

});