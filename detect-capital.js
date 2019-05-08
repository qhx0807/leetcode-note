/**
 * 520.检测大写字母
 * https://leetcode-cn.com/problems/detect-capital/
 * @param {string} word
 * @returns {boolean}
 * @example
 * 全部字母都是大写，比如 "USA"
 * 单词中所有字母都不是大写，比如 "leetcode"
 * 如果单词不只含有一个字母，只有首字母大写，比如 "Google"
 */
const detectCapitalUse = (word) => {
  // 正则
  // const reg = /^([A-Z][a-z]+|[a-z]+|[A-Z]+)$/
  // return reg.test(word)

  // 依次判断
  let s1 = word.toLowerCase()
  let s2 = word.toUpperCase()
  let s3 = s1.replace(s1.charAt(0), s1.charAt(0).toUpperCase())
  return word === s1 || word === s2 || word === s3
}

console.log(detectCapitalUse('Usa'))
