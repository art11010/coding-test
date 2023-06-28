function solution(strings, n) {
  function sortArr(a, b) {
    if (a.charCodeAt(n) - b.charCodeAt(n) == 0) {
      return a > b ? 1 : -1;
    }
    return a.charCodeAt(n) - b.charCodeAt(n) !== 0
      ? a.charCodeAt(n) - b.charCodeAt(n)
      : a > b
      ? 1
      : -1;
  }
  return strings.sort(sortArr);
}