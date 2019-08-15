function delay(ms){
    return new Promise(function(resolve){
        setTimeout(function (){
            resolve();
        },ms);
    })
}

promise = delay(2000).then(function (){
    console.log("delay 2s");
});
