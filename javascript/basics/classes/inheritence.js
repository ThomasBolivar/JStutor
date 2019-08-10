class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed += speed;
      console.log(`${this.name} running with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      console.log(`${this.name} stoped!`);
    }
  
  }
  
  class Rabbit extends Animal {

    // by default created constructor with super on Animal if constructor for Rabbit not specified
    // if we want to create constructor for Rabbit we have to specifie super with parameters which declaired inside Animal:

    constructor(name,earLength){
        super(name);
        this.earLength=earLength;
    }
    hide() {
        console.log(`${this.name} hiding!`);
    }
  
    stop() {
      super.stop(); // calling stop from Animal
      this.hide(); // and hide method from Rabbit
    }
  }
  
  let rabbit = new Rabbit("White Rabbit","long");
  
  rabbit.run(5); 
  rabbit.stop(); 