/**
 * 119. 杨辉三角 II
 * https://leetcode-cn.com/problems/pascals-triangle-ii/
 * https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif
 * @param {number} rowIndex
 * @returns {number[]}
 */
const getRow = (rowIndex) => {
  // 生成下一行的数据
  //   1 3 3 1
  //  1 4 6 4 1
  const nextRow = (nums) => {
    let res = []
    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        res.push(1)
      } else {
        res.push(nums[i] + nums[i - 1])
      }
    }
    res.push(1)
    return res
  }
  let arr = [1]
  for (let i = 0; i < rowIndex; i++) {
    arr = nextRow(arr)
  }
  return arr
}

console.log(getRow(3))
