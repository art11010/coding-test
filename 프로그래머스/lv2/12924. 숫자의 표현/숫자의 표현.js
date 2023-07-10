function solution(n) {
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    let sum = i;
    let count = i;
    while (sum < n) {
      count++;
      sum += count;
      if (sum === n) answer++;
    }
  }
  return answer;
}