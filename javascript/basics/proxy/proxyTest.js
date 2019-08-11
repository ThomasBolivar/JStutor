const person = {
    name : "Denis",
    age : 25,
    job : "Fullstack",
}

const objectProxy = new Proxy(person,{

    get(target,prop){
        console.log('Target ',target);
        console.log('Prop', prop);
        return target[prop];
    },
    set(target,prop,value){
        if(prop in target){
        target[prop]=value;
        }
        else{
            throw new Error (`No ${prop} property inside target ${target}`);
        }
    },
    // has return true/false if property in target
    has(target,prop){
        return ['age','name','job'].includes(prop);
    }

});