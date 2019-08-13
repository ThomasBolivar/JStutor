user = {
    name: 'John',
    age: 33,
};


admin = {
    name: 'Thomas',
    age: 40,

};

/** В Observer будет приходить цель прослушивания и тот кто будет слушать
 *  Если цель прослушивания объект, тогда он должен быть записан
 *
 *
 *
 *
 * */
admin.observable= function (message,listener){
    if (arguments.length>1){
        Notifier().update(message);
    }
    else{
        Notifier().signIn(listener);
    }

};

function notifyExecutor(listener,message,array){






}


function observer(target, listener,message) {
    let activeTarget = target;
    let activeListener = listener;
    let connectionArray = new Array();

    notifyExecutor(activeListener,message,connectionArray);


    console.log(admin);
}
class Notifier {
    connectionArray=[];

    constructor(message,value){
        this.message = message;
        this.value = value;

        if (value instanceof Object){
            console.log(value," You will be notified");
            this.signIn(value);
        }
        else{
            console.log("Sorry can't do that for you");
        }

    }

    signIn = function (activeListener) {
    this.connectionArray.add(activeListener);
    console.log("Listener was added to : ", admin);
};
    signOf = function (activeListener) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === activeListener) {
            array.splice(i, 1);
        }
    }
};
   update = function (message) {
    for (let i = 0;i<array.length;i++) {
        array[i]=array.message = message;
    }
};
}








