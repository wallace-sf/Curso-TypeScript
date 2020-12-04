interface Human {
  name: string;
  age?: number;
  // [prop: string]: any; // Dynamic property
  salutate(lastName: string): void;
}

function sayHelloN2(person: Human) {
  console.log(`Hello ${person.name}`);
}

function changeName(person: Human) {
  person.name = 'Joana';
}

const person: Human = {
  name: 'João',
  age: 27,
  salutate(lastName: string) {
    console.log(`Hello, my name is ${this.name} ${lastName}`);
  }
}

// sayHelloN2(person);
changeName(person);
// sayHelloN2(person);
// sayHelloN2({name: 'Jonas', age: 27});
// person.salutate('Skywalker');

class Client implements Human {
  name: string = '';
  lastBuy: Date = new Date();
  salutate(lastName: string) {
    console.log(`Hello, my name is ${this.name} ${lastName}`);
  }
}

const myClient = new Client;
myClient.name = 'Han';
// sayHelloN2(myClient);
// myClient.salutate('Solo');
// console.log(myClient.lastBuy);

// interface function

interface FuncEvaluation {
  (base: number, exp: number): number;
}

let power: FuncEvaluation;

power = (base: number, exp: number): number => {
  return Array(exp).fill(base).reduce((acc, value) => acc * value);
}

// console.log(power(2, 8));

// Heritage
interface A {
  a(): void;
};

interface B {
  b(): void;
};

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {};
};

class RealAB implements A, B {
  a(): void {};
  b(): void {};
};

class RealABC implements ABC {
  a(): void {};
  b(): void {};
  c(): void {};
}

function test(b: B) {};

test(new RealABC);

abstract class AbstractABD implements A, B {
  a(): void {};
  b(): void {};
  abstract d(): void; 
}

// Use of interface to extends object
interface Object {
  log(): void
}

Object.prototype.log = function () {
  console.log(this.toString());
}

const cli = { 
  name: 'Pedro', 
  toString() { 
    return this.name; 
  } 
};

// cli.log();
