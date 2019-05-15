/**
 * 118. 杨辉三角
 * https://leetcode-cn.com/problems/pascals-triangle/
 * @param {number} numRows
 * @returns {number[][]}
 * @example {https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif}
 */
const generate = (numRows) => {
  let arr = []
  for (let i = 0; i < numRows; i++) {
    arr[i] = new Array(i + 1).fill(1)
  }
  for (let j = 2; j < numRows; j++) {
    for (let k = 1; k < j; k++) {
      arr[j][k] = arr[j - 1][k - 1] + arr[j - 1][k]
    }
  }
  return arr
}
console.log(generate(5))
// 执行用时 : 84 ms, 在Pascal's Triangle的JavaScript提交中击败了98.53% 的用户
// 内存消耗 : 33.8 MB, 在Pascal's Triangle的JavaScript提交中击败了28.43% 的用户

const generate1 = (numRows) => {
  let arr = []
  for (let i = 1; i <= numRows; i++) {
    let row = []
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        row.push(1)
      } else {
        row.push(arr[i - 2][j - 1] + arr[i - 2][j]) 
      }
    }
    arr.push(row)
  }
  return arr
}
console.log(generate1(5))
// 执行用时 : 76 ms, 在Pascal's Triangle的JavaScript提交中击败了98.69% 的用户
// 内存消耗 : 34.2 MB, 在Pascal's Triangle的JavaScript提交中击败了5.02% 的用户
