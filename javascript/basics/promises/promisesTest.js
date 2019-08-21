

/**
 * 
 * we can create chain of promises, to keep async away from inner code hell
 * 
 */


console.log("Start");

const promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("preparing data...");

            const backendData = {
                name: "User Information",
                port: 8080,
                status: 200
            };
            resolve(backendData);
            console.log(promise);


        },2000);



}).then(data=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            data.isModified=true;
            resolve(data);
        },2000)
    });

}).then(clientData=>{
    console.log('Data recieved', clientData)
    clientData.modifiedByPromise = true;
    return clientData;

})
    .then(clientData=>{
        console.log("Here's modified by promsie Data: ", clientData);

    }).catch(err=>console.error('Error',err))
    .finally(()=>{
        console.log('Finally!');
    });




const sleep = ms => new Promise(resolve =>{
        setTimeout(()=>resolve(),ms);

});

for(let i=1;i<10;i++){
sleep(i+'000').then(()=>console.log('After ',i,' seconds'));
}

// we can create array of promises

//All Promises message will appear only then every other promise inside array finished
Promise.all([sleep(11000),sleep(12000)]).then(()=>{
    console.log('All Promises');
})

// Race Promises will appear only then at least one promise finished
Promise.race([sleep(13000),sleep(14000)]).then(()=>{
    console.log('Race Promises');
})