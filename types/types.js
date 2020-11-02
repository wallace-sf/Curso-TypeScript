"use strict";
// string
var nameTest = 'João';
// console.log(name);
// nameTest = 28;
// numbers
var idade = 27;
idade = 27.5;
// console.log(idade);
var hasHobbies = false;
// hasHobbies = 1;
// console.log(hasHobbies);
// explicit types
var myAge;
myAge = 27;
// console.log(typeof myAge);
// myAge = 'age is 27';
// console.log(typeof myAge);
// array
var hobbies = ['Cook', 'Sports'];
hobbies = [100, 200, 300];
// console.log(hobbies);
// tuples 
var address = ['Av Principal', 99, 123];
// console.log(address); 
// enums
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 100] = "Male";
    Gender[Gender["Female"] = 101] = "Female";
    Gender[Gender["NonBinary"] = 2] = "NonBinary";
})(Gender || (Gender = {}));
var myGender = Gender.Female;
// console.log(myGender);
// console.log(Gender.NonBinary);
// any
var carro = 'BMW';
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
var calc;
calc = multiply;
// console.log(calc(4, 5));
// object
var user = {
    name: 'João',
    age: 27
};
// user = {};
user = {
    name: 'Wallace',
    age: 31
};
var checkIn = function (time) {
    return time > 8 ? 'Fora do horário' : 'Dentro do horário';
};
var employee = {
    supervisors: ['Maykel', 'Zé Maria'],
    checkIn: checkIn,
};
// console.log(employee.supervisors);
// console.log(employee.checkIn(5));
// Union Types
var nota = 10;
// console.log(`Minha nota é ${nota}`);
nota = '10';
// console.log(`Minha nota é ${nota}`);
// Checking types
var value = 30;
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
var product = {
    name: 'Sabão',
    price: 100,
    validateProduct: function () {
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
var height = 12;
// height = null;
var optionalHeight = 12;
optionalHeight = null;
var contact1 = {
    name: 'Fulano',
    phone1: '98765432',
    phone2: null,
};
// console.log(contact1.name, contact1.phone1, contact1.phone2);
var isNullable = null; // any
isNullable = 12;
// console.log(isNullable);
isNullable = 'abc';
// console.log(isNullable);
