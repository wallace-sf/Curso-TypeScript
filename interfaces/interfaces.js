"use strict";
function sayHelloN2(person) {
    console.log(`Hello ${person.name}`);
}
function changeName(person) {
    person.name = 'Joana';
}
const person = {
    name: 'João',
    age: 27,
    salutate(lastName) {
        console.log(`Hello, my name is ${this.name} ${lastName}`);
    }
};
// sayHelloN2(person);
changeName(person);
// sayHelloN2(person);
// sayHelloN2({name: 'Jonas', age: 27});
// person.salutate('Skywalker');
class Client {
    constructor() {
        this.name = '';
        this.lastBuy = new Date();
    }
    salutate(lastName) {
        console.log(`Hello, my name is ${this.name} ${lastName}`);
    }
}
const myClient = new Client;
myClient.name = 'Han';
let power;
power = (base, exp) => {
    return Array(exp).fill(base).reduce((acc, value) => acc * value);
};
;
;
class RealA {
    a() { }
    ;
}
;
class RealAB {
    a() { }
    ;
    b() { }
    ;
}
;
class RealABC {
    a() { }
    ;
    b() { }
    ;
    c() { }
    ;
}
function test(b) { }
;
test(new RealABC);
class AbstractABD {
    a() { }
    ;
    b() { }
    ;
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const cli = {
    name: 'Pedro',
    toString() {
        return this.name;
    }
};
// cli.log();
//# sourceMappingURL=interfaces.js.map