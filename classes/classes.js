"use strict";
class Data {
    constructor(day = 1, month = 1, year = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
;
const marryDate = new Data;
marryDate.year = 2017;
// console.log(marryDate);
class SmartData {
    constructor(day = 1, month = 1, year = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
;
const smartMarryDate = new SmartData;
smartMarryDate.year = 2017;
// console.log(smartMarryDate);
// Class Product Challenge
// Attributes: nome, price and discount
// Create constructor
// Obs. 1: Discount is optional (default value 0)
// Obs. 2: Create two products: given two and three params
class Product {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.liquidPrice = 0;
    }
    setDiscount() {
        this.liquidPrice = this.price - (this.price * this.discount);
    }
    getLiquidPrice() {
        return this.liquidPrice;
    }
    getSummary() {
        return `Name: ${this.name} Price: ${this.price} Discount ${this.discount} Liquid Price ${this.liquidPrice}`;
    }
}
const productN1 = new Product('Playstation 5', 5000);
const productN2 = new Product('X Box Series S', 3000, 0.3);
productN2.setDiscount();
// console.log(productN1.getSummary(), productN2.getSummary());
// console.log(productN2.getLiquidPrice()); 
class Car {
    constructor(brand, model, maximumSpeed = 200) {
        this.brand = brand;
        this.model = model;
        this.maximumSpeed = maximumSpeed;
        this.currentSpeed = 0;
        this.brand;
        this.model = model;
        this.maximumSpeed = maximumSpeed;
    }
    changeSpeed(delta) {
        const updatedSpeed = this.currentSpeed + delta;
        const isUpdatedSpeedValid = updatedSpeed >= 0 && updatedSpeed <= this.maximumSpeed;
        if (isUpdatedSpeedValid) {
            this.currentSpeed = updatedSpeed;
        }
        else {
            this.currentSpeed = delta > 0 ? this.maximumSpeed : 0;
        }
        return this.currentSpeed;
    }
    acelerate() {
        return this.changeSpeed(5);
    }
    stop() {
        return this.changeSpeed(-5);
    }
}
const carOne = new Car('Ford', 'Ka', 185);
// Array(50).fill(0).forEach(() => console.log(carOne.acelerate()))
// Array(50).fill(0).forEach(() => console.log(carOne.stop()))
class Ferrari extends Car {
    constructor(model, maximumSpeed = 200) {
        super('Ferrari', model, maximumSpeed);
    }
    acelerate() {
        return this.changeSpeed(20);
    }
    stop() {
        return this.changeSpeed(-15);
    }
}
const f40 = new Ferrari('F40', 324);
// console.log(`${f40.model} ${f40.brand}`);
// console.log(f40.acelerate());
// console.log(f40.stop());
// Getters & Setters
class Person {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        if (age >= 0 && age <= 120) {
            this._age = age;
        }
    }
}
const personOne = new Person;
// console.log(personOne.age);
// Attributes and static methods
class CustomMath {
    static circleArea(radius) {
        return this.PI * Math.pow(radius, 2);
    }
}
CustomMath.PI = 3.1416;
// console.log(CustomMath.circleArea(10));
class Calculator {
    constructor() {
        this.result = 0;
    }
    getResult() {
        return this.result;
    }
}
class Sum extends Calculator {
    execute(...listNumbers) {
        this.result = listNumbers.reduce((acc, number) => acc + number);
    }
}
class Multiplication extends Calculator {
    execute(...listNumbers) {
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
    constructor() { }
    ;
    static getInstance() {
        return Unique.instance;
    }
    now() {
        return new Date();
    }
}
Unique.instance = new Unique;
// console.log(Unique.getInstance().now())
// Readonly
class Airplane {
    constructor(model, prefix) {
        this.model = model;
        this.prefix = prefix;
    }
}
const airPlanceInstance = new Airplane('Tu-114', 'PT-ABC');
// airPlanceInstance.model = 'DC-8';
// airPlanceInstance.prefix = 'PT-DEF';
// console.log(airPlanceInstance);
//# sourceMappingURL=classes.js.map