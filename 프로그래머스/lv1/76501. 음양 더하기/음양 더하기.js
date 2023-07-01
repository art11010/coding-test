function solution(absolutes, signs) {
  return absolutes.reduce((acc, item, idx) => {
    if (!signs[idx]) item *= -1;
    return acc + item;
  }, 0);
}