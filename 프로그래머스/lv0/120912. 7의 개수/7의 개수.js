function solution(array) {
  var answer = 0;
  const arrString = array.join('');
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i] == 7) answer++;
  }

  return answer;
}