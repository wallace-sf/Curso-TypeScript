function echo(object: any) {
  return object;
}

// console.log(echo('João').length);
// console.log(echo(27).length);
// console.log(echo({name: 'João', age: 27}));

// Using generics
function improvedEcho<T>(object: T): T {
  return object;
}

// console.log(improvedEcho('João').length);
// console.log(improvedEcho<number>(27));
// console.log(improvedEcho({name: 'João', age: 27}));

// Generics Available on API
const assessments: Array<number> = [10, 9.3, 7.7];

assessments.push(8.4);
// assessments.push('5.5'); 
// console.log(assessments);

// Array

function print<T>(args: T[]) {
  args.forEach(element => console.log(element));
}

// print([1, 2, 3]);
// print<number>([1, 2, 3]);
// print<string>(['Ana', 'Carlos', 'Bia']);
// print<{ name: string, age: number}>([{name: 'Wallace', age: 25}, {name: 'Max Tennyson', age: 58}]);

// Type function with generic
const callEcho: <T>(data: T) => T = improvedEcho;

// console.log(callEcho<number>(58));

// Class With Generics
abstract class BinaryOperation<T, R> {
  public operatorN1: T;
  public operatorN2: T;

  constructor(operatorN1: T, operatorN2: T) {
    this.operatorN1 = operatorN1;
    this.operatorN2 = operatorN2;
  }

  abstract play(): R;
}

class BinarySum extends BinaryOperation<number, number> {
  play(): number {
    return this.operatorN1 + this.operatorN2;
  }
}

// console.log(new BinarySum(3, 4).play());

class DatesDiff extends BinaryOperation<Data, string> {
  getTime(data: Data): number {
    let { day, month, year} = data;

    return new Date(`${month}-${day}-${year}`).getTime();
  }

  play(): string {
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

class Queue<T> {
  private queue: Array<T>;

  constructor(...args: T[]) {
    this.queue = args;
  }

  join(item: T): void {
    this.queue.push(item);
  }

  next(): void {
    console.log(
      this.queue.length 
      ? this.queue.shift() 
      : 'Não há ninguem na fila'
    );
  }

  print(): void {
    console.log(this.queue);
  }
}

const myQueue = new Queue<string>('Maxuel');
myQueue.next();
myQueue.join('Ana');
myQueue.join('Bia');
myQueue.join('Carlos');
myQueue.next();
myQueue.join('João');
myQueue.next();
myQueue.print();




