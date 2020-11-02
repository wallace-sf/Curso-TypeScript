// string
let nameTest: string = 'João';
// console.log(name);

// nameTest = 28;

// numbers
let idade: number = 27;

idade = 27.5;
// console.log(idade);

let hasHobbies: boolean = false;
// hasHobbies = 1;
// console.log(hasHobbies);

// explicit types
let myAge: number;
myAge = 27;

// console.log(typeof myAge);

// myAge = 'age is 27';

// console.log(typeof myAge);

// array
let hobbies: any[] = ['Cook', 'Sports'];

hobbies = [100, 200, 300];

// console.log(hobbies);

// tuples 
let address: [string, number, number] = ['Av Principal', 99, 123];
// console.log(address); 

// enums
enum Gender {
  Male = 100,
  Female,
  NonBinary = 2
}

let myGender: Gender = Gender.Female;
// console.log(myGender);
// console.log(Gender.NonBinary);

// any
let carro: any = 'BMW';

// console.log(carro);

carro = { marca: 'BMW', ano: 2019 };

// console.log(carro);

function getName(name: string): string {
  return name;
}

// console.log(getName('Wallace'));

function createConsoleText(): void {
  // return 'Hello World';
}

// console.log(createConsoleText());

function multiply(numA: number, numB: number): number {
  return numA * numB;
}

// console.log(multiply(4, 'Bia'));
// console.log(multiply(4, 9));

// type function
let calc: (numA: number, numB: number) => number;

calc = multiply;

// console.log(calc(4, 5));

// object
let user: { name: string, age: number} = {
  name: 'João',
  age: 27
};

// user = {};

user = {
  name: 'Wallace',
  age: 31
}

// Desafio
/*
  * Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores;
    - Função de bater o ponto que recebe a hora e retorna uma string;
      - Ponto normal (<= 8);
      - Fora do horário (>= 8).
*/

// Alias
type Employee = {
  supervisors: string[],
  checkIn: (time: number) => string;
};

const checkIn = (time: number): string => {
  return time > 8 ? 'Fora do horário' : 'Dentro do horário';
}

const employee: Employee = {
  supervisors: ['Maykel', 'Zé Maria'],
  checkIn,
}

// console.log(employee.supervisors);
// console.log(employee.checkIn(5));

// Union Types
let nota: number | string = 10;
// console.log(`Minha nota é ${nota}`);

nota = '10';

// console.log(`Minha nota é ${nota}`);

// Checking types
let value = 30;

if (typeof value === 'number') {
  // console.log('Type number');
} else {
  // console.log(typeof value);
}

// never
function getError(msg: string): never {
  throw new Error(msg);
  
}

const product = {
  name: 'Sabão',
  price: 100,
  validateProduct() {
    if (!this.name || !this.name.trim().length) {
      getError('O nome é obrigatório');
    }

    if (this.price < 0) {
      getError('Preço inválido');
    }
  }
}


product.validateProduct();

// Strict Null Checks

let height = 12;
// height = null;

let optionalHeight: null | number = 12;
optionalHeight = null;

type Contact = {
  name: string,
  phone1: string,
  phone2: string | null,
}

const contact1: Contact = {
  name: 'Fulano',
  phone1: '98765432',
  phone2: null,
}

// console.log(contact1.name, contact1.phone1, contact1.phone2);
let isNullable = null; // any
isNullable = 12;
// console.log(isNullable);
isNullable = 'abc';
// console.log(isNullable);
