

user =  {
    name : "John",
    doSomething(phrase){
        console.log(name + " doing something! " + phrase);
    }
}

let speak = user.doSomething.bind(user);
speak("Binding text!");

let description = Object.getOwnPropertyDescriptor(user,'name');
console.log(JSON.stringify(description,null,2));