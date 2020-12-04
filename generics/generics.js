"use strict";
function echo(object) {
    return object;
}
// console.log(echo('João').length);
// console.log(echo(27).length);
// console.log(echo({name: 'João', age: 27}));
// Using generics
function improvedEcho(object) {
    return object;
}
// console.log(improvedEcho('João').length);
// console.log(improvedEcho<number>(27));
// console.log(improvedEcho({name: 'João', age: 27}));
// Generics Available on API
const assessments = [10, 9.3, 7.7];
assessments.push(8.4);
// assessments.push('5.5'); 
// console.log(assessments);
// Array
function print(args) {
    args.forEach(element => console.log(element));
}
// print([1, 2, 3]);
// print<number>([1, 2, 3]);
// print<string>(['Ana', 'Carlos', 'Bia']);
// print<{ name: string, age: number}>([{name: 'Wallace', age: 25}, {name: 'Max Tennyson', age: 58}]);
// Type function with generic
const callEcho = improvedEcho;
// console.log(callEcho<number>(58));
// Class With Generics
class BinaryOperation {
    constructor(operatorN1, operatorN2) {
        this.operatorN1 = operatorN1;
        this.operatorN2 = operatorN2;
    }
}
class BinarySum extends BinaryOperation {
    play() {
        return this.operatorN1 + this.operatorN2;
    }
}
// console.log(new BinarySum(3, 4).play());
class DatesDiff extends BinaryOperation {
    getTime(data) {
        let { day, month, year } = data;
        return new Date(`${month}-${day}-${year}`).getTime();
    }
    play() {
        const t1 = this.getTime(this.operatorN1);
        const t2 = this.getTime(this.operatorN2);
        const diff = Math.abs(t1 - t2);
        const amountMsDay = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diff / amountMsDay)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
// console.log(new DatesDiff(d1, d2).play());
// Challenge Class Queue
// Attribute: queue (Array)
// Methods: join, next, print
class Queue {
    constructor(...args) {
        this.queue = args;
    }
    join(item) {
        this.queue.push(item);
    }
    next() {
        console.log(this.queue.length
            ? this.queue.shift()
            : 'Não há ninguem na fila');
    }
    print() {
        console.log(this.queue);
    }
}
const myQueue = new Queue('Maxuel');
myQueue.next();
myQueue.join('Ana');
myQueue.join('Bia');
myQueue.join('Carlos');
myQueue.next();
myQueue.join('João');
myQueue.next();
myQueue.print();
//# sourceMappingURL=generics.js.map