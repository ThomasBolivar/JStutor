var promise = new Promise(function(resolve) {
    setTimeout(function() {
        console.log("inside timeout");
        resolve('hello world');
    }, 500);
});

promise.then(function(data) {
    console.log(data + ' 1');
});

promise.then(function(data) {
    console.log(data + ' 2');
});

promise.then(function(data) {
    console.log(data + ' 3');
});