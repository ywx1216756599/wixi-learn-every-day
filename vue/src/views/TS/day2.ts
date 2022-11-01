export default {

}
// 函数
function demo1(num: number): number {
  return num
}

const demo2 = (str: string): number => {
  return str.length
}

const demo3: (srt: string) => number = (str) => {
  return str.length
}
// demo3 改进
type Tem1 = (str: string) => number
const demo4: Tem1 = (str) => {
  return str.length
}

// 函数无返回值
function demo5(): void { }
const demo6 = (): void => { }
// 参数选填
// 注：可选参数必须位于必选参数之后
const demo7 = (str: string, num?: number) => {

}
// 函数重载
function demo8(user: number, isUser: number): string;
function demo8(user: number): number;
function demo8(user: number, isUser?: number) {
  if (isUser) {
    return String(user)
  } else {
    return user
  }
}
// 异步函数
async function demo9(): Promise<void> {

}
// Generator 函数 基本上不用了做个了解
function* demo10(): Iterable<void> { }
async function* demo11(): AsyncIterable<void> { }

// Class 类
