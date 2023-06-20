function solution(n) {
  const numArr = String(n).split('');
  return numArr.reduce((acc, item, index, arr) => {
    return Number(acc) + Number(item);
  }, 0);
}