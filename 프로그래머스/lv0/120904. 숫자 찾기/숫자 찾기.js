function solution(num, k) {
  var answer = 0;

  num = String(num);
  answer = num.indexOf(k) >= 0 ? num.indexOf(k) + 1 : num.indexOf(k);

  return answer;
}
