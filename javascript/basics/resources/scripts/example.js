function JopaPromise(executor) {


    this.resolve = this.resolve.bind(this);

    executor(this.resolve);


}

JopaPromise.prototype.resolve = function (value) {
    var result = value;
    this.promiseChain.forEach((nextFunction) => {
        storedValue = nextFunction(storedValue);
    });

}
};