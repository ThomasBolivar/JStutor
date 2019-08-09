/**
 * There is two ways to create an array
 */

 //let array = new Array();// empty array

 let array = [1,2,4,6,8,123,3];
 for(let i =0;i<array.length;i++){
     console.log("Value at index " + i + " = " + array[i]);
 }
 console.log(array);

 console.log("\nGetting the first element of an array and deleting it");

 console.log(array.shift());

 console.log("Show array");

 for(let i =0;i<array.length;i++){
    console.log("Value at index " + i + " = " + array[i]);
}
console.log("Inserting value into an array!");
console.log(array.unshift(11));
console.log("Show array");
for(let i =0;i<array.length;i++){
    console.log("Value at index " + i + " = " + array[i]);
}

console.log("popping the last element from array");
console.log(array.pop());
console.log("Show array");
for(let i =0;i<array.length;i++){
    console.log("Value at index " + i + " = " + array[i]);
}
console.log("Inserting an element to the tail of array");
console.log(array.push(25));
console.log("Show array");
for(let i =0;i<array.length;i++){
    console.log("Value at index " + i + " = " + array[i]);
}

console.log("\n Iterrating with in");
for(let i in array){
    console.log(array[i]);
}
console.log("\n Iterrating with of");
for(let tmp of array){
    console.log(tmp);
}

//we can create multiple arrays in one

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log("Getting an element from arrays = " + matrix[1][1] );

  console.log(".splice can be useful function, you can update,delete,insert with splice()");
  // Starting from position 0, delete 2 elements from array
  console.log(array.splice(0,2));
  console.log("Show array");
for(let i =0;i<array.length;i++){
    console.log("Value at index " + i + " = " + array[i]);
}   
    //Insert from position 2 elements 33 and 34
    console.log(array.splice(0,2,33,34));
    console.log("Show array");
for(let i =0;i<array.length;i++){
    console.log("Value at index " + i + " = " + array[i]);
}
//you can use .slice() to get sub array from an array
console.log("Using .slice() " + array.slice(0,4) + " Result is: Element from 0 to 3 index (from 1 to 4)" );

array.forEach(alert);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} has position ${index} in ${array}`);
  });

  // to sort we have to write our own comparator, cuz in JS variables compared as a strings
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  let arr = [ 1, 2, 15 ];
  
  arr.sort(compareNumeric);
  
  alert(arr);  // 1, 2, 15