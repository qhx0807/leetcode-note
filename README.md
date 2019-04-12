# leetcode

#### 计算斐波拉契数列
```javascript
const fib = (n) => {
  let [a, b] = [0, 1]
  while (a < n) {
    [a, b] = [b, b + a]
    console.log(a)
  }
}
```