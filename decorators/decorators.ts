
function loginClass(constructor: Function) {
  console.log(constructor);
}

// Simple function to be a decorator
// function log(target: Function) {
  //   console.log(target);
  // }
  
  function log(prefix: string) {
    return (target: Function) => {
      console.log(`${prefix} - ${target}`);
    }
  }
  
  function emptyDecorator(_: Function) {}
  
  // Decorator Factory
  
  // @log('Awesome Dude!')
  class Foo {}
  
  function loginClassIf(value: boolean) {
    return value ? loginClass : emptyDecorator;
  }
  
  function decorator(obj: { name: string, value: number }) {
    return function (_: Function): void {
      console.log(obj.name, ': ', obj.value);
    }
  }

  interface HouseHoldAppliance {
    print?(): void;
  }


  // @loginClass
  // @loginClassIf(true)
  // @decorator({ name: 'Idade', value: 25 })
  // @logInObject
  @logInPrint
  class HouseHoldAppliance implements HouseHoldAppliance {
    constructor() {
      console.log('Novo...');
    }
  }

  type Constructor = { new (...args: any[]): {} }

  function logInObject(constructor: Constructor) {
    console.log('Loading...');

    return class extends constructor {
      constructor(...args: any[]) {
        console.log('Antes...');
        super(...args);
        console.log('Depois...');
      }
    }
  }

  // new HouseHoldAppliance();
  // new HouseHoldAppliance();
  // new HouseHoldAppliance();

  function logInPrint(constructor: Function) {
    constructor.prototype.print = function () {
      console.log(this);
    }
  }

// new HouseHoldAppliance().print?.();

// function setApiVersion(constructor) {
//   constructor.api = '0.0.1';
// }

// @setApiVersion
// class Wizard {}

// console.log(new Wizard());

function setApiVersion(constructor: Constructor) {
  return class extends constructor {
    public version: string = '0.0.1';
  }
}

@setApiVersion
class Wizard {
}

// console.log(new Wizard());

// Challenge Decorator profileAdmin

interface UserInfo {
  name: string,
  email: string,
  admin: boolean
}

const userInfo: UserInfo = {
  name: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: false,
};

function profileAdmin<T extends Constructor>(constructor: T): T | never {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);

      if (!userInfo.name || !userInfo.email || !userInfo.admin) {
        throw new Error('Credenciais inválidas ou sem permissão de acesso.')
      }

    }
  }
}

@profileAdmin
class AdministrativeChange {

  getIsCritic(): void {
    console.warn('Some critic was changed');
  }
}

// new AdministrativeChange().getIsCritic();

// Function decorator

class CheckingAccount {
  @nonNegative
  private balance: number = 0;

  constructor(balance: number) {
    this.balance = balance;
  }

  @freeze
  withdraw(@paramInfo value: number): boolean {
    if (value <= this.balance) { 
      this.balance -= value; 

      return true; 
    }

    else return false; 
  }
  
  @freeze
  getBalance(): number  {
    return this.balance;
  }
}

const myCa = new CheckingAccount(10000);
myCa.withdraw(2248.57);
// console.log(myCa.getBalance());

// myCa.getBalance = function() {
//   return this['balance'] + 7000;
// }

// console.log(myCa.getBalance());
function freeze(o: any, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>) {
  // console.log(o);
  // console.log(p);
  // console.log(attributes);
  attributes.writable = false;
}

function nonNegative(o: any, p: PropertyKey) {  
  delete o[p];
  
  Object.defineProperty(o, p, {
    get: (): any => o[`_${String(p)}`],
    set: (value: any): void => {
      if (value < 0) throw new Error("Saldo inválido")
      else {
        o[`_${String(p)}`] = value;
      }
    }
  })
}

function paramInfo(o: any, p: PropertyKey, idxParam: number) {
  // console.log('Target: ', o);
  // console.log('Method: ', p);
  // console.log('Index Param: ', idxParam);
}