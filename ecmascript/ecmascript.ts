// let & const
// console.log(randomVariable);
let randomVariable; // not hosting, but converted to var on es5
// var randomVariable; // hoisting

let isCold = true;

if (isCold) {
  var action = 'Colocar o casaco!';
  // let action = 'Colocar o casaco!'; // not blocked scope;
}

// console.log(action);

const cpf = '123.456.789-00';
// cpf = '000.001.002-03';

// console.log(cpf);

var secret = 'external';

function reveal() {
  var secret = 'inner';
  console.log(secret);
}

// reveal();
// console.log(secret);

// Arrow Function

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// console.log(add(5, 4));

const subtract = (n1: number, n2: number): number => n1 - n2;

// console.log(subtract(5, 4));

const genericSalute = () => console.log('Olá');
// genericSalute();

const talkTo = (person: string) => console.log(`Olá ${person}`);
// talkTo('Wallace');

// function normalWithThis() {
//   console.log(this);
// }

// normalWithThis();

// const normalWithThisSpecial = normalWithThis.bind({name: 'Ana'});
// normalWithThisSpecial();

// const arrowWithThis = () => console.log(this);

// arrowWithThis();

// const arrowWithThisSpecial = arrowWithThis.bind({name: 'Ana'});

// arrowWithThisSpecial();

// Default Params
function countdown(start: number = 5, end: number = start - 5): void {

  while (start > end) {
    console.log(start);
    start--
  }  
  console.log('Fim');
}

// countdown(10);

// Rest & Spread
const numbers = [1, 10, 99, -5, 200];
// console.log(Math.max(...numbers));

const classA: string[] = ['João', 'Maria', 'Carlos'];
const classB: string[] = ['Fernando', 'Miguel', 'Lorena', ...classA];
// console.log(classB);

function getNumbers(...numbers: number[]): number[] {
  return numbers
}

const numbersOutput = getNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(numbersOutput);

// Rest & Spread (Tuple)
const tuple: [number, string, boolean] = [1, 'abc', false];

function tupleParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

// tupleParam1(...tuple);

function tupleParam2(...params: [number, string, boolean]): void {
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

// tupleParam2(...tuple);

// Destructuring (Array)
const characteristics = ['Motor Zetec 1.8', 2020];
// const motor = characteristics[0];
// const ano = characteristics[1];
// console.log(motor, ano);

const [motor, ano] = characteristics;
// console.log(motor, ano);

// Destructuring (objeto)
const item = {
  name: 'SSD 480GB',
  price: 200,
  characteristics: {
    isImported: true,
  }
}

// const nameItem = item.name;
const priceItem = item.price;

// console.log(nameItem, priceItem);
const { name: nameItem, price, characteristics: { isImported } } = item;
// console.log(nameItem, price, isImported);

const userID: string = 'SuporteCod3r';
const notificationsAmount: string = '9';
// const welcome: string = 'Welcome ' + userID + 
//   ' Notifications ' + notificationsAmount;
const welcome = `
  Welcome ${userID},
  Notifications: ${parseInt(notificationsAmount) > 9 ? '+9' : notificationsAmount}`

// console.log(welcome);


// Exercicio 1
// var dobro = function(valor) {
//   return valor * 2
// }

const double = (value: number): number => value * 2;
// console.log(double(5.5));

// Exercicio 2
// var dizerOla = function (nome) {
//   if (nome === undefined) { nome = "Pessoa" }
//   console.log("Ola, " + nome)
// }

const sayHello = (name: string = 'Pessoa'): void => {
  console.log(`Hello, ${name}`);
}

// sayHello();
// sayHello('Wallace');

// Exercicio 3
// var nums = [-3, 33, 38, 5]
// console.log('???')
const nums: number[] = [-3, 33, 38, 5];
// console.log(Math.min(...nums));

// Exercicio 4
// var array = [55, 20];
const array: number[] = [55, 20, ...nums];
 
// console.log(array);


// Exercicio 5
// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2] 
const notas: number[] = [8.5, 6.3, 9.4];
const [notas1, notas2, notas3] = notas;

// console.log(notas1, notas2, notas3);

// Exercicio 6
// var cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)
type Cientista = {
  primeiroNome: string,
  experiencia: number,
}

const cientista: Cientista = { primeiroNome: 'Will', experiencia: 12 };

const { primeiroNome, experiencia } = cientista; 

// console.log(primeiroNome, experiencia);

// Promises 
  // Old Way (using callbacks)

type Callback = (text: string) => void;

const wait = (cb: Callback, time: number): void => {
  setTimeout(() => cb('Waiting...')
  , time);
};

// wait((text: string): void => console.log(text), 3000);
  // Using Promises

  const waitWithPromises = (time: number): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Waiting...');
      }, time)
    })
  }

// waitWithPromises(3000).then(response => console.log(response));
fetch('https://swapi.dev/api/people/1/')
  .then(response => response.json())
  .then(({ films: [movieUrl] }) => movieUrl)
  .then(movieUrl => fetch(movieUrl))
  .then(response => response.json())
  .then(({ title }) => console.log(title));



