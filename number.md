> ”一个看上去是整数的东西，其实都是浮点数“ -- mdn web docs

上面这句话出自 mdn 上的 Number 章节，指的是在 TS 中，我们平时写的数字尽管有的看起来是整型，其实也都是浮点型，
因为在 TS 中，number 类型就是浮点型，如下：

```ts
// a 和 b 都是浮点型，尽管 a 看起来好像是个整型
const a: number = 1;
const b: number = 1.1;
```

不过，在 TS 中数值类型是有整型的，那就是在 ES 2020 新加入的类型 bigint

```ts
// 在整数后面加个 n，就是声明 bigint 了，c 就是整数类型
const c = 1n;
console.log(typeof c); // bigint
```

总结：

- number：双精度 64 位浮点型
- bigint：长整型