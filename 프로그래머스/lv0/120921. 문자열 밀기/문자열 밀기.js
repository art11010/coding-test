function solution(A, B) {
  var answer = 0;
  let arrA = [...A];

  if (A == B) return answer;
  for (let i = 0; i < arrA.length; i++) {
    arrA.unshift(arrA.pop());
    if (arrA.join('') === B) {
      return (answer = i + 1);
    }
  }

  return (answer = -1);
}