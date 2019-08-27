let a = [1,3,4,6,8,90];
/*let[c,d,...rest]= [1,2,3,4];
console.log(c);// 1
console.log(d);// 2
console.log(rest); // [3,4]*/
let [x,f,...rest] = a;
console.log("________");
console.log(x);// 1 from array a
console.log(f); //3 from array a
console.log(rest); // the rest part of a array [4,6,8,90]


/**
 * for example we have an object User
 * */

let user = {
  firstName : "John",
  lastName : "Doe",

};

/**
* we can get each field from this object
* */

let{firstName,lastName} = user;
console.log("________");
console.log(firstName);
console.log(lastName);

/**
 * We can create alias  for each variable
 * Also we can make default names for variables if that variable does not exist inside object
 * */
let user2 = {
  lastName: "Bolivar",
};
let{firstName: fName ="Thomas", lastName: lName} = user2;
console.log("________");
console.log(fName);
console.log(lName);


/**
 * As an example we can use inner objects inside another objects
 */

let user3 = {
  firstName:"Carl",
  lastName:"Sole",
  role:{
      name: "User"
  }

};
let {firstName: fName2, lastName: lName2,role:{name}} = user3;
console.log("________");
console.log(fName2);
console.log(lName2);
console.log(name);
/**
 * Since ES6 we can call attributes using ${attributeName}
 */
console.log(`${firstName}`);




