function solution(n, numlist) {
  var answer = [];

  numlist.forEach((item, index, arr) => {
    item % n === 0 && answer.push(item);
  });

  return answer;
}