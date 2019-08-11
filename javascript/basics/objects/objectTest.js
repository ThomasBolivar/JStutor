const person = Object.create({

    

},{
    _name:{
        value: "Denis",
        enumerable: true, // can be iterable through
        writable:false, // can't rewrite age
        configurable:false, // can't delete age
    },

    get name() {
        return this._name;
      },

    _birthDate:{
        value:1996,
        enumerable:true,
    },
    get birthDate(){
        return this._birthDate;
    },
    age:{
        get(){
            return new Date().getFullYear()-this.birthDate;
        },
        set(value){
            console.log('Set age', value);
            
        },
    },
    isAdmin:{
        value:true,
        enumerable:false,
    }
});
person.name ="John";
for(let key in person){
    console.log('Key', key, person[key]);
}

// just for fun


const sleep = ms => new Promise(resolve =>{
    setTimeout(()=>resolve(),ms);

});

for(let i=1;i<10;i++){

sleep(i+'000').then(()=>{
    console.log('After ',i,' seconds')
    document.body.style.background =colorRandomizer();
});


}

function colorRandomizer(){
    let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return hue;
}