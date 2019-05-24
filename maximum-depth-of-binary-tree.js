/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 104. 二叉树的最大深度
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @returns {number}
 */
const maxDepth = (root) => {
  if (root === null) return 0
  return Math.max.call(null, maxDepth(root.left), maxDepth(root.right)) + 1
}
