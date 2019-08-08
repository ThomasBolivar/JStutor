let number = 1;
let string = "Name";
let string2 = 'You can do that';
let string3 = `And even that with some calculations ${23+31}`
// boolean
let somebool = true;
let somebool2 = false;

let isGreaterthen = 4>1;
alert(string3);
alert("Boolean test: is 4 greater then 1? " + isGreaterthen);

// null signifies that there is nothing inside age variable, empty.
let age = null;

// If you not assign value to variable there is gonna be undefined.

let xs;

alert(xs);
//You can assign undefined to variable, but better not to do that! EVER!
let x = undefined;
alert(x);

/**
 * Typically, null is used to assign a variable an “empty” or “unknown” value, and undefined to check whether a variable has been assigned.
 */

 // You can chect the type of variable/object like that:


 alert(typeof 0); // number

 alert(typeof "string"); // string 

 alert(typeof true);

 number = String(number); // now it's not number, String is here :)

 alert(typeof number);

 // use Number to Cast String to number. More then that you can cast like that "3"/"1" will cast to 3

 alert("6"/"2");

 // you will get an exception here: alert (Number("123z"))

 /**
  * Logical conversion
Logical conversion is the simplest.

Occurs in logical operators (later we will familiarize ourselves with conditions of similar constructions) but can also be performed explicitly using the Boolean (value) function.

Conversion Rule:

Values that are intuitively “empty”, such as 0, empty string, null, undefined, and NaN, become false.
All other values become true.
You can cast by String(number here), Number(String here), Boolean(etc)
  */

