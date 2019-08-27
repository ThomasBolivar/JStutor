
class Person{
    constructor(){

    }
    canWalk(){
        console.log("I can walk");
    }
    eat(){
        console.log("I can eat");
    }
    static getInformation(){
        console.log("I can do something");
    }
}

class User extends Person{
    constructor(firstName,lastName){
        super();
        this._firstName=firstName;
        this._lastName=lastName;
    }

    getFullName(){
        return this._firstName + " " + this._lastName;
    }

    usePC(){
        console.log("I can use PC");
    }
    move(){
        super.canWalk();
        console.log("I'm moving at this moment");
    }


}
export {User};
/*


let user = new User("John","Doe");
user.usePC();
user.eat();
user.canWalk();
user.move();
User.getInformation();
*/
