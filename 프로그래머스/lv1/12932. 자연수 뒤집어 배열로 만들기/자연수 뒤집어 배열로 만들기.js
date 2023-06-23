function solution(n) {
  var answer = [];
  n = String(n);

  for (let i = 0; i < n.length; i++) {
    answer.unshift(Number(n[i]));
  }
  return answer;
}