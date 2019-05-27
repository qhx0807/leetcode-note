/**
 * 155. 最小栈
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 * https://leetcode-cn.com/problems/min-stack/
 * push(x) -- 将元素 x 推入栈中
 * pop() -- 删除栈顶的元素
 * top() -- 获取栈顶元素
 * getMin() -- 检索栈中的最小元素
 */
const MinStack = function () {
  this.stack = []
  this.mins = []
  this.minIndex = -1
}
/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (this.minIndex === -1) {
    this.minIndex = 0
    this.mins.push(this.minIndex)
    return
  }
  if (this.stack[this.minIndex] >= x) {
    this.minIndex = this.stack.length - 1
    this.mins.push(this.minIndex)
  }
}
/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) return
  if (this.stack.length === this.minIndex + 1) {
    this.mins.pop()
    this.minIndex = this.mins[this.mins.length - 1]
  }
  return this.stack.pop()
}
/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}
/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.minIndex]
}

let obj = new MinStack()
obj.push(2147483646)
obj.push(2147483646)
obj.pop()
console.log(obj)
console.log(obj.getMin())
