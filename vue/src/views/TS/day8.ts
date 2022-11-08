export default {

}
// Class 类
class Person {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  sayName() {
    console.log(this.name)
  }

  get nameA() {
    return this.name + "A"
  }

  set nameA(value: string) {
    this.name = value + 'A'
  }
}
// 修饰符
// public（访问修饰符）     （ 默认 ）类、类的实例、子类中都能被访问
// private（访问修饰符）    仅能在类的内部被访问
// protected（访问修饰符）  仅能在类与子类中被访问
// readonly（操作修饰符）   只读的

class Person2 {
  name: string
  constructor(name: string) {
    this.name = name
  }
  public sayName() {
    console.log(`public: ${this.name}`)
  }
  private vname(): string {
    return `v${this.name}`
  }
  protected dname(): string {
    return `d${this.name}`
  }
  public sayNewName() {
    console.log(`private: ${this.vname()}`)
    console.log(`protected: ${this.dname()}`)
  }
}

class Son extends Person2 {
  constructor(name: string) {
    super(name)
  }
  getDname() {
    return super.dname()
  }
  grtVname() {
    // return super.vname() error
  }
}
const person = new Person2('ywx')
const son = new Son('wixi')

person.sayName()
person.sayNewName()
// person.vname() error
// person.dname() error
son.sayName()
son.sayNewName()
// son.vname() error
// son.dname() error

// static

class Person3 {
  static demo1() { }
  public demo2() { }
}

var Person4 = /** @class */ (function () {
  function Person() {
  }
  Person.demo1 = function () { };
  Person.prototype.demo2 = function () { };
  return Person;
}());

// 静态成员直接被挂载在函数体上，而实例成员挂载在原型上
// 静态成员不会被实例继承，它始终只属于当前定义的这个类

// 抽象类
abstract class Person5 {
  abstract name: string
  abstract getDname(): string
}

class Son2 extends Person5 {
  name: string;
  constructor(name: string) {
    super()
    this.name = name
  }
  getDname() {
    return `d${this.name}`
  }
}

// interface 实现抽象类
interface Person6 {
  name: string
  get Dname(): string
}

class Son3 implements Person6 {
  name: string
  constructor(name: string) {
    this.name = name
  }
  get Dname(): string {
    return `d${this.name}`
  }
}

// any 表示一个无拘无束的“任意类型”，它能兼容所有类型，也能够被所有类型兼容
let demo1
demo1 = '1'
demo1 = 1
demo1 = true
demo1 = []
demo1 = () => { }
demo1 = { xx: '1' }

demo1.xx
// unknown 要对 unknown 类型进行属性访问，需要进行类型断言
let demo2: unknown
demo2 = '1'
demo2 = 1
demo2 = true
demo2 = []
demo2 = () => { }
demo2 = { xx: '' };

// demo2.xx  error
type dome3 = {
  xx: string
}
const str = (demo2 as dome3).xx

// never never 类型不携带任何的类型信息
type demo4 = number | string | never

const demo5 = []
demo5.push('123')