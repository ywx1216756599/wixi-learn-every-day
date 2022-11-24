export default {}

// 结构化类型系统
class Cat1 {
  eat() { }
}

class Dog1 {
  eat() { }
}

const func1 = (cat: Cat1) => { }
func1(new Dog1())

// 标称类型系统

type USD = number
type CNY = number

const USDCount: USD = 200
const CNYCount: CNY = 200

const addMonery =
  (monery1: CNY, monery2: CNY): CNY => {
    return monery1 + monery2
  }

addMonery(CNYCount, USDCount)


declare class Demo1<T extends string>{
  protected __tag__: T
}
type Demo2<T, U extends string> = T & Demo1<U>
type CNY2 = Demo2<number, 'CNY'>
type USD2 = Demo2<number, 'USD'>

const CNYCount2 = 100 as CNY2
const USDCount2 = 100 as USD2

const addMonery2 =
  (monery1: CNY2, monery2: CNY2): CNY2 => {
    return (monery1 + monery2) as CNY2
  }

// addMonery2(CNYCount2, USDCount2) error
addMonery2(CNYCount2, CNYCount2)

class CNY3 {
  private __tag__: string
  constructor(public value: number) {
    this.__tag__ = 'CNY'
  }
}
class USD3 {
  private __tag__: string
  constructor(public value: number) {
    this.__tag__ = 'USD'
  }
}

const CNYCount3 = new CNY3(100)
const USDCount3 = new USD3(100)

const addMonery3 =
  (monery1: CNY3, monery2: CNY3) => {
    return monery1.value + monery2.value
  }

// addMonery3(CNYCount3, USDCount3)
addMonery3(CNYCount3, CNYCount3)

// 判断类型兼容性的方式
type Result1 = '123' extends string ? 1 : 2  // 1
type Result2 = 1 extends number ? 1 : 2  // 1
type Result3 = true extends boolean ? 1 : 2  // 1
type Result4 = { name: 'wixi' } extends {} ? 1 : 2  // 1
type Result5 = { name: 'wixi' } extends object ? 1 : 2  // 1
type Result6 = [] extends object ? 1 : 2  // 1

// 联合类型
type Result7 = 1 extends 1 | 2 | 3 ? 1 : 2 // 1
type Result8 = 'wixi' extends 'wixi' | 'ywx' | 'xpg' ? 1 : 2
type Result9 = false extends false | true ? 1 : 2

type Result10 = string extends string | number | boolean ? 1 : 2

// 结论：字面量类型 < 包含此字面量类型的联合类型，原始类型 < 包含此原始类型的联合类型

type Result11 = 'wixi' | 'ywx' | 'xpg' extends string ? 1 : 2
type Result12 = [] | (() => {}) | {} extends object ? 1 : 2

// 结论：同一基础类型的字面量联合类型 < 此基础类型
// 结论：字面量类型 < 包含此字面量类型的联合类型（同一基础类型） < 对应的原始类型

type Result13 = 'wixi' extends 'wixi' | 'xpg'
  ? 'wixi' | 'xpg' extends string
  ? 2
  : 1
  : 0 
type Result14 = string extends String ? 1 : 2
type Result15 = String extends {} ? 1 : 2
type Result16 = {} extends object ? 1 : 2
type Result17 = object extends Object ? 1 : 2

// 特殊情况 String extends {}  {} 是 object的字面量意思
// String 可以看作是一个对象 可以看做 String 继承了 {} 
// 在结构化类型系统的比较下，String 会被认为是 {} 的子类型