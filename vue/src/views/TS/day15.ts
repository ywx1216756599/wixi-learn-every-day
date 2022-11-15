import { isArray } from "@vue/shared"

export default {}
// 类型查询操作符 typeof

const strValue = '123'
const numValue = 123
const boolValue = true
const symbValue = Symbol('123')
const funcValue = () => { }

console.log(typeof strValue)      // string
console.log(typeof numValue)      // number
console.log(typeof boolValue)     // boolean
console.log(typeof symbValue)     // symbol
console.log(typeof funcValue)     // function

type strValue2 = typeof strValue  // type strValue2 = '123'
type numValue2 = typeof numValue  // type numValue2 = 123

// 在工具类型中使用 typeof
const func1 = (input: string) => {
  return input.length > 10
}
const func2: typeof func1 = (name: string) => {
  return name === 'wixi'
}
// ReturnType 返回类型
type FuncReturnType = ReturnType<typeof func1>

// 隔离类型层和逻辑层，类型查询操作符后是不允许使用表达式
// const isValid: typeof func1('1111')

// 类型守卫

// typeof的类型保护
const func3 = (input: number | string) => {
  if (typeof input === 'string') {
    // input是string时候走这里 
  } else {
    // input是number时候走这里 
  }
}

const func4 = (input: unknown): input is string => {
  return typeof input === 'string'
}

const func5 = (input: string | number) => {
  if (func4(input)) {
    // string
  } else {
    // number
  }
}

// in 与 instanceof 的类型保护
interface Demo1 {
  name: string
  age: number
  isMan: boolean
}

interface Demo2 {
  say: string
  num: number
  isValid: boolean
}
const handleIn = (demo: Demo1 | Demo2) => {
  if ('name' in demo) {
    console.log(demo.age)
  } else {
    console.log(demo.num)
  }
}

const handleNumberArr = (input: number | Array<number>): Array<number> => {
  if (isArray(input)) {
    return input
  } else {
    return [input]
  }
}

class Father1 {}
class Father2 {}
class Son1 extends Father1 {}
class Son2 extends Father2 {}

const func6 = (className: Son1 | Son2) => {
  if(className instanceof Father1){
    console.log(className) // Son1
  }else {
    console.log(className) // Son2
  }
}

// 泛型
type Factory<T> = T | string

// 泛型约束与默认值
type Factory1<T = boolean> = T | string;

const boolValue2: Factory1 = false

type resStatus<resCode extends number = 200> = resCode extends 200 | 301 | 302 ?
'success' : 'failure'

type Status1 = resStatus<200>
type Status2 = resStatus<404>
type Status3 = resStatus

function func7<T>(input: T): T {
  return input
}

const str1 = func7('123')