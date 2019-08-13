function SPromise(executor) {
    let state = 'pending';
    let deferred = null;
    let value;

    function resolve(newValue) {
        try {
            state = "resolved";
            value = newValue;
            if (deferred) {
                handle(deferred);
            }
        }catch (e) {
            console.log("There was an error");
        }
    }

    function reject(reason) {
        state = "rejected";
        value = reason;
        if (deferred) {
            handle(deferred);
        }
    }

    function handle(handler) {
        if (state === 'pending') {
            deferred = handler;
            return;
        }
        setTimeout(function () {
            var handlerCb;
            if (state === 'resolved') {
                handlerCb = handler.onResolved;
            } else if (state === 'rejected') {
                handlerCb = handler.onRejected;
            }

            if (handlerCb) {
                var returnValueOrReason;
                try {
                    returnValueOrReason = handlerCb(value);
                } catch (err) {
                    handler.reject(err);
                    return;
                }
                if (state === 'resolved') {
                    handler.resolve(returnValueOrReason);
                } else if (state === 'rejected') {
                    handler.reject(returnValueOrReason);
                }
            }

        }, 1);
    }

    this.then = function (onResolved, onRejected) {
        return new SPromise(function (resolve, reject) {
            handle({
                onResolved: onResolved,
                onRejected: onRejected,
                reject: reject,
                resolve: resolve
            });
        });
    };
    executor(resolve, reject);
}



let promise = new SPromise(function (resolve, reject) {
    const backendData = {
        name: "User Information",
        port: 8080,
        status: 200
    };
    console.log(backendData);
    console.log(SPromise);
    resolve(backendData);
});

promise.then(function (backendData) {
    return new SPromise((resolve, reject) => {

        data.isModified = true;
        console.log(data);
        resolve(data);
    });


});

