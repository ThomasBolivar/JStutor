// we have an array with the name and surname
let arr = ["Ilya", "Kantor"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor

let [firstName, surname] = "Ilya Kantor".split(' ');
/*Ignore elements using commas
Unwanted elements of the array can also be thrown away via an extra comma:

 

// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul
In the code above, the second element of the array is skipped, the third one is assigned to title, and the rest of the array items is also skipped (as there are no variables for them).  */