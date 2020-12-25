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
class MapCreator {
    constructor(...args) {
        this._items = args;
    }
    get(key) {
        return this._items.find((item) => item.key === key);
    }
    set(item) {
        const foundItem = this.get(item.key);
        if (!!foundItem) {
            foundItem.value = item.value;
        }
        else {
            this._items.push(item);
        }
    }
    print() {
        console.log(this._items);
    }
    ;
    clean() {
        this._items = [];
    }
}
const myMap = new MapCreator({ key: 1, value: 'Rogério' });
// console.log(myMap.get(1));
myMap.set({ key: 2, value: 'Paulo' });
// myMap.print();
myMap.set({ key: 1, value: 'Marcio' });
// console.log(myMap.get(1));
myMap.clean();
// myMap.print();
//# sourceMappingURL=generics.js.map