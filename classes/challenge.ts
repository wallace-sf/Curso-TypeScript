// // Exercício 1 - Classe
// function Moto(nome) {
//   this.nome = nome
//   this.velocidade = 0

//   this.buzinar = function() {
//       console.log('Toooooooooot!')
//   }

//   this.acelerar= function(delta) {
//       this.velocidade = this.velocidade + delta
//   }
// }

// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)

// Answer Exercice 01

class Motorcycle {
  public name: string;
  public speed: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk() {
    console.log('Toooooooooot!');
  }

  acelerate(delta: number) {
    this.speed = this.speed + delta;
  }
}

const moto: Motorcycle = new Motorcycle('Ducati');
// moto.honk();
// console.log(moto.speed);
moto.acelerate(30);
// console.log(moto.speed);

// // Exercício 2 - Herança
// var objeto2D = {
//   base: 0,
//   altura: 0
// }

// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//   return this.base * this.altura
// }
// console.log(retangulo.area())

// Answer Exercice 02

abstract class Object2D {
  protected base: number = 0;
  protected height: number = 0;

    constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  abstract getArea(): number;
}

class Rectangle extends Object2D {
  getArea() {
    return this.base * this.height;
  }
}

const myRectangle = new Rectangle(5, 7);
// console.log(myRectangle.getArea());

// // Exercício 3 - Getters & Setters
// var estagiario = {
//   _primeiroNome: ''
// }

// Object.defineProperty(estagiario, 'primeiroNome', {
//   get: function () {
//       return this._primeiroNome
//   },
//   set: function (valor) {
//       if (valor.length >= 3) {
//           this._primeiroNome = valor
//       } else {
//           this._primeiroNome = ''
//       }
//   },
//   enumerable: true,
//   configurable: true
// })

// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)

// Answer Exercice 03

class Intern {
  private _firstName: string = '';

  get firstName(): string {
    return this._firstName;
  }

  set firstName(firstName: string) {
    if (firstName.length >= 3) {
      this._firstName = firstName;
    } else {
      this._firstName = ''
    }
  }
}

const myIntern = new Intern;
myIntern.firstName = 'Wa';
console.log(myIntern.firstName);
myIntern.firstName = 'Wallace';
console.log(myIntern.firstName);
