function solution(A, B) {
  B.sort((a, b) => b - a);
  return A.sort((a, b) => a - b).reduce((acc, item, index) => {
    return acc + item * B[index];
  }, 0);
}