/**
 * There are several kinds of 'variables' you might want to think about:
 * 
    Variables in JavaScript code, which are saved in the memory of the browser process.
    Cookies can also store variables; they are often saved on your hard disk;
    JavaScript has a bunch of reserved keywords, such as: let, class, return and function etc..
    You can take a look at the list of reserved keywords:
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#%D0%9A%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5_%D1%81%D0%BB%D0%BE%D0%B2%D0%B0 
 */
let saySomething = "Hello LAR";
alert(saySomething + ' called from variable ' + 'saySomething');

/* you can create constants */
const BIRTHDAY= "08.03.1996";

alert(BIRTHDAY + " my birth day!");
