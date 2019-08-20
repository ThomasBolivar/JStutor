/**
 * Реализовать функцию JopaPromise
 * она принимает в себя executor(функцию)
 * executor принимает в качестве аргумента функцию resolve, которая по окончанию executor вызывается.
 * Функция resolve принимает в качестве аргумента или скалярное или JopaPromise
 *
 *
 * */


function JopaPromise(executor) {

    function resolve(value) {
        console.log("bla bla bla", value);

    }

    executor(resolve);
}

/**
 * then является функцией, которая имеет в качестве аргумента listener.
 * listener это функция, которая принимает в качестве аргумента result.
 * listener будет выполнен только тогда, когда executor выдаст скалярное значение и это значение передасться в listener
 * Listener может возвращать, как скалярное значение, так и JopaPromise
 * Функция вызова then возвращает Promise, он будет ?resolved?, когда listener вернёт скалярное значение
 *
 */
JopaPromise.prototype.then = function (listener) {

    return new JopaPromise(function (resolve) {
        resolve(listener);
    });

};


var promise = new JopaPromise(function (resolve) {
    resolve("bla");
});
