user = {
    firstName : "Denis",
    lastName : "Lashtur",

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
      }
}

console.log(user.fullName);
user.fullName=prompt("Enter Full Name","");
console.log(user.fullName);