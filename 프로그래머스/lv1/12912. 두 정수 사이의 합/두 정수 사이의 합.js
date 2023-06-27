function solution(a, b) {
  var answer = 0;
  let switchNum = 0;
  if (a > b) {
    switchNum = a;
    a = b;
    b = switchNum;
  }
  for (let i = a; i <= b; i++) {
    answer += i;
  }
  return answer;
}