function solution(num, total) {
  var answer = [];
  const mid = Math.floor(total / num);
  let count = 1;
  let isEven = num % 2 === 0 ? true : false;

  if (isEven) {
    answer.push(mid, mid + 1);
  } else {
    answer.push(mid);
  }

  while (answer.length < num) {
    if (isEven) {
      answer = [mid - count, ...answer, mid + count + 1];
    } else {
      answer = [mid - count, ...answer, mid + count];
    }
    count++;
  }

  return answer;
}