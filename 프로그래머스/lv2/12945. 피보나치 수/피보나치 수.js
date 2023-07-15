function solution(n) {
  // return n <= 1 ? n : (solution(n - 1) + solution(n - 2)) % 1234567;
  let fn0 = 0,
    fn1 = 1,
    fnSum = 0;
  for (let i = 2; i <= n; i++) {
    fnSum = (fn0 + fn1) % 1234567;
    fn0 = fn1;
    fn1 = fnSum;
  }

  return fnSum;
}