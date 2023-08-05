function solution(x) {
  const add = x
    .toString()
    .split('')
    .reduce((acc, itm) => {
      itm = +itm;
      return acc + itm;
    }, 0);
  return x % add === 0 ? true : false;
}