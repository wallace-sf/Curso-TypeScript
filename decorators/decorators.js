"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function loginClass(constructor) {
    console.log(constructor);
}
// Simple function to be a decorator
// function log(target: Function) {
//   console.log(target);
// }
function log(prefix) {
    return (target) => {
        console.log(`${prefix} - ${target}`);
    };
}
function emptyDecorator(_) { }
// Decorator Factory
// @log('Awesome Dude!')
class Foo {
}
function loginClassIf(value) {
    return value ? loginClass : emptyDecorator;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.name, ': ', obj.value);
    };
}
// @loginClass
// @loginClassIf(true)
// @decorator({ name: 'Idade', value: 25 })
// @logInObject
let HouseHoldAppliance = class HouseHoldAppliance {
    constructor() {
        console.log('Novo...');
    }
};
HouseHoldAppliance = __decorate([
    logInPrint
], HouseHoldAppliance);
function logInObject(constructor) {
    console.log('Loading...');
    return class extends constructor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
// new HouseHoldAppliance();
// new HouseHoldAppliance();
// new HouseHoldAppliance();
function logInPrint(constructor) {
    constructor.prototype.print = function () {
        console.log(this);
    };
}
// new HouseHoldAppliance().print?.();
// function setApiVersion(constructor) {
//   constructor.api = '0.0.1';
// }
// @setApiVersion
// class Wizard {}
// console.log(new Wizard());
function setApiVersion(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.version = '0.0.1';
        }
    };
}
let Wizard = class Wizard {
};
Wizard = __decorate([
    setApiVersion
], Wizard);
const userInfo = {
    name: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false,
};
function profileAdmin(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!userInfo.name || !userInfo.email || !userInfo.admin) {
                throw new Error('Credenciais inválidas ou sem permissão de acesso.');
            }
        }
    };
}
let AdministrativeChange = class AdministrativeChange {
    getIsCritic() {
        console.warn('Some critic was changed');
    }
};
AdministrativeChange = __decorate([
    profileAdmin
], AdministrativeChange);
// new AdministrativeChange().getIsCritic();
// Function decorator
class CheckingAccount {
    constructor(balance) {
        this.balance = 0;
        this.balance = balance;
    }
    withdraw(value) {
        if (value <= this.balance) {
            this.balance -= value;
            return true;
        }
        else
            return false;
    }
    getBalance() {
        return this.balance;
    }
}
__decorate([
    nonNegative
], CheckingAccount.prototype, "balance", void 0);
__decorate([
    freeze,
    __param(0, paramInfo)
], CheckingAccount.prototype, "withdraw", null);
__decorate([
    freeze
], CheckingAccount.prototype, "getBalance", null);
const myCa = new CheckingAccount(10000);
myCa.withdraw(2248.57);
// console.log(myCa.getBalance());
// myCa.getBalance = function() {
//   return this['balance'] + 7000;
// }
// console.log(myCa.getBalance());
function freeze(o, p, attributes) {
    // console.log(o);
    // console.log(p);
    // console.log(attributes);
    attributes.writable = false;
}
function nonNegative(o, p) {
    delete o[p];
    Object.defineProperty(o, p, {
        get: () => o[`_${String(p)}`],
        set: (value) => {
            if (value < 0)
                throw new Error("Saldo inválido");
            else {
                o[`_${String(p)}`] = value;
            }
        }
    });
}
function paramInfo(o, p, idxParam) {
    // console.log('Target: ', o);
    // console.log('Method: ', p);
    // console.log('Index Param: ', idxParam);
}
//# sourceMappingURL=decorators.js.map