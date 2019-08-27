/**
 * You can now use block scoping, see example down below.
 *
 * */

let a = 2;
{
    let a = 3;
    console.log("Block scoping: ",a); // Block scoping 3
}
console.log("Outside",a); // Outside 2

/**
 * Let's try the same with s var keyword
 * */

var b = 2;
{
    var b = 3;
    console.log("block scoping",b); // block scoping 3
}

console.log("Outside",b); // Outside 3

/**
 * So the SCOPE for let variables is {}
 * There is also another thing with let variable
 * let variable can be seen only after it's declaring as an example:
 *
 *     console.log(a); // undefined
 *      var a = 5;
 *     console.log(a); // 5
 *
 *    Now the same thing with let variable
 *
 *
 *    console.log(b); // ReferenceError: b is not defined
 *    let b = 15;
 *    console.log(b); // 15
 *
 * */
