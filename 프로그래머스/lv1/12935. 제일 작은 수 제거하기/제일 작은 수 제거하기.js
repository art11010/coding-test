function solution(arr) {
  let answer = arr.filter((item) => {
    return item !== Math.min(...arr);
  });
  return answer.length ? answer : [-1];
}