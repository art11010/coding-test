function solution(arr, query) {
  query.forEach((itm, idx) => {
    idx % 2 === 0 ? (arr = arr.slice(0, itm + 1)) : (arr = arr.slice(itm));
  });
  return arr;
}