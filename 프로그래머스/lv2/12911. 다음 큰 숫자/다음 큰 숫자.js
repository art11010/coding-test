function solution(n) {
  const init = n.toString(2).replace(/[^1]/g, '').length;
  while (true) {
    n += 1;
    if (n.toString(2).replace(/[^1]/g, '').length === init) break;
  }
  return n;
}