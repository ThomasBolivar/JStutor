function slow(x) {
    console.log(`Called with${x}`);
    return x;
}
function cachingDecorator (func){
    let cache = new Map();
    return function (x){
        if(cache.has(x)){
            console.log("Already inside " + x);
            return cache.get(x);
        }
        else{
            let result = func(x);
            cache.set(x,result);
            console.log( "Value " + x + " saved and cached!");
            return result;
        }
    }
}
slow = cachingDecorator(slow);

slow(prompt("Enter a value ","")); 
slow(prompt("Enter a value ","")); 
slow(prompt("Enter a value ",""));
slow(prompt("Enter a value ",""));

function saySomething(){
    console.log(this.name);
   if(this.age!=undefined){
       console.log(this.age);
   }
   else{
       console.log("There is no age property!");
   }
}

let user = {
    name : "John",
    age : 25,
}
let admin = {
    name : "Admin",
    age : 23,
}
let admin2 = {
    name : "Admin",
    
}


saySomething.call(user);
saySomething.call(admin);
saySomething.call(admin2);