user = {
    name:"John",
    age:23,
    speek: saySomething,

}
function saySomething(){
    console.log("Good morning!",this);
}

/**  this will sgnify where does it from this keyword were called. 
 *  in our case if we type window.saySomething() - saysomething will be called from window
 * it all depends on a context. the function will look at the left side from the dot and proceed call from this context point
*/

function hello(){
    console.log('Hello',this);
}

const person = {
    name: "Denis",
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(){
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
    }
}

const specificPerson = {
    name:`John`,
    age:33,
    isUnique:true,
}

person.logInfo.bind(specificPerson)();


