function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let 약수 = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        약수++;
      }
    }

    약수 % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}