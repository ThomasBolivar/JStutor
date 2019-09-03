var PENDING = "PENDING";
var RESOLVED = "RESOLVED";

function JopaPromise(executor){
    this.currentStatus = PENDING;
    this.result = undefined;
    this.thenListener = undefined;
    this.thenResolve = undefined;


    this.resolve = function (value){
        this.result = value;
        this.currentStatus = RESOLVED;

        if(this.result instanceof JopaPromise){
            var tempInstance = this.result;
            this.currentStatus = PENDING;
            var b = tempInstance.then(function(result){
                return result;

            })

        }

        if(this.thenListener !== undefined){
            var a = this.thenListener(this.result);
            if(a instanceof JopaPromise){
                var self = this;
                a.then(function(result){
                    self.thenResolve(result);
                });
            }
            this.thenResolve(a);
        }
    };



    this.then = function (listener){
        if(this.currentStatus === PENDING){
            this.thenListener = listener;
            var self = this;
            return new JopaPromise(function(resolve){
                self.thenResolve = resolve;
            });
        }
        if(this.currentStatus === RESOLVED){
            this.tempResult = listener(this.result);
            var currentResult = this.tempResult;
            return new JopaPromise(function(resolve){
                resolve(currentResult);
            });
        }
    };



    executor(this.resolve.bind(this));
}

var promiseMagaz = new JopaPromise(function (resolve){
    resolve("ВОДКА");
/*    *setTimeout(function(){
		resolve("ВОДКА");
	},1000);*/

});

var alkah01 = promiseMagaz.then(function(result){
    console.log(result);
    return new JopaPromise(function(resolve){
        resolve("Держи Водку");

    });
});

var alkah02 = alkah01.then(function(result2){
    console.log(result2);
    return "Оооо";
});

var ment = alkah02.then(function(result3){
    console.log(result3);
    return "Пакуем";

});



















