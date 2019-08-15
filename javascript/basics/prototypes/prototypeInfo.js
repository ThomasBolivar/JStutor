/**
 * __proto__ is a chain reference to another object. With prototype you can see what kind of parent bind with specific Object
 *  If an object have a __proto__ link and you want to find a property, if there is no searched property inside first object (sub-object)
 *  searching process will continue inside next object by __proto_link.
 *
 *
 * */

'use strict';

var animal = {
    abilityToMove: true,
    abilityToEat: true,
    abilityToHunt: true,
    abilityToHide: true,
};

var rabbit = {
    abilityToHunt: false,

    move: function () {
        console.log('I move ');
    },
    eat: function () {
        console.log('I eat')
    },
    hide: function () {
        console.log('I hide');
    }
};

//same as rabbit.__proto__=animal but a little bit simpler to write
Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.abilityToEat, rabbit.eat());
// will return false because I mainly declare it to false inside rabbit object
console.log('Can I hunt? ', rabbit.abilityToHunt);

for (var key in rabbit) {
    console.log(key, " ", rabbit[key]);
}
console.log(rabbit.hasOwnProperty('hide'));