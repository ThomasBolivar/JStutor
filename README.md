# JStutor
This repository is for personal usage mainly for educational purposes.
*There is gonna be some additional information for better understanding of javascript.*
I'll provide links to useful resources in this README.md
<details>
<summary>Data Types</summary>
<br>
The latest ECMAScript standard defines eight data types:

**Seven data types that are primitives:**
- Boolean
- Null
- Undefined
- Number
- BigInt
- String
- Symbol
- and Object
</details>

<details>
<summary>this in JS</summary>
<br>
It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.

<br>

**this in a Method**

In an object method, this refers to the "owner" of the method.

In the example on the top of this page, this refers to the person object.

The person object is the owner of the fullName method.


```
fullName : function() {
  return this.firstName + " " + this.lastName;
}
```

**this Alone**
When used alone, the owner is the Global object, so **this** refers to the **Global object**.

In a browser window the Global object is [object Window]:

```
var x = this;
```
if we use **this** in a strict mode **this** still refers to Global Object.

</details>

<br>

<details>
<summary>
Data Structures in JavaScript

</summary>

[**Data Structures and Algorithm repository (fork)**.
@Author trekhleb](https://github.com/ThomasBolivar/javascript-algorithms)
</details>
<details>
<summary>
Async,EventLoops

</summary>

[Event loop in JavaScript, visual demonstration](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
</details>

