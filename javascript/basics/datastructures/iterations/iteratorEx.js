
// to itterate with variables we have to use Sympole.iterator:

let range = {
    from : 1,
    to : 5,
 };
 
 //if we will use for..of the first call will be function
 //range[Symbol.iterator] - is the iterator all functions called from it!
 range[Symbol.iterator] = function(){
 
   //for of works only with iterrator, he asks new values from it 
   return {
    current: this.from,
    last: this.to,
 
    // 3. next() will be called on every itteration for..of
    next() {
      // 4. itterator have to return object  {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
 };
 // now we can use for..of
 
 for(let i of range){
    console.log(i);
 }


let str = 'Hello ';
for (let char of str) {
    alert( char ); 
}

let string = "Something";
for(let char of string){
    alert(char); // every character of string
}

//we can call iterator like this:
let strs = "Hello";

// same as
// for (let char of str) console.log(char);
alert("using iterator internally");
let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // showing charaters one by one
}