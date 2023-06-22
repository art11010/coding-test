function solution(arr) {
  let answer =
    arr.reduce((acc, item) => {
      return acc + item;
    }, 0) / arr.length;
  return answer;
}