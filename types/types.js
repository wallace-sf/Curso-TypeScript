"use strict";
// string
let nameTest = 'João';
// console.log(name);
// nameTest = 28;
// numbers
let idade = 27;
idade = 27.5;
// console.log(idade);
let hasHobbies = false;
// hasHobbies = 1;
// console.log(hasHobbies);
// explicit types
let myAge;
myAge = 27;
// console.log(typeof myAge);
// myAge = 'age is 27';
// console.log(typeof myAge);
// array
let hobbies = ['Cook', 'Sports'];
hobbies = [100, 200, 300];
// console.log(hobbies);
// tuples 
let address = ['Av Principal', 99, 123];
// console.log(address); 
// enums
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 100] = "Male";
    Gender[Gender["Female"] = 101] = "Female";
    Gender[Gender["NonBinary"] = 2] = "NonBinary";
})(Gender || (Gender = {}));
let myGender = Gender.Female;
// console.log(myGender);
// console.log(Gender.NonBinary);
// any
let carro = 'BMW';
// console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
// console.log(carro);
function getName(name) {
    return name;
}
// console.log(getName('Wallace'));
function createConsoleText() {
    // return 'Hello World';
}
// console.log(createConsoleText());
function multiply(numA, numB) {
    return numA * numB;
}
// console.log(multiply(4, 'Bia'));
// console.log(multiply(4, 9));
// type function
let calc;
calc = multiply;
// console.log(calc(4, 5));
// object
let user = {
    name: 'João',
    age: 27
};
// user = {};
user = {
    name: 'Wallace',
    age: 31
};
const checkIn = (time) => {
    return time > 8 ? 'Fora do horário' : 'Dentro do horário';
};
const employee = {
    supervisors: ['Maykel', 'Zé Maria'],
    checkIn,
};
// console.log(employee.supervisors);
// console.log(employee.checkIn(5));
// Union Types
let nota = 10;
// console.log(`Minha nota é ${nota}`);
nota = '10';
// console.log(`Minha nota é ${nota}`);
// Checking types
let value = 30;
if (typeof value === 'number') {
    // console.log('Type number');
}
else {
    // console.log(typeof value);
}
// never
function getError(msg) {
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
};
product.validateProduct();
// Strict Null Checks
let height = 12;
// height = null;
let optionalHeight = 12;
optionalHeight = null;
const contact1 = {
    name: 'Fulano',
    phone1: '98765432',
    phone2: null,
};
// console.log(contact1.name, contact1.phone1, contact1.phone2);
let isNullable = null; // any
isNullable = 12;
// console.log(isNullable);
isNullable = 'abc';
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432'],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=types.js.map