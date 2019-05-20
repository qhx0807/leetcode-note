/**
 * 100. 相同的树
 * https://leetcode-cn.com/problems/same-tree/
 * @param {TreeNode} p
 * @param {TreeNode} q
 */

// function TreeNode (val) {
//   this.val = val
//   this.left = this.right = null
// }

const isSameTree = (p, q) => {
  // 检查p和q节点是否不是空，它们的值是否相等。如果所有检查都正常，则递归地为子节点执行相同操作
  if (p === null && q === null) {
    return true
  }
  if (p !== null && q !== null && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  } else {
    return false
  }
}

console.log(isSameTree([1, 2, 3], [1, 2, 3]))
