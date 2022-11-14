export default {}
// 类型别名 type声明
type Demo1 = string;
type status = 201 | 302 | 401 | 402 | 404 | 501;
const codeStatus: status = 401;
type unknownVal = number | string | (() => string)
type funcEvent = (e: Event) => void
const handleClick: funcEvent = (e) => {}
type ObjectDemo = {
  name: string;
  age: number;
}

const obj: ObjectDemo = {
  name: 'wixi',
  age: 18
}
// 工具类型
type Demo2<T> = T | string | number
const booleanValue1: Demo2<boolean> = false 
type Demo3 = Demo2<boolean>
const booleanValue2: Demo3 = true

// 联合类型与交叉类型

// 交叉类型
interface Demo4 {
  name: string
}
interface Demo5 {
  age: number
}
type Demo6 = Demo4 & Demo5

const person1: Demo6 = {
  name: 'wixi',
  age: 18
}

// const demo7: string & number   // never类型 没有一种类型又属于string 又属于number
const demo8: unknown & string = '2'

// 索引类型

interface Demo9 {
  [key: string]: string
}
const person2: Demo9 = {
  a: '123',
  b: '234',
  999: '123',
  [Symbol('ddd')]: '1231'
  // c: 123 error
}

interface Demo10 {
  propA: number,
  [key: string]: string | number
}

interface Demo11 {
  name: string,
  age: number,
  isMan: boolean,
  say: () => string
}

type Demo12<T> = {
  [K in keyof T]: string
}

type Demo13 = Demo12<Demo11>