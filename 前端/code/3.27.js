// 递归函数：计算一个正整数的阶乘
function factorial(n) {
  // 递归出口：如果计算1的阶乘，就不用递归了
  if (n == 1) return 1;

  // 开始递归：如果当前这个 n 不是1，就返回 n * (n-1)!
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
