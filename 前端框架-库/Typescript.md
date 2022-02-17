定义数组 

```ts
const arr:Array<number|string> = [12,3,4,3];
const arr1:(number|string)[] = [23,"2"];
interface Iprops {
  [index:number]:string
}
const arr2:Iprops = ["df"]
```

定义函数

```ts
const fn(a:number,b:number):number{
  return a+b
}
const fnn:(a:number,b:number)=>number = function(a,b){
  return a-b
}
//不确定参数的情况下 加一个？即可
const fp(a:number,b?:number):number{
  return a
}
//当参数多出来的时候 扩展运算符 注明参数的类型
const fpp(a:string,b:string,...rest:string[]):string{
  return a
})
```

接口 interface 

```ts
当一个函数需要多个参数的时候 或者这个参数要满足多个条件的时候
interface Iprops{
	name:string;
  age:number
}
function myfn(a:Iprops):Iprops{
  return a;
}
```

泛型

```ts
function fn<T>(name:T): T{
	return name;
}

```

断言

```ts
通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。
function fn(name: any): any{
  	const _name = (name as string).length;
  	console.log(_name);
  	return name;
}
泛型的时候这种断言并不起作用

```

联合类型

```ts
interface Icar{
  name:string,
  type:string
}
interface Plane{
  price:string
}
type Hot = Icar|Plane
这个时候给对象加注解 必须满足两个接口之一 & 运算符就是必须全部满足
```













```
 //用一个类来实现接口
    interface Say{
        name: string,
        age: number,
        Sayhello():void
    }
    class SAY implements Say{
        constructor(name:string,age:number){
            this.age = age
            this.name=name
        }
        name: string;
        age: number;
        Sayhello(): void {
            throw new Error('Method not implemented.');
        }
    }
    interface Sad{
        [ppx:string]:number
    }
    function myfn(a: Sad): Sad{
        
    }
    function fnn<T extends Sad,K>(name: T,age:K): T{
        return name;
    }
    const obj: Say = {
        name: "kongsa",
        age: 90,
        Sayhello() {
            console.log("nihao");
        }
    }
    const fn = (name:any) => {
        return name;
    }
    const fpp = () => {
        console.log("this is pretty");
        
    }
    function handle<T>(name: T, age: number): string {
        console.log(age);
        return name+"kongsaa";
    }
    interface IDemo<T>{
        x: number,
        age: T;
    }
    
    // 使用类型断言  
    const demo_ = (parma?: IDemo<string>) => {
        let _parma = parma as IDemo<string>
        _parma.x = 1
    }
    const array: Array<number | string> = [12, 3, 4, 4, "kon"];
    let test:(a: number, b: number) => number = function(a, b) {
        return a;
    }
    let a = test(1, 2);
    const lpp: (a: number, b: number,...restOfName:number[]) => number = function (a, b) {
        return a + b;
    }
    const qpp = lpp(1,2,)
```

