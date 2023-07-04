function solution(a, b) {
  return a.reduce((acc, itm, idx) => {
    return itm * b[idx] + acc;
  }, 0);
}