const num: number = 1;
const str: string = '1';
const bool: boolean = false;
const undef: undefined = undefined;
const nul: null = null
const obj: object = { name: '1' }
const bigNum: bigint = 123131233123n
const bigNum2: bigint = BigInt(2134234234)
const symbolValue: symbol = Symbol('test')
// 关闭 strictNullChecks 情况下
// const strValue: string = null
// const strValue: string = undefined

// void
function func(): void { }
function func3(): void { return undefined }
// 关闭 strictNullChecks 情况下
// function func2(): void { return null }

// Array
const arrStr: string[] = ['one', 'two']
const arrNum: Array<number> = [1, 2]
// 元组
const arr1: [number, string] = [1, 'one']
const arr2: [number, string?, boolean?] = [1]
type TupleLength = typeof arr2.length
// arr2[1] = '1'
// arr2[2] = false
const arr3: [number, string?, boolean?] = [1, ,]
// ts 4.x
const arr4: [age: number, isMan: boolean, name?: string] = [23, true]
const [n, ...arr5] = arr4
// interface 声明对象类型
interface Person {
  name: string
  age: number
  isMan: boolean,
}
const obj1: Person = {
  name: 'wixi',
  age: 23,
  isMan: true, // error 当没有isMan属性报错 不能少于声明的变量
  // height: 175  error 不能定义声明外的变量
}
// 可选和readonly修饰符
interface Person2 {
  name: string
  age: number
  isMan: boolean,
  height?: number,
  readonly weight: number,
}
const obj2: Person2 = {
  name: 'wixi',
  age: 23,
  isMan: true,
  // height: 175  不报错 可选变量可以不定义
  weight: 80   // 只读变量 不能重新赋值
}
// obj2.weight = 12 error 不能重新赋值

// Object
const a: Object = '1'
const b: Object = 2
const c: Object = true
const d: Object = () => { }

// object 解决拆箱问题
// const e: object = '1'
// const f: object = 2
// const g: object = true
const h: object = {}

// 字面量类型
const name: 'wixi' = "wixi"
const isMan: true = true
const age: 23 = 23
// 联合字面量类型
interface Tem {
  name: 'wixi' | 'ywx',
  age: 24 | 23 | 22,
  isMan: true | false
}
// 联合类型可以混入任意的类型
interface Tem2 {
  mixins: 2 | '1' | true | (() => {}) | {}
}

interface Tem3 {
  user:
  {
    vip: true,
    light: string
    content: string
  } |
  {
    vip: false,
    content: string
  }
}
// declare var tem: Tem3;
// if(tem.user.vip){
//   console.log(tem.user.light)
// }
// 枚举 enum
enum Tem4 {
  'one',
  'two',
  'three'
}
console.log(Tem4.one)  // 0
console.log(Tem4[0])   // one

// 处理默认值
enum Tem5 {
  'one' = 1,
  'two',
  'three'
}
console.log(Tem5.two)   // 2
console.log(Tem5.three) // 3
enum Tem6 {
  'one',
  'two' = 999,
  'three'
}
console.log(Tem6.one)   // 0
console.log(Tem6.three) // 1000
// 延迟求值 延迟求值必须放在用常量枚举值声明的成员之后，或者放在第一位：
function retrunNum() {
  return 222
}
enum Tem7 {
  'one' = retrunNum(),
  'two' = 0,
  'three'
}
console.log(Tem7.one)   // 222
enum Tem8 {
  'one',
  'two',
  'three' = retrunNum(),

}
console.log(Tem8.three)   // 222
// 值为字符串 
enum Tem9 {
  'one',
  'two' = 'two1',
}
// warning: 仅有值为数字的枚举成员才能够进行这样的双向枚举
console.log(Tem9.one)   // 0
console.log(Tem9.two)   // two1
console.log(Tem9[0])    // one
// console.log(Tem9['two1']) error 值为字符串无反推

// 常量枚举
const enum Tem10 {
  'one',
  'two',
  'three'
}
// console.log(Tem10[0]) error 常量枚举 不能反推
// console.log(Tem10[1])
// console.log(Tem10[2])
export default {

}