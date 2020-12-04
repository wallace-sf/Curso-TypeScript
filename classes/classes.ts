class Data {
  // Public by default
  day: number;
  public month: number;
  year: number;

  constructor(day: number = 1, month: number = 1, year: number = 1970) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
};

const marryDate = new Data;
marryDate.year = 2017;

// console.log(marryDate);

class SmartData {
  constructor(public day: number = 1, public month: number = 1, public year: number = 1970) {}
};

const smartMarryDate = new SmartData;
smartMarryDate.year = 2017;

// console.log(smartMarryDate);

// Class Product Challenge
// Attributes: nome, price and discount
// Create constructor
// Obs. 1: Discount is optional (default value 0)
// Obs. 2: Create two products: given two and three params

class Product {
  name: string;
  price: number;
  discount: number;
  liquidPrice: number;

  constructor(name: string, price: number, discount: number = 0) {
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.liquidPrice = 0;
  }

  setDiscount(): void {
    this.liquidPrice = this.price - (this.price * this.discount);
  }

  getLiquidPrice(): number {
    return this.liquidPrice;
  }

  getSummary(): string {
    return `Name: ${this.name} Price: ${this.price} Discount ${this.discount} Liquid Price ${this.liquidPrice}`;
  }
}


const productN1 = new Product('Playstation 5', 5000);
const productN2 = new Product('X Box Series S', 3000, 0.3);

productN2.setDiscount();

// console.log(productN1.getSummary(), productN2.getSummary());
// console.log(productN2.getLiquidPrice()); 

class Car {
  private currentSpeed: number = 0;

  constructor (
    public brand: string, 
    public model: string, 
    private maximumSpeed: number = 200) {
      this.brand;
      this.model = model;
      this.maximumSpeed = maximumSpeed;
    }

    protected changeSpeed (delta: number): number {
      const updatedSpeed = this.currentSpeed + delta;
      const isUpdatedSpeedValid = 
        updatedSpeed >= 0 && updatedSpeed <= this.maximumSpeed;

      if (isUpdatedSpeedValid) {
        this.currentSpeed = updatedSpeed;
      } else {
        this.currentSpeed = delta > 0 ? this.maximumSpeed : 0; 
      }

      return this.currentSpeed;
    }

    public acelerate(): number {
      return this.changeSpeed(5);
    }

    public stop(): number {
      return this.changeSpeed(-5);
    }
}

const carOne = new Car('Ford', 'Ka', 185);

// Array(50).fill(0).forEach(() => console.log(carOne.acelerate()))
// Array(50).fill(0).forEach(() => console.log(carOne.stop()))

class Ferrari extends Car {
  constructor(model: string, maximumSpeed: number = 200){
    super('Ferrari', model, maximumSpeed);
  }

  public acelerate(): number {
    return this.changeSpeed(20);
  }

  public stop(): number {
    return this.changeSpeed(-15);
  }
}

const f40 = new Ferrari('F40', 324);
// console.log(`${f40.model} ${f40.brand}`);
// console.log(f40.acelerate());
// console.log(f40.stop());

// Getters & Setters
class Person {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    if (age >= 0 && age <= 120) {
      this._age = age;
    }
  } 
}

const personOne = new Person
// console.log(personOne.age);

// Attributes and static methods
class CustomMath {
  static PI: number = 3.1416;

  static circleArea(radius: number): number {
    return this.PI * Math.pow(radius, 2);
  }
}

// console.log(CustomMath.circleArea(10));

abstract class Calculator {
  protected result: number = 0;

  abstract execute(...listNumbers: number[]): void;

  getResult(): number {
    return this.result;
  }
}

class Sum extends Calculator {
  execute(...listNumbers: number[]): void {
    this.result = listNumbers.reduce((acc, number) => acc + number);
  }
}

class Multiplication extends Calculator {
  execute(...listNumbers: number[]): void {
    this.result = listNumbers.reduce((acc, number) => acc * number);
  }
}

let c1 = new Sum();

c1.execute(2, 3, 4);
// console.log(c1.getResult());

// c1 = new Multiplication();

c1.execute(2, 3, 4);
// console.log(c1.getResult());

// Private constructor and Singleton (Only one instance)

class Unique {
  private static instance: Unique = new Unique;
  private constructor() {};

  static getInstance(): Unique {
    return Unique.instance;
  }

  now() {
    return new Date();
  }
}

// console.log(Unique.getInstance().now())
// Readonly

class Airplane {
  public readonly model: string;
  public readonly prefix: string;

  constructor (model: string, prefix: string) {
    this.model = model;
    this.prefix = prefix;
  }
}

const airPlanceInstance = new Airplane('Tu-114', 'PT-ABC');
// airPlanceInstance.model = 'DC-8';
// airPlanceInstance.prefix = 'PT-DEF';
// console.log(airPlanceInstance);

