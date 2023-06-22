function solution(x, n) {
  var answer = [];
  let count = 0;
  while (count < n) {
    answer.push(x + x * count);
    count++;
  }
  return answer;
}